import express from "express";
import { addEmployer } from "../controllers/employeeControllers.js";

const employeeRouter = express.Router();

// POST route to add a new employer
employeeRouter.post("/add", addEmployer);

export default employeeRouter;
