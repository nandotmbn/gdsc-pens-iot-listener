import express, { Express, Request, Response } from "express";
import { Socket } from "socket.io";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"

module.exports = function (app: Express, io: Socket) {
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, token"
		);
		next();
	});

	app.use("/static", express.static("static"));
	app.use(bodyParser.json());
	app.use(express.urlencoded({ extended: true }));
	app.set("trust proxy", true);
	app.use(
		cors({
			exposedHeaders: "x-auth-token",
		})
	);
	app.set("socketIo", io);
};
