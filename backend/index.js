const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const postsRoute = require("./routes/postsRouter");
const authRoute = require("./routes/authRouter");
const userRoute = require("./routes/userRouter");
const uploadRoute = require("./routes/uploadRouter");

dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;
const HOST = process.env.HOST || "localhost";


app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));


app.use("/api/posts", postsRoute);
app.use("/api/auth", authRoute);
app.use("/api/user",userRoute);
app.use("/api/files",express.static(path.join(__dirname,process.env.FILE_UPLOAD_DESTINATION)));

app.use("/api/upload",uploadRoute);

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to mongoDB");
});

app.listen(PORT, HOST,() => {
    console.log(`Server is running on Port ${PORT}`);

});





