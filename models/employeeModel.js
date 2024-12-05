import mongoose from "mongoose";

const employerSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    location: { type: String, require: true },
    role: { type: String, require: true },
    phone: { type: Number, require: true },
  },
);

const employeeModel =
  mongoose.models.employee || mongoose.model("employee", employerSchema);

export default employeeModel;
