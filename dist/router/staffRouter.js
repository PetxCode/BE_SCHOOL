"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staffController_1 = require("../controller/staffController");
const router = (0, express_1.Router)();
router.route("/create-school-principal").post(staffController_1.createSchoolPrincipal);
router.route("/create-school-vice-principal").post(staffController_1.createSchoolVicePrincipal);
router.route("/create-school-teacher-admin").post(staffController_1.createSchoolTeacherByAdmin);
router
    .route("/create-school-teacher-prinicipal")
    .post(staffController_1.createSchoolTeacherByPrincipal);
router
    .route("/create-school-teacher-vice-prinicipal")
    .post(staffController_1.createSchoolTeacherByVicePrincipal);
exports.default = router;
