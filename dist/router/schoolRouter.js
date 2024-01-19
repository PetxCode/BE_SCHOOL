"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schoolController_1 = require("../controller/schoolController");
const router = (0, express_1.Router)();
router.route("/register-school/").post(schoolController_1.createSchool);
router.route("/login-school/").post(schoolController_1.loginSchool);
router.route("/delete-school/:schoolID").delete(schoolController_1.deleteSchool);
router.route("/verify-school/:schoolID").get(schoolController_1.verifySchool);
router.route("/view-school/:schoolID").get(schoolController_1.viewSchoolStatus);
router.route("/view-all-school").get(schoolController_1.viewAllSchools);
router.route("/logout-school").delete(schoolController_1.logoutSchool);
router.route("/read-school-cookie").get(schoolController_1.readSchoolCookie);
router.route("/change-school-name/:schoolID").patch(schoolController_1.changeSchoolName);
router.route("/change-school-address/:schoolID").patch(schoolController_1.changeSchoolAddress);
router.route("/change-school-ref/:schoolID").patch(schoolController_1.changeSchoolRefValue);
router.route("/change-school-started/:schoolID").patch(schoolController_1.changeSchoolStarted);
exports.default = router;
