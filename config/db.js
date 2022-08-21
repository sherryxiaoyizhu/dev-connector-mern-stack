const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose
      .connect(db)
      .then(() => console.log('MongoDB Connected!'))
      .catch((err) => console.log(err));
  } catch (err) {
    console.error(err.message);
    process.exit(1); // exit process with failure
  }
};

module.exports = connectDB;
