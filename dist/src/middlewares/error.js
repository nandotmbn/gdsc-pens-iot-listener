"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppLogger = require("./logger");
module.exports = function (err, req, res, next) {
    AppLogger.error(err.message);
    res.status(500).send("Something failed");
};
