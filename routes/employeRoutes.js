import express from "express";
import {
  addEmployer,
  viewEmployers,
} from "../controllers/employeeControllers.js";

const employeeRouter = express.Router();

// POST route to add a new employer
employeeRouter.post("/add", addEmployer);

// GET route to view all employers
employeeRouter.get("/view", viewEmployers);

export default employeeRouter;
