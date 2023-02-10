"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var http = require("http").createServer(app);
var Startup = require("./src/middlewares/startup");
var WebSocket = require("./src/middlewares/web-socket");
var socketIo = require("socket.io");
var io = socketIo(http, {
    cors: { origin: "*" },
});
Startup(app, io);
WebSocket(io);
app.post('/:appName/:deviceId', function (req, res) {
    io.emit("".concat(req.params.appName, ":").concat(req.params.deviceId), req.body);
    res.send('Express + TypeScript Server');
});
var port = process.env.PORT;
http.listen(port, function () { return console.log("App is listening on port ".concat(port)); });
