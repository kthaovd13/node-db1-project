const express = require('express');
const { from } = require('../data/dbConfig');

const db = require('../data/dbConfig');

const router = express.Router();

//CREATE
router.post('/', async (req, res) => {

    const budgetData = req.body

    try {
        const budget = await db.insert(budgetData).into('budget');
        res.status(201).json(budget)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "server error", error: err });
    }
});

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

    const { id } = req.params;

    try {
        const budget = await db.select('*').from('budget').where({ id }).first();
        if (budget) {
            res.status(200).json(budget);
        } else {
            res.status(400).json({ message: "Budget not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "server error"});
    }
});

//UPDATE
router.put('/:id', async (req, res) => {
    
    const { id } = req.params;
    const changes = req.body;

    try {
        const budget = await db.select('*').from('budget').where({ id }.update(changes));
        if (count) {
            res.status(200).json({ updated: count });
        } else {
            res.status(404).json({ message: "invalid ID" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "server error" });
    }
});

//DELETE
router.delete('/', async (req, res) => {

    const { id } = req.params;

    try {
        const count = await db.del().from('budget').where({ id });
        count ? res.status(200).json({ deleted: count })
            : res.status(404).json({ message: "Invalid ID" });
    } catch (err) {
        res.status(500).json({ message: "server error", error: err });
    }
});

module.exports = router;