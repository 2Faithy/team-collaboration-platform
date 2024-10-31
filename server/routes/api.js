const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Create a project
router.post('/projects', async (req, res) => {
    const { name, deadline } = req.body;
    const project = new Project({ name, deadline });
    await project.save();
    res.status(201).json(project);
});

// Get all projects
router.get('/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// Feedback endpoints
router.post('/feedback', async (req, res) => {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
});

router.get('/feedback', async (req, res) => {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
});

module.exports = router;
