import { Types } from "mongoose";
import { Document, Schema, model } from "mongoose";

interface iSchool {
  email: string;
  enrollmentID: string;
  status: string;
  verify: boolean;

  started: boolean;

  schoolName: string;
  address: string;

  plan: string;
  refValue: Array<{}>;

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

    started: {
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

    refValue: [
      {
        type: {},
      },
    ],
  },
  { timestamps: true }
);

export default model<iSchoolData>("schools", schoolModel);
