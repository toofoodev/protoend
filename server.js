const express = require("express");
const app = express();

let onlineUsers = 0;

app.get("/track", (req, res) => {
    onlineUsers++;
    console.log("Online Users:", onlineUsers);
    res.send("User counted");
});

app.get("/count", (req, res) => {
    res.json({ onlineUsers });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});