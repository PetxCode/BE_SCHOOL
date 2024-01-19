"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = require("../controller/paymentController");
const router = (0, express_1.Router)();
router.route("/payment/:schoolID").post(paymentController_1.createPayment);
router.route("/payment/:schoolID").get(paymentController_1.viewSchoolPayment);
exports.default = router;
