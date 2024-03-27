const expressAsyncHandler = require('express-Async-Handler');
const genrateToken = require('../../middlewares/generateToken');
const User = require("../../models/User");


 const registerUser = expressAsyncHandler(
    async (req, res) =>{
        const {email, firstname, lastname, password} = req?.body;

        //to check if user is already registered

        const userExists = await User.findOne({ email});
        if (userExists) throw new Error ("User already exists");
       try {
       
        const user = await User.create({ email, firstname, lastname, password})
        res.status(200).json(user);
       } catch (error) {
        res.json('error')
       }
    })

    // fetch all users
    const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
        try {
            const users = await User.find({});
          res.json(users);
        } catch (error) {
            res.json(error)
        }
    });

    //login user

const loginUserCtrl = expressAsyncHandler (async(req,res) =>{
const {email, password} = req?.body;

// to verify user in db

const userFound = await User.findOne({email})

// check if user password match
if(userFound && (await userFound?. isPasswordMatch(password))){
    res.json({
        _id: userFound?._id,
        email: userFound?.email,
        firstname: userFound?.firstname,
        lastname: userFound?.lastname,
        isAdmin: userFound?.isAdmin,
        token: genrateToken(userFound ?. _id)
    });
}else{
    res.status(401);
    throw new Error ("invalid login attempt");
}
});

module.exports = {registerUser, fetchUsersCtrl, loginUserCtrl};