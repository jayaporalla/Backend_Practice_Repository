const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const StudentModel = require('./studentSchema.js');

require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();

router.get("/get", async function (req, res) {
  try {
    const student = await StudentModel.find();
    return res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.post('/save', async function (req, res) {
    try {
        const newStudent = new StudentModel();
        newStudent.StudentId = req.body.StudentId;
        newStudent.Name = req.body.Name;
        newStudent.Roll = req.body.Roll;
        newStudent.Birthday = new Date(req.body.Birthday);
        newStudent.Address = req.body.Address;
        await newStudent.save();
        res.status(201).json({ message: 'Student saved successfully', student: newStudent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/update', async function (req, res) {
    try {
        const newStudent = await StudentModel.findByIdAndUpdate(req.body._id, {
          Name : req.body.Name,
        }, {new: true, runValidators: true});
        if (!newStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(201).json({ message: 'Student updated successfully', student: newStudent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/delete', async function (req, res) {
    try {
        const newStudent = await StudentModel.findByIdAndDelete(req.body._id);
        if (!newStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(201).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;