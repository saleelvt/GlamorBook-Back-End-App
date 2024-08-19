"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user"],
        default: "user",
    },
    status: {
        type: String,
        default: "Active",
    },
    chatHistory: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Chat",
        },
    ],
}, {
    timestamps: true,
});
exports.User = (0, mongoose_1.model)("Users", userSchema);
