import { NextFunction, Request, Response } from "express";
const AppLogger = require("./logger");

module.exports = function (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	AppLogger.error(err.message);
	res.status(500).send("Something failed");
};
