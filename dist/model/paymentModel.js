"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const paymentModel = new mongoose_1.Schema({
    paymentID: {
        type: String,
    },
    schoolName: {
        type: String,
    },
    datePaid: {
        type: String,
    },
    expiryDate: {
        type: String,
    },
    cost: {
        type: Number,
    },
    school: {
        type: mongoose_1.Types.ObjectId,
        ref: "schools",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("payments", paymentModel);
