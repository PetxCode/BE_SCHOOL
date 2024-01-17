import { Request, Response } from "express";
import schoolModel from "../model/schoolModel";
import paymentModel from "../model/paymentModel";
import { Types } from "mongoose";
import moment from "moment";
import crypto from "crypto";

export const createPayment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { schoolID } = req.params;
    // const { cost, schoolName, expiryDate, datePaid, paymentID } = req.body;

    const school = await schoolModel.findById(schoolID);

    if (school && school.schoolName) {
      const startDate = new Date();
      const startedDate = new Date().setTime(startDate.getTime());
      // const dataPeriod = startDate.setFullYear(startDate.getFullYear() + 1);
      const dataPeriod = startDate.setMinutes(startDate.getMinutes() + 1);

      const paymentID = crypto.randomBytes(3).toString("hex");

      const payments = await paymentModel.create({
        cost: 200000,
        schoolName: school?.schoolName,
        expiryDate: moment(dataPeriod).format("LLLL"),
        datePaid: moment(startedDate).format("LLLL"),
        paymentID,
      });

      school.payments.push(new Types.ObjectId(payments._id));
      school.save();

      await schoolModel.findByIdAndUpdate(
        schoolID,
        {
          plan: "active",
        },
        { new: true }
      );

      const timer = setTimeout(async () => {
        console.log("work out this...!");
        await schoolModel.findByIdAndUpdate(
          schoolID,
          {
            plan: "in active",
          },
          { new: true }
        );
        clearTimeout(timer);
      }, 1000 * 60);

      return res.status(201).json({
        message: "payment created successfully",
        data: school,
      });
    } else {
      return res.status(404).json({
        message: "unable to read school",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error creating school session",
    });
  }
};

export const viewSchoolPayment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { schoolID } = req.params;

    const school = await schoolModel.findById(schoolID).populate({
      path: "payments",
    });

    return res.status(200).json({
      message: "viewing school payments",
      data: school,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error viewing school payments",
    });
  }
};
