const expressAsyncHandler = require('express-async-handler'); // Corrected import statement
const Expense = require('../../models/expense');
//create
const createExpCrtl = expressAsyncHandler(async (req, res) => {
    const { title, amount, description, user } = req.body;
    try {
        const expense = await Expense.create({
            title,
            amount,
            description,
            user,
        });
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

// fetch all income 
const fetchAllExpCtrl = expressAsyncHandler(async (req, res) => {
    const {page} = req?.query;
    try {
        const expense = await Expense.paginate({}, {limit: 10, page: Number(page), populate: "user"});
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

//fetch single income
const fetchExpDetailCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;
    try {
        const expense = await Expense.findById(id);
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});


//update income

const updateExpCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;
    const { title, amount, description, user } = req.body;
    try {
        const expense = await Expense.findByIdAndUpdate(id, {
            title,
            amount,
            description,
            user,
        }, {new: true});
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

//delete

const deleteExpCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;
    try {
        const expense = await Expense.findByIdAndDelete(id);
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

module.exports = { createExpCrtl, fetchAllExpCtrl, fetchExpDetailCtrl, updateExpCtrl, deleteExpCtrl};
