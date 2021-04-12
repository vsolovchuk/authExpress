const firebase = require("../db");
const Student = require("../models/student");
const firestore = firebase.firebase();

const addStudent = async (req, res, next) => {
  try {
    const data = req.body;
    const student = await firestore.collection("students").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.massage);
  }
};
