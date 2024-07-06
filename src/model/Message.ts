import mongoose, { Schema, Document } from "mongoose";

export interface MessagesTypes extends Document {
  content: string;
  createAt: Date;
}

export const MessageSchema: Schema<MessagesTypes> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Message =
  (mongoose.models.Message as mongoose.Model<MessagesTypes>) ||
  mongoose.model<MessagesTypes>("Message", MessageSchema);

export default Message;
