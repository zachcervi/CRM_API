const express = require('express');
const router = express.Router();

const agents = require('../data/agents.json');
const {
    Agent,
    validateAgent
} = require('../model/agent');

//GET Return List of all Agents
router.get('/', (req, res) => {
    res.send(agents);
});


//POST Ability to Add New Agent
router.post('/', async (req, res) => {
    const {
        error
    } = validateAgent(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let agent = new Agent({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        tier: req.body.tier,
        phone: req.body.phone
    });

    console.log(agent);
    //Save to DB would use await since this is an async func
    agents.push(agent);
    console.log(agents);
    res.send(agent);
});

//GET Retrieve all Agent Details by agent’s INT ID
router.get('/:id', (req, res) => {
    const agent = agents.find(a => a._id === parseInt(req.params.id));
    console.log(agent);
    if (!agent) return res.status(404).send('The agent with the given ID was not found.');
    res.send(agent);
});

//PUT Update Any/All Fields by Agent’s INT ID
router.put('/:id', (req, res) => {
    const agent = agents.find(a => a._id === parseInt(req.params.id));
    if (!agent) return res.status(404).send('The agent with the given ID was not found.');

    const {
        error
    } = validateAgent(req.body);
    if (error) {
        res.send(400).send(error.details[0].message);
        return;
    }
    agent.name = req.body.name;
    agent.address = req.body.address;
    agent.city = req.body.city;
    agent.state = req.body.state;
    agent.zipCode = req.body.zipCode;
    agent.tier = req.body.tier;
    agent.phone = req.body.phone;

    res.send(agent);
});

module.exports = router;