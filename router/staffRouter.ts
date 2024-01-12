import { Router } from "express";
import {
  createSchoolPrincipal,
  createSchoolTeacherByAdmin,
  createSchoolTeacherByPrincipal,
  createSchoolTeacherByVicePrincipal,
  createSchoolVicePrincipal,
} from "../controller/staffController";

const router: Router = Router();

router.route("/create-school-principal").post(createSchoolPrincipal);
router.route("/create-school-vice-principal").post(createSchoolVicePrincipal);
router.route("/create-school-teacher-admin").post(createSchoolTeacherByAdmin);
router
  .route("/create-school-teacher-prinicipal")
  .post(createSchoolTeacherByPrincipal);
router
  .route("/create-school-teacher-vice-prinicipal")
  .post(createSchoolTeacherByVicePrincipal);

export default router;
