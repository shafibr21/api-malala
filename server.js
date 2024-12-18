import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import employeeRouter from "./routes/employeRoutes.js";

//App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

//Middlewares
app.use(express.json());
app.use(cors());

// // api endpoints
app.use("/api/employee", employeeRouter); // Use the routes

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on Port: " + port));
