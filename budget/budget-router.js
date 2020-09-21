const express = require('express');
const { from } = require('../data/dbConfig');

const db = require('../data/dbConfig');

const router = express.Router();

//CREATE
router.post()

//READ
router.get('/', async (req, res) => {
    try {
        const budgets = await db('budgets');
        res.json(budgets);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: "error retrieving budgets", err });
    }
});

router.get('/', async (req, res) => {
    try {
        const budget = await db.select('*').from('budget').where({ id }).first();
        if (budget) {
            res.status(200).json(budget);
        } else {
            res.status(400).json({ message: "Budget not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "server error"})
    }
})

//UPDATE
router.put()

//DELETE
router.delete()

module.exports = router;