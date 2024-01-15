import { Types } from "mongoose";
import { Document, Schema, model } from "mongoose";

interface iSchool {
  email: string;
  verify: boolean;
  enrollmentID: string;
  status: string;

  schoolName: string;
  address: string;

  plan: string;

  session: Array<{}>;
  staff: Array<{}>;

  payments: Array<{}>;
}

interface iSchoolData extends iSchool, Document {}

const schoolModel = new Schema<iSchoolData>(
  {
    address: {
      type: String,
    },

    plan: {
      type: String,
      default: "in active",
    },

    schoolName: {
      type: String,
    },
    status: {
      type: String,
    },
    enrollmentID: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },

    session: [
      {
        type: Types.ObjectId,
        ref: "sessions",
      },
    ],

    staff: [
      {
        type: Types.ObjectId,
        ref: "staffs",
      },
    ],

    payments: [
      {
        type: Types.ObjectId,
        ref: "payments",
      },
    ],
  },
  { timestamps: true }
);

export default model<iSchoolData>("schools", schoolModel);
