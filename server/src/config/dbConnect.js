const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect( process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

module.exports = dbConnect;
