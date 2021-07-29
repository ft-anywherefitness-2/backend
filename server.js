require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const server = express();

const welcomeRouter = require("./api/welcome/welcome-router.js");
const authRouter = require("./api/auth/auth-router");
const usersRouter = require("./api/users/users-router.js");
const classesRouter = require("./api/classes/classes-router.js");

const origin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://frontend-iota.vercel.app/";

server.use(cors({ credentials: true, origin }));

server.use(helmet());
server.use(cookieParser());
server.use(express.json());

/* server.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
}); 
 */
server.use("/api", welcomeRouter);
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/classes", classesRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Its alive!",
  });
});

module.exports = server;
