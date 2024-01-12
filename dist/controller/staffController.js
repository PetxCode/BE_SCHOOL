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
exports.createSchoolTeacherByVicePrincipal = exports.createSchoolTeacherByPrincipal = exports.createSchoolTeacherByAdmin = exports.createSchoolVicePrincipal = exports.createSchoolPrincipal = void 0;
const schoolModel_1 = __importDefault(require("../model/schoolModel"));
const staffModel_1 = __importDefault(require("../model/staffModel"));
const mongoose_1 = require("mongoose");
const enums_1 = require("../utils/enums");
const createSchoolPrincipal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const { staffName } = req.body;
        const school = yield schoolModel_1.default.findById(schoolID);
        if (school && school.schoolName && school.status === "school-admin") {
            const staff = yield staffModel_1.default.create({
                staffName,
                schoolName: school.schoolName,
                staffRole: enums_1.staffDuty.PRINCIPAL,
            });
            school.staff.push(new mongoose_1.Types.ObjectId(staff._id));
            school.save();
            return res.status(201).json({
                message: "principal created successfully",
                data: staff,
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
exports.createSchoolPrincipal = createSchoolPrincipal;
const createSchoolVicePrincipal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const { staffName } = req.body;
        const school = yield schoolModel_1.default.findById(schoolID);
        if (school && school.schoolName && school.status === "school-admin") {
            const staff = yield staffModel_1.default.create({
                staffName,
                schoolName: school.schoolName,
                staffRole: enums_1.staffDuty.VICE_PRINCIPAL,
            });
            school.staff.push(new mongoose_1.Types.ObjectId(staff._id));
            school.save();
            return res.status(201).json({
                message: "principal created successfully",
                data: staff,
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
exports.createSchoolVicePrincipal = createSchoolVicePrincipal;
const createSchoolTeacherByAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { schoolID } = req.params;
        const { staffName } = req.body;
        const school = yield schoolModel_1.default.findById(schoolID);
        if (school && school.schoolName && school.status === "school-admin") {
            const staff = yield staffModel_1.default.create({
                staffName,
                schoolName: school.schoolName,
                staffRole: enums_1.staffDuty.TEACHER,
            });
            school.staff.push(new mongoose_1.Types.ObjectId(staff._id));
            school.save();
            return res.status(201).json({
                message: "teacher created successfully",
                data: staff,
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
exports.createSchoolTeacherByAdmin = createSchoolTeacherByAdmin;
// email: email ==> email  findOne({email: email})
const createSchoolTeacherByPrincipal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { staffID } = req.params;
        const { staffName } = req.body;
        const staff = yield staffModel_1.default.findById(staffID);
        const school = yield schoolModel_1.default.findOne({ schoolName: staff === null || staff === void 0 ? void 0 : staff.schoolName });
        if (staff && staff.schoolName && staff.staffRole === "principal") {
            const newStaff = yield staffModel_1.default.create({
                staffName,
                staffRole: enums_1.staffDuty.TEACHER,
            });
            school.staff.push(new mongoose_1.Types.ObjectId(newStaff._id));
            school.save();
            return res.status(201).json({
                message: "teacher created successfully",
                data: newStaff,
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
exports.createSchoolTeacherByPrincipal = createSchoolTeacherByPrincipal;
const createSchoolTeacherByVicePrincipal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { staffID } = req.params;
        const { staffName } = req.body;
        const staff = yield staffModel_1.default.findById(staffID);
        const school = yield schoolModel_1.default.findOne({ schoolName: staff === null || staff === void 0 ? void 0 : staff.schoolName });
        if (staff && staff.schoolName && staff.staffRole === "vice principal") {
            const newStaff = yield staffModel_1.default.create({
                staffName,
                staffRole: enums_1.staffDuty.TEACHER,
            });
            school.staff.push(new mongoose_1.Types.ObjectId(newStaff._id));
            school.save();
            return res.status(201).json({
                message: "teacher created successfully",
                data: newStaff,
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
exports.createSchoolTeacherByVicePrincipal = createSchoolTeacherByVicePrincipal;
