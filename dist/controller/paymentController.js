"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewSchoolPayment = exports.createPayment = void 0;
const schoolModel_1 = __importDefault(require("../model/schoolModel"));
const paymentModel_1 = __importDefault(require("../model/paymentModel"));
const mongoose_1 = require("mongoose");
const moment_1 = __importDefault(require("moment"));
const crypto_1 = __importDefault(require("crypto"));
const createPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        // const { cost, schoolName, expiryDate, datePaid, paymentID } = req.body;
        const school = yield schoolModel_1.default.findById(schoolID);
        if (school && school.schoolName) {
            const startDate = new Date();
            const startedDate = new Date().setTime(startDate.getTime());
            // const dataPeriod = startDate.setFullYear(startDate.getFullYear() + 1);
            const dataPeriod = startDate.setMinutes(startDate.getMinutes() + 1);
            const paymentID = crypto_1.default.randomBytes(3).toString("hex");
            const payments = yield paymentModel_1.default.create({
                cost: 200000,
                schoolName: school === null || school === void 0 ? void 0 : school.schoolName,
                expiryDate: (0, moment_1.default)(dataPeriod).format("LLLL"),
                datePaid: (0, moment_1.default)(startedDate).format("LLLL"),
                paymentID,
            });
            school.payments.push(new mongoose_1.Types.ObjectId(payments._id));
            school.save();
            yield schoolModel_1.default.findByIdAndUpdate(schoolID, {
                plan: "active",
            }, { new: true });
            const timer = setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                console.log("work out this...!");
                yield schoolModel_1.default.findByIdAndUpdate(schoolID, {
                    plan: "in active",
                }, { new: true });
                clearTimeout(timer);
            }), 1000 * 60);
            return res.status(201).json({
                message: "payment created successfully",
                data: school,
            });
        }
        else {
            return res.status(404).json({
                message: "unable to read school",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating school session",
        });
    }
});
exports.createPayment = createPayment;
const viewSchoolPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const school = yield schoolModel_1.default.findById(schoolID).populate({
            path: "payments",
        });
        return res.status(200).json({
            message: "viewing school payments",
            data: school,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error viewing school payments",
        });
    }
});
exports.viewSchoolPayment = viewSchoolPayment;
