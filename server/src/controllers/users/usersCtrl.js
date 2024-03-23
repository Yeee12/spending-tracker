const expressAsyncHandler = require('express-Async-Handler');
const User = require("../../models/User");


 const registerUser = expressAsyncHandler(
    async (req, res) =>{
        const {email, firstname, lastname, password} = req?.body;
        const userExists = await User.findOne({ email});
        if (userExists) throw new Error ("User already exists");
       try {
       
        const user = await User.create({ email, firstname, lastname, password})
        res.status(200).json(user);
       } catch (error) {
        res.json('error')
       }
    })

module.exports = {registerUser};