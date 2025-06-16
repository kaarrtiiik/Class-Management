const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// POST /classes — Create class
router.post('/classes', classController.createClass);

// GET /classes — Get all classes
router.get('/classes', classController.getAllClasses);

// GET /classes/:id — Get class by ID
router.get('/classes/:id', classController.getClassById);

// PUT /classes/:id — Update class
router.put('/classes/:id', classController.updateClass);

// DELETE /classes/:id — Delete class
router.delete('/classes/:id', classController.deleteClass);

module.exports = router;