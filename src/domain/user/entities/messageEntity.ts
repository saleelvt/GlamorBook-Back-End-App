

import { Types, } from "mongoose";

export interface IMessage {

    chatId: Types.ObjectId;  // Unique identifier for the chat room
    senderId: Types.ObjectId; // ID of the sender (either user or salon)
    recipientId: Types.ObjectId; // ID of the recipient (either user or salon)
    content: string;           // Message content
    timestamp: Date;           // Message timestamp
    read: boolean;             // Flag to indicate if the message has been read

}

// domain/message/entities/MessageEntity.ts

export interface MessageEntity {
    chatId: string;
    senderId: string;
    recipientId: string;
    content: string;
    timestamp: Date;
    read: boolean;
  }
  
  export interface IChat {

    participants: Types.ObjectId[];  // Array of user and salon IDs in the chat
    lastMessageAt: Date;             // Timestamp of the last message

  }