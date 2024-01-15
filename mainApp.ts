import { Application, NextFunction, Request, Response } from "express";
import school from "./router/schoolRouter";
import session from "./router/sessionRouter";
import staff from "./router/staffRouter";
import payment from "./router/paymentRouter";

import { HTTP } from "./utils/enums";
import { mainError } from "./error/mianError";
import { handleError } from "./error/handleError";

export const mainApp = (app: Application) => {
  try {
    app.use("/api", school);
    app.use("/api", session);
    app.use("/api", staff);
    app.use("/api", payment);

    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "School API",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error loading",
        });
      }
    });

    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new mainError({
          name: `Route Error`,
          message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
          status: HTTP.BAD_REQUEST,
          success: false,
        })
      );
    });

    app.use(handleError);
  } catch (error) {
    return error;
  }
};
