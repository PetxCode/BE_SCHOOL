import { Router } from "express";
import {
  changeSchoolAddress,
  changeSchoolName,
  createSchool,
  deleteSchool,
  loginSchool,
  logoutSchool,
  readSchoolCookie,
  verifySchool,
  viewAllSchools,
  viewSchoolStatus,
} from "../controller/schoolController";

const router: Router = Router();

router.route("/register-school/").post(createSchool);
router.route("/login-school/").post(loginSchool);

router.route("/delete-school/:schoolID").delete(deleteSchool);

router.route("/verify-school/:schoolID").get(verifySchool);
router.route("/view-school/:schoolID").get(viewSchoolStatus);
router.route("/view-all-school").get(viewAllSchools);

router.route("/logout-school").delete(logoutSchool);
router.route("/read-school-cookie").get(readSchoolCookie);

router.route("/change-school-name/:schoolID").patch(changeSchoolName);
router.route("/change-school-address/:schoolID").patch(changeSchoolAddress);

export default router;
