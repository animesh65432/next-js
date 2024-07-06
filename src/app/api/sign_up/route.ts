import { NextRequest, NextResponse } from "next/server";
import Users from "@/model/User";
import Connectodatabase from "@/lib/dbconnect";
import bycrptjs from "bcrypt";
import { sendVerificationEmail } from "@/helpers/sendverificationEmail";

const POST = async (req: NextRequest) => {
  try {
    await Connectodatabase();
    let { username, Email, Password } = await req.json();
    let checktheexsitinguserbyverfied = await Users.findOne({
      Email,
      isverified: true,
    });

    if (checktheexsitinguserbyverfied) {
      return NextResponse.json(
        {
          messges: "user alredy taken",
        },
        {
          status: 400,
        }
      );
    }

    let finduser = await Users.findOne({ Email });
    let verifycode = Math.floor(
      1000 * Math.random() + Math.random() * 80000
    ).toLocaleString();

    if (finduser) {
    } else {
      let hashapassword = await bycrptjs.hash(Password, 10);
      const expirydate = new Date();
      expirydate.setHours(expirydate.getHours() + 1);

      let newuser = new Users({
        username,
        Email,
        Password: hashapassword,
        verifycodeexpireydate: expirydate,
        isverified: false,
        isacceptingmessage: true,
        messages: [],
        verifycode,
      });

      await newuser.save();
    }
    let sendemail = await sendVerificationEmail(Email, verifycode);

    if (!sendemail.success) {
      return NextResponse.json(
        {
          message: sendemail.message,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        message: "sucessfully register your email",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log("errors happens for creating user ", error);

    return NextResponse.json(
      {
        message: "internal server errors",
      },
      {
        status: 500,
      }
    );
  }
};

export default POST;
