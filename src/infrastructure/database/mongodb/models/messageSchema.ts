
import { IMessage } from "@/domain/user/entities/messageEntity";
import { Schema,model,Types, } from "mongoose";
import { IChat } from "@/domain/user/entities/messageEntity";

const MessageSchema = new Schema<IMessage>({
    chatId: { type: Schema.Types.ObjectId, required: true, ref: "Chat" },
    senderId: { type:Schema.Types.ObjectId, required: true, ref: "User" },
    recipientId: { type:Schema.Types.ObjectId, required: true, ref: "Salon" },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    read: { type: Boolean, default: false }
  });

  export const MessageModel = model<IMessage>("Message", MessageSchema);