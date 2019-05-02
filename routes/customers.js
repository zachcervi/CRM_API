const express = require('express');
const router = express.Router();
const _ = require('lodash');


const {
    Customer,
    validateCustomer
} = require('../model/customer');
const customerData = require('../data/customers.json');


//GET List all customers associated with a given Agent's INT ID 
//(UI will list Name – last, first – and city, state in List View)
router.get('/:agent_id', (req, res) => {
    var result = customerData.filter(function (e) {
        return e.agent_id == req.params.agent_id;
    });
    if (result.length > 0) {

        //var parsedAddress = parseAddress(address);
        var address = _.map(result, a => _.pick(a, 'address'));

        var customer = _.map(result, c => _.pick(c, ['name', 'address']));

        res.send(customer);
    } else {
        return res.status(404).send('There are no customers associated with the given Agent id.')
    }


});

function parseAddress(a) {
    if (typeof a !== "string") throw "Address is not a string.";
    a = a.trim();
    var r = {},
        c = a.indexOf(',');
    r.city = a.slice(0, c);
    var f = a.substring(c + 2),
        s = f.lastIndexOf(' ');
    r.state = f.slice(0, s);
    r.zip = f.substring(s + 1);
    return r;
}

//POST
//Ability to Add New Customer
router.post('/', async (req, res) => {
    const {
        error
    } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        agent_id: req.body.agent_id,
        guid: req.body.guid,
        isActive: req.body.isActive,
        balance: req.body.balance,
        age: req.body.age,
        eyeColor: req.body.eyeColor,
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        registered: req.body.registered,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        tags: req.body.tags
    });
    console.log(customer)
    customerData.push(customer);
    res.send(customer);
});
//DELETE
// Ability to Delete Existing Customer
router.delete('/:id', (req, res) => {
    const customer = customerData.find(c => c._id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('The customer with the given id was not found');
    const index = customerData.indexOf(customer);
    customerData.splice(index, 1);

    res.send(customer);
});


//GET
//Return all customer data from our system.
router.get('/', (req, res) => {
    res.send(customerData);
});

//PUT
//Provide ability to Update Customer Information
router.put('/:id', (req, res) => {
    const customer = customerData.find(c => c._id === parseInt(req.params.id));
    console.log(customer);
    if (!customer) return res.status(404).send('The customer with the given id was not found');
    const {
        error
    } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    customer.agent_id = req.body.agent_id,
        customer.guid = req.body.guid,
        customer.isActive = req.body.isActive,
        customer.balance = req.body.balance,
        customer.age = req.body.age,
        customer.eyeColor = req.body.eyeColor,
        customer.name = req.body.name,
        customer.company = req.body.company,
        customer.email = req.body.email,
        customer.phone = req.body.phone,
        customer.address = req.body.address,
        customer.registered = req.body.registered,
        customer.latitude = req.body.latitude,
        customer.longitude = req.body.longitude,
        customer.tags = req.body.tags

    res.send(customer);

});
module.exports = router;