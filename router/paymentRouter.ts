import { Router } from "express";
import {
  createPayment,
  viewSchoolPayment,
} from "../controller/paymentController";

const router: Router = Router();

router.route("/payment/:schoolID").post(createPayment);

router.route("/payment/:schoolID").get(viewSchoolPayment);

export default router;
