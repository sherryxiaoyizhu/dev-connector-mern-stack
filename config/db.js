const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try {
        await mongoose.connect(db); // , {userNewUrlParser: true}
        console.log('MongoDB Connected!');
    } 
    catch(err) {
        console.error(err.message);
        process.exit(1); // exit process with failure
    }
}

module.exports = connectDB;
