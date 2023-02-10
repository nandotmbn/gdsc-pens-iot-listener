import express, { Express, Request, Response } from 'express';

const app: Express = express();
const http = require("http").createServer(app);
const Startup = require("./src/middlewares/startup");
const WebSocket = require("./src/middlewares/web-socket");
const socketIo = require("socket.io");
const io = socketIo(http, {
	cors: { origin: "*" },
});

Startup(app, io);
WebSocket(io);

app.post('/:appName/:deviceId', (req: Request, res: Response) => {
  io.emit(`${req.params.appName}:${req.params.deviceId}`, req.body)
  res.send('Express + TypeScript Server');
});

const port = process.env.PORT || 8080;
http.listen(port, () => console.log(`App is listening on port ${port}`));
