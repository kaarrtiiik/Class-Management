const classModel = require('../models/classModel');

// Create class
async function createClass(req, res) {
  try {
    const newClass = await classModel.createClass(req.body);
    res.status(201).json(newClass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all classes
async function getAllClasses(req, res) {
  try {
    const classes = await classModel.getAllClasses();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get class by ID
async function getClassById(req, res) {
  try {
    const classItem = await classModel.getClassById(req.params.id);
    if (!classItem) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.json(classItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update class
async function updateClass(req, res) {
  try {
    const updatedClass = await classModel.updateClass(req.params.id, req.body);
    if (!updatedClass) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.json(updatedClass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete class
async function deleteClass(req, res) {
  try {
    const classItem = await classModel.getClassById(req.params.id);
    if (!classItem) {
      return res.status(404).json({ error: 'Class not found' });
    }
    await classModel.deleteClass(req.params.id);
    res.json({ message: 'Class deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass
};