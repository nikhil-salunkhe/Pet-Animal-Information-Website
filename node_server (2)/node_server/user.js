const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 9000;

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like CSS, images) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST request from the signup form
app.post('/signup', (req, res) => {
    const { fullname, email, username, password, confirmPassword } = req.body;
    
    // Perform validation checks here (e.g., check if passwords match)
    // For simplicity, we'll assume validation is successful

    // Process the signup data (e.g., save to a database)
    // Replace this with your actual signup logic

    // Respond with a success message
    res.send('Signup successful!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});