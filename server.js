const express = require("express");
const server = express();
const dotenv = require("dotenv").config();

//tell express that Public is the root of our public web folder
server.use(express.static("Public"));

server.get("/", (res) => {
    res.sendStatus(200);
    res.sendFile(path.join(__dirname, "/Public/index.html"));
  });

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

server.get("/details", (req,res) => {
    const DETAILS = {
        PHONE: process.env.PHONE,
        EMAIL: process.env.EMAIL
    }
    res.send(DETAILS);
  });