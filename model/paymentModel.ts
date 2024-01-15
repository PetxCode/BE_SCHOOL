import { Document, Model, Schema, Types, model } from "mongoose";

interface iStaff {
  datePaid: string;
  expiryDate: string;
  schoolName: string;

  cost: number;

  paymentID: string;

  school: {};
}

interface iStaffData extends iStaff, Document {}

const paymentModel = new Schema<iStaffData>(
  {
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
      type: Types.ObjectId,
      ref: "schools",
    },
  },
  { timestamps: true }
);

export default model<iStaffData>("payments", paymentModel);
