const expressAsyncHandler = require('express-async-handler'); // Corrected import statement
const Income = require('../../models/income');

//create
const createIncCrtl = expressAsyncHandler(async (req, res) => {
    const { title, amount, description, user } = req.body;
    try {
        const income = await Income.create({
            title,
            amount,
            description,
            user,
        });
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

// fetch all income 
const fetchAllIncCtrl = expressAsyncHandler(async (req, res) => {
    const {page} = req.query;

    try {
        const income = await Income.paginate({}, {limit:10, page: Number(page), populate: "user"});
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//fetch single income
const fetchIncDetailCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;
    try {
        const income = await Income.findById(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});


//update income

const updateIncCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;
    const { title, amount, description, user } = req.body;
    try {
        const income = await Income.findByIdAndUpdate(id, {
            title,
            amount,
            description,
            user,
        }, {new: true});
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//delete

const deleteIncCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;
    try {
        const income = await Income.findByIdAndDelete(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

module.exports = { createIncCrtl, fetchAllIncCtrl, fetchIncDetailCtrl, updateIncCtrl, deleteIncCtrl};
