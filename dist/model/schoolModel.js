"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schoolModel = new mongoose_2.Schema({
    address: {
        type: String,
    },
    plan: {
        type: String,
        default: "in active",
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
    started: {
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
    payments: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "payments",
        },
    ],
    refValue: [
        {
            type: {},
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_2.model)("schools", schoolModel);
