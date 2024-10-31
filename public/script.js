const projectForm = document.getElementById('projectForm');
const feedbackForm = document.getElementById('feedbackForm');
const projectList = document.getElementById('projectList');
const feedbackList = document.getElementById('feedbackList');

// Handle project creation
projectForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const projectName = document.getElementById('projectName').value;
    const projectDeadline = document.getElementById('projectDeadline').value;

    const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: projectName, deadline: projectDeadline }),
    });

    if (response.ok) {
        loadProjects();
        projectForm.reset();
    }
});

// Handle feedback submission
feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const feedbackText = document.getElementById('feedbackText').value;

    const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: feedbackText }),
    });

    if (response.ok) {
        loadFeedback();
        feedbackForm.reset();
    }
});

// Load projects
async function loadProjects() {
    const response = await fetch('/api/projects');
    const projects = await response.json();
    projectList.innerHTML = projects.map(project => `<div>${project.name} - Due: ${project.deadline}</div>`).join('');
}

// Load feedback
async function loadFeedback() {
    const response = await fetch('/api/feedback');
    const feedbacks = await response.json();
    feedbackList.innerHTML = feedbacks.map(feedback => `<div>${feedback.text}</div>`).join('');
}

// Initial load
loadProjects();
loadFeedback();
