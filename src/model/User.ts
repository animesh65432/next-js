import mongoose, { Document, Schema } from "mongoose";
import { MessagesTypes, MessageSchema } from "./Message";

interface UserTypes extends Document {
  username: string;
  Email: string;
  Password: string;
  verifycode: string;
  verifycodeexpireydate: Date;
  isacceptingmessage: boolean;
  isverified: boolean;
  messages: MessagesTypes[];
}

const UsersSchema: Schema<UserTypes> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  Email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  Password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifycode: {
    type: String,
    required: false,
  },
  verifycodeexpireydate: {
    type: Date,
    required: false,
  },
  isacceptingmessage: {
    type: Boolean,
    required: false,
  },
  isverified: {
    type: Boolean,
    default: false,
  },
  messages: [MessageSchema],
});

const Users =
  (mongoose.models.Users as mongoose.Model<UserTypes>) ||
  mongoose.model<UserTypes>("Users", UsersSchema);

export default Users;
