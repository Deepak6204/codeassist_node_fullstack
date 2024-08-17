const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


// const { admin } = require('./firebaseConfig');

// Endpoint to verify Firebase ID token
// app.post('/login', async (req, res) => {
//   const idToken = req.body.token;

//   try {
//     // Verify the ID token using Firebase Admin SDK
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     const uid = decodedToken.uid;

//     // Retrieve user data
//     const userRecord = await admin.auth().getUser(uid);

//     // Use user data in your database or session
//     console.log(`User logged in: ${userRecord.displayName}, Email: ${userRecord.email}`);

//     // Handle your database logic here

//     res.status(200).json({ message: 'User logged in successfully', user: userRecord });
//   } catch (error) {
//     console.error('Error verifying ID token:', error);
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// });


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/problems', (req, res) => {
    res.sendFile(__dirname + '/views/problems.html');
});

app.get('/problems/:id', (req, res) => {
    const problemId = req.params.id;
    res.send(`<h1>Problem ${problemId}</h1><p>Problem statement for problem ${problemId} will be displayed here.</p>`);
});

app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/views/notes.html');
});

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/views/profile.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
