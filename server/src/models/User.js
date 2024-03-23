const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;