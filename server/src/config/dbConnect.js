const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://me:5FgijHNh5k7ZXwdP@expenditure.ssgx5dg.mongodb.net/?retryWrites=true&w=majority&appName=expenditure", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

module.exports = dbConnect;
