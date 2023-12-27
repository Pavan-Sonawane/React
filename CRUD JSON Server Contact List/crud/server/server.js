// const jsonServer = require('json-server');
// const cors = require('cors');

// const server = jsonServer.create();

// // Use CORS middleware
// server.use(cors());

// // Set the default middlewares (logger, static, cors)
// server.use(jsonServer.defaults());

// // Add your custom routes or other middleware here
// // Example: server.use('/api', customRouter);

// // Use the default router (db.json)
// const router = jsonServer.router('db.json');
// server.use(router);

// // Start the JSON server
// const PORT = 3001; // or any other port you prefer
// server.listen(PORT, () => {
//   console.log(`JSON Server is running on port ${PORT}`);
// });
const jsonServer = require('json-server');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const express = require('express');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use CORS middleware
server.use(cors());

// Set the default middlewares (logger, static, cors)
server.use(middlewares);

// Middleware for handling image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Save images to the 'public/images' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Middleware for serving static images
server.use('/images', express.static(path.join(__dirname, 'public/images')));

// Middleware for handling image uploads
server.post('/upload', upload.single('image'), (req, res) => {
  try {
    const postId = req.body.postId;
    const imageURL = `/images/${req.file.filename}`;

    const db = router.db;

    // Update the contact directly using the `update` method
    db.get('posts')
      .update({ id: postId }, { image: imageURL })
      .write();

    // Send back the imageURL in the response
    res.json({ imageURL });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Add your custom routes or other middleware here
// Example: server.use('/api', customRouter);

// Use the default router (db.json)
server.use(router);

// Start the JSON server
const PORT = 3001; // or any other port you prefer
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
