import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/posts.js"

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts',routes);
const CONNECTION_URL = "mongodb+srv://Nestjs-Demo:Nestjs-Demo@cluster0.ejb9yb1.mongodb.net/Memories"

const port = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(port,() => {
        console.log(`Server running on port ${port}`)
    }))
    .catch((error) => {
        console.log(error.message);
    });
