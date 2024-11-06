const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");


// Import the route files for both forms
const user_form1_routes = require('./Route/users_form1_route');  // Assuming this file exists
const user_form2_routes = require('./Route/users_form2_route');  // Assuming this file exists
const ptsfForm3Routes = require("./Route/users_form3_route");

const app = express();
const port = 5001;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// Set up routes
app.use('/form1', user_form1_routes);  // Use /api/form1 for user form 1
app.use('/form2', user_form2_routes);  // Use /api/form2 for user form 2
app.use('/form3', ptsfForm3Routes);


// Example form submission endpoint (optional, if you need to handle form submission directly)
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log("Received form data:", formData);

    res.status(200).json({
        message: 'Form submitted successfully!',
        data: formData,
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
