import { Schema, Types, model } from "mongoose";

import { IChat } from "@/domain/user/entities/messageEntity";
const ChatSchema = new Schema<IChat>({
  participants: [{ type: Types.ObjectId, ref: "User", required: true }],
  lastMessageAt: { type: Date, default: Date.now },
});
export const ChatModel = model<IChat>("Chat", ChatSchema);
