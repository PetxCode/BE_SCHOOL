import { Request, Response } from "express";
import schoolModel from "../model/schoolModel";
import sessionModel from "../model/sessionModel";
import { Types } from "mongoose";

export const createSchoolSession = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { schoolID } = req.params;
    const { year, term } = req.body;

    const school = await schoolModel.findById(schoolID);

    if (school && school.schoolName) {
      const session = await sessionModel.create({
        year,
        term,
      });

      school.session.push(new Types.ObjectId(session._id));
      school.save();

      return res.status(201).json({
        message: "session created successfully",
        data: session,
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

export const viewSchoolSession = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { schoolID } = req.params;

    const school = await schoolModel.findById(schoolID).populate({
      path: "session",
    });

    return res.status(200).json({
      message: "viewing school session",
      data: school?.session,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error viewing school session",
    });
  }
};

export const studentsPerSession = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { sessionID } = req.params;
    const { totalStudents } = req.body;
    const session = await sessionModel.findById(sessionID);

    if (session) {
      const students = await sessionModel.findByIdAndUpdate(
        sessionID,
        { totalStudents },
        { new: true }
      );
      return res.status(200).json({
        message: "viewing session session",
        data: students,
      });
    } else {
      return res.status(404).json({
        message: "Error finding school session",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error viewing school session",
    });
  }
};

export const termPerSession = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { sessionID } = req.params;
    const { term } = req.body;
    const session = await sessionModel.findById(sessionID);

    if (session) {
      const students = await sessionModel.findByIdAndUpdate(
        sessionID,
        { term },
        { new: true }
      );
      return res.status(200).json({
        message: "viewing session session",
        data: students,
      });
    } else {
      return res.status(404).json({
        message: "Error finding school session",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error viewing school session",
    });
  }
};
