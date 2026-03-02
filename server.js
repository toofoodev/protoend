const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let onlineUsers = 0;

io.on("connection", (socket) => {
    onlineUsers++;
    console.log("User connected:", onlineUsers);
    io.emit("userCount", { onlineUsers });
    console.log("[Protoend] Users online: ", onlineUsers);

    socket.on("disconnect", () => {
        onlineUsers--;
        console.log("User disconnected:", onlineUsers);
        io.emit("userCount", { onlineUsers });
        console.log("[Protoend] Users online: ", onlineUsers);
    });
});

server.listen(process.env.PORT || 3000);
const PORT = process.env.PORT || 3000;
console.log("[Protoend] Server is running!");