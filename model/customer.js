const mongoose = require('mongoose');

const Joi = require('joi');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    agent_id: {
        type: Number,
        required: true
    },
    guid: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    balance: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    eyeColor: {
        type: String,
        required: true
    },
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    registered: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    tags: [String]
}));

function validateCustomer(customer) {
    const schema = {
        agent_id: Joi.number().required(),
        guid: Joi.string().required(),
        isActive: Joi.boolean().required(),
        balance: Joi.string().required(),
        age: Joi.number().required(),
        eyeColor: Joi.string().required(),
        name: Joi.object().keys({
            first: Joi.string().required(),
            last: Joi.string().required()
        }),
        phone: Joi.string().required(),
        company: Joi.string().required(),
        email: Joi.string().required(),
        address: Joi.string().required(),
        registered: Joi.string().required(),
        latitude: Joi.string().required(),
        longitude: Joi.string().required(),
        tags: Joi.array().items(Joi.string())

    }

    return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validateCustomer = validateCustomer;