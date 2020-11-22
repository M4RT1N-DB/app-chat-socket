import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import { Message, User } from "./models";
import { config } from "../config";

export class ChatServer {
  public static readonly PORT: any = config.api.port;
  app: express.Application = express();
  server = createServer(this.app);
  io: Server = new Server(this.server, {
    cors: {
      methods: ["GET", "POST"],
    },
  });
  port: string | number = ChatServer.PORT;
  //-------------------------------
  messages: Message[] = [];
  users: User[] = [];
  //-------------------------------
  constructor() {
    this.server.listen(this.port, () => {
      console.log("Running server on the port %s", this.port);
    });
    this.io.on("connection", (socket: Socket) => {
      console.log("Connected client on port %s", this.port);
      //----------ALmacenar id de usuario
      socket.on("newUser", (user: User) => {
        console.log(`Ingreso nuevo Usuario ${user}`);
        this.users.push(user);
        console.log(this.users);
         socket.emit("users", user);
        /*socket.broadcast.emit("users", this.messages); */
      });
      /* socket.emit('messagesUsers',this.messages)
      socket.emit('users',this.users); */
      //----------Almacenar mensaje y emitir
      socket.on("message", (msg: Message) => {
        this.messages.push(msg);
        console.log("[Server](message): %s", JSON.stringify(this.messages));
        socket.emit("message", msg);
        /* socket.emit("messagesUsers", this.messages);
        socket.broadcast.emit("messagesUsers", this.messages); */
      });
      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}
