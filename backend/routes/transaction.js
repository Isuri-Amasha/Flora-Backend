const { addIncome, getIncomes, deleteIncome } = require('../controller/income.controller')
const { addExpense, getExpenses, deleteExpense } = require('../controller/expense.controller')

const router = require('express').Router()

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router 