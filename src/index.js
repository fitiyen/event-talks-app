const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Mock data for the talks
const talks = [
  {
    "title": "The Future of JavaScript",
    "speakers": ["John Doe"],
    "category": ["JavaScript", "Web Development"],
    "duration": 60,
    "description": "A deep dive into the next features of JavaScript and how they will shape the future of web development."
  },
  {
    "title": "Building Scalable APIs with Node.js",
    "speakers": ["Jane Smith"],
    "category": ["Node.js", "API", "Backend"],
    "duration": 60,
    "description": "Learn how to design and build APIs that can handle millions of requests, using Node.js and best practices."
  },
  {
    "title": "CSS Grid and Flexbox: A Love Story",
    "speakers": ["Emily Jones", "Chris Wilson"],
    "category": ["CSS", "Frontend"],
    "duration": 60,
    "description": "A practical guide to mastering CSS Grid and Flexbox for creating complex and responsive layouts with ease."
  },
  {
    "title": "Introduction to Machine Learning with TensorFlow.js",
    "speakers": ["David Lee"],
    "category": ["Machine Learning", "JavaScript"],
    "duration": 60,
    "description": "Discover the power of machine learning in the browser with TensorFlow.js. No Python required!"
  },
  {
    "title": "State Management in React with Redux",
    "speakers": ["Sarah Miller"],
    "category": ["React", "State Management", "Frontend"],
    "duration": 60,
    "description": "An overview of Redux and how it can be used to manage the state of your React applications in a predictable way."
  },
  {
    "title": "Securing Your Web Applications",
    "speakers": ["Michael Brown"],
    "category": ["Security", "Web Development"],
    "duration": 60,
    "description": "Learn about common security vulnerabilities in web applications and how to protect your users and data."
  }
];

// API endpoint to get the talks
app.get('/api/talks', (req, res) => {
  res.json(talks);
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
