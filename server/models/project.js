const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    deadline: { type: Date, required: true }
});

const feedbackSchema = new mongoose.Schema({
    text: { type: String, required: true }
});

const Project = mongoose.model('Project', projectSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = { Project, Feedback };
