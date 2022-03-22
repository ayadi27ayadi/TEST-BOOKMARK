// require("dotenv").config();
require("dotenv").config()
//import
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//db connection
mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
  console.log("DB connect");
});
mongoose.connection.on("error", (err) => {
  console.log("mongoose failed with", err);
});

// import Routers

const videoRouter = require ("./routers/videoRouter");
const photoRouter = require("./routers/photoRouter")
const authRouter = require ("./routers/authRouter");
//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router Middelware

app.use("/api/videos", videoRouter);
app.use("/api/photo", photoRouter);
app.use('/api/auth', authRouter );
app.get("/", (req, res) => res.send('Hello From Express'));
app.all('', (req,res)=> res.send("that router dasn't exist"))
const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(` Server is listening on port : http://localhost:${port}`))