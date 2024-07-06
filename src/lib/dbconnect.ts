import mongoose from "mongoose";

type ConnectedTypes = {
  isConnected: boolean;
};

const Connected: ConnectedTypes = {
  isConnected: false,
};

const Connectodatabase = async (): Promise<void> => {
  if (Connected.isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.DBURL || "", {});
    Connected.isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    Connected.isConnected = false;
    process.exit(1);
  }
};

export default Connectodatabase;
