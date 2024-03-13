const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname: {
        required: [true, "First name is required"],
        type: String
    },
    lastname: {
        required: [true, "Lirst name is required"],
        type: String
    },
    email: {
        required: [true, "Email name is required"],
        type: String
    },
    password: {
        required: [true, "Password name is required"],
        type: String
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;