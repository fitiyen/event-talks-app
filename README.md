# Event Talks Schedule Website

A simple single-page application to display the schedule for a 1-day technical conference. The website shows a timeline of talks, including a lunch break, and allows users to filter the schedule by category.

## Features

-   Displays a full-day schedule of technical talks.
-   Includes a one-hour lunch break and 10-minute transition times between talks.
-   Allows users to search for talks by category in real-time.
-   Built with a simple Node.js back-end and a standard HTML, CSS, and JavaScript front-end.

## Technologies Used

-   **Back-end**: Node.js, Express.js
-   **Front-end**: HTML, CSS, JavaScript

## Project Structure

```
event-website/
├── public/
│   ├── index.html      # Main HTML file
│   ├── style.css       # CSS for styling
│   └── script.js       # Front-end logic
├── src/
│   └── index.js        # Node.js Express server
├── .gitignore          # Files to be ignored by Git
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (which includes npm) must be installed on your system.
-   [Git](https://git-scm.com/) for cloning the repository.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/fitiyen/event-talks-app.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd event-talks-app
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the server:**
    ```bash
    npm start
    ```

5.  **View the application:**
    Open your web browser and navigate to `http://localhost:3000`. You should see the event schedule.
