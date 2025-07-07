const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDb Connected successfully");
    } catch (error) {
        console.log("error on connecting mongoDB", error);
        process.exit(1);
    }
}

module.exports = connectDB;
