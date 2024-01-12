"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schoolModel = new mongoose_2.Schema({
    address: {
        type: String,
    },
    schoolName: {
        type: String,
    },
    status: {
        type: String,
    },
    enrollmentID: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    session: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "sessions",
        },
    ],
    staff: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "staffs",
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_2.model)("schools", schoolModel);
