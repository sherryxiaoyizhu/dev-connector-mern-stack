const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

const userRouter = require('./routes/api/users');
const profileRouter = require('./routes/api/profile');
const postRouter = require('./routes/api/posts');
const authRouter = require('./routes/api/auth');

// Init Middleware
app.use(express.json({ extended: false }));

// Connect to Database
connectDB();
const port = process.env.PORT || 5001;

// Define Routes
app.use('/api/users', userRouter);
app.use('/api/profile', profileRouter);
app.use('/api/posts', postRouter);
app.use('/api/auth', authRouter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
