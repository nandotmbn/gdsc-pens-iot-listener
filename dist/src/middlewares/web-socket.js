"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interval;
function WebSocket(io) {
    io.on('connection', function (socket) {
        console.log("".concat(socket.id, " is connected"));
        socket.on('disconnect', function () {
            clearInterval(interval);
        });
    });
}
module.exports = WebSocket;
