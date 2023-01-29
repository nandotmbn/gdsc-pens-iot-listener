import { Socket } from "socket.io";

let interval: any;

function WebSocket(io: Socket) {
    io.on('connection', (socket: Socket) => {
        console.log(`${socket.id} is connected`)
        socket.on('disconnect', () => {
            clearInterval(interval);
        });
    });
}

module.exports = WebSocket;