// controllers/userController.js

// Example function to get all users
const getUsers = (req, res) => {
    const users = [{ name: 'John Doe' }, { name: 'Jane Smith' }];
    res.json(users);
};

// Example function to create a new user
const createUser = (req, res) => {
    const { name, email, password } = req.body; // assuming you're sending JSON
    // Here you would save the user to the DB, currently just simulating with a response
    res.json({ message: 'User created successfully!', user: { name, email } });
};

module.exports = { getUsers, createUser };
