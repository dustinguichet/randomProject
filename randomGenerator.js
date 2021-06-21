let projects = [
    'Portfolio Website',
    'Weather App',
    'Online Quiz',
    'Secure Transactions',
    'Finance Management',
    'Visual Storytelling',
    'Adaptive Social Media Interface',
    'Navigation and Maps',
    'Communication Application',
    'Online Business Management App',
    'Building Offline Functionality',
    'Animation in Web Design',
    'Weather Checker',
    'Classroom Management System',
    'E-Wallet',
    'Downloading and Streaming Platform',
    'Web Assistant',
    'To-Do List',
    'Guess The Color',
    'Calculator',
    'Build a Robot',
    'Meme Generator',
    'Clock',
    'Tip Calculator',
    'Interactive Map',
    'Tik-Tak-Toe',
    'Maze Game',
    'Mouseover Element',
    'Login Authenticator',
    'JavaScript Drawing',
    'Sliding JavaScript Drawers',
    'Change Background Color',
    'Random Quotes Prjoect',
    'Pass the Message',
    'Counter',
    'Testimonials',
    'Filter',
    'Modal',
    'Grocery Cart',
    'Grocery List',
    'Course Form',
    'Flashcard',
    'Budget',
    'Random Joke',
    'Analogue Clock',
    'Mortgage Loan Calculator',
    'BMI Calculator',
    'Weight Conversion',
    '2D Breakout Game',
    'Digital Clock',
    'Event Countdown',
    'Word Count Tool',
    'Local Storage Contact Form',
    'Day of the Week',
    'Balloon Popping Game',
]

function newProject() {
    let randomNumber = Math.floor(Math.random() * (projects.length));
    document.getElementById('projectDisplay').innerHTML = projects[randomNumber];
}