"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const schoolRouter_1 = __importDefault(require("./router/schoolRouter"));
const sessionRouter_1 = __importDefault(require("./router/sessionRouter"));
const staffRouter_1 = __importDefault(require("./router/staffRouter"));
const enums_1 = require("./utils/enums");
const mianError_1 = require("./error/mianError");
const handleError_1 = require("./error/handleError");
const mainApp = (app) => {
    try {
        app.use("/api", schoolRouter_1.default);
        app.use("/api", sessionRouter_1.default);
        app.use("/api", staffRouter_1.default);
        app.get("/", (req, res) => {
            try {
                return res.status(200).json({
                    message: "School API",
                });
            }
            catch (error) {
                return res.status(404).json({
                    message: "Error loading",
                });
            }
        });
        app.all("*", (req, res, next) => {
            next(new mianError_1.mainError({
                name: `Route Error`,
                message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
                status: enums_1.HTTP.BAD_REQUEST,
                success: false,
            }));
        });
        app.use(handleError_1.handleError);
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;
