"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sessionModel = new mongoose_1.Schema({
    year: {
        type: String,
    },
    term: {
        type: String,
    },
    totalStudents: {
        type: Number,
        default: 0,
    },
    totalExpense: {
        type: Number,
        default: 0,
    },
    totalAmountRecieved: {
        type: Number,
        default: 0,
    },
    profit: {
        type: Number,
        default: 0,
    },
    school: {
        type: mongoose_1.Types.ObjectId,
        ref: "schools",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("sessions", sessionModel);
