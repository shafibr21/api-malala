import employeeModel from "../models/employeeModel.js";

// Add Employer Controller
export const addEmployer = async (req, res) => {
  try {
    // Extract employer data from the request body
    const { name, email, location, role, phone } = req.body;

    // Validate required fields
    if (!name || !email || !location || !role || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the email is already in use
    const existingEmployer = await employeeModel.findOne({ email });
    if (existingEmployer) {
      return res
        .status(409)
        .json({ message: "Employer with this email already exists." });
    }

    // Create a new employer
    const newEmployer = new employeeModel({
      name,
      email,
      location,
      role,
      phone,
    });

    // Save to the database
    const savedEmployer = await newEmployer.save();

    // Respond with success
    res
      .status(201)
      .json({ message: "Employer added successfully.", data: savedEmployer });
  } catch (error) {
    console.error("Error adding employer:", error.message);
    res
      .status(500)
      .json({ message: "Failed to add employer. Please try again later." });
  }
};
