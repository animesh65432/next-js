import { MessagesTypes } from "@/model/Message";

export interface ApiResponse {
  success: boolean;
  message: string;
  isacceptingmessages?: boolean;
  messages?: Array<MessagesTypes>;
}
