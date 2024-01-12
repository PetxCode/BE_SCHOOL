import { Document, Schema, Types, model } from "mongoose";

interface iSession {
  year: string;
  term: string;
  totalStudents: number;
  totalExpense: number;
  totalAmountRecieved: number;
  profit: number;

  school: {};
}

interface iSessionData extends iSession, Document {}

const sessionModel = new Schema<iSessionData>(
  {
    year: {
      type: String,
    },

    term: {
      type: String,
    },

    totalStudents: {
      type: Number,
      default: 0,
    },

    totalExpense: {
      type: Number,
      default: 0,
    },

    totalAmountRecieved: {
      type: Number,
      default: 0,
    },

    profit: {
      type: Number,
      default: 0,
    },

    school: {
      type: Types.ObjectId,
      ref: "schools",
    },
  },
  { timestamps: true }
);

export default model<iSessionData>("sessions", sessionModel);
