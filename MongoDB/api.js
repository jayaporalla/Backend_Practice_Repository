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

router.post('/save', function (req, res) {
    const newStudent = new StudentModel({
        StudentId: 101, 
        Name: "Sam", Roll: 1, Birthday: new Date("2001-09-10")  
    });

    newStudent.save(newStudent);
});

module.exports = router;