const mongoose = require('mongoose');
const Joi = require('joi');
const Agent = mongoose.model('Agent', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    tier: {
        type: Number,
        required: true
    },
    phone: {
        primary: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        }
    }
}));

function validateAgent(agent) {
    const schema = {
        name: Joi.string().required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        zipCode: Joi.string().required(),
        tier: Joi.number().required(),
        phone: Joi.object().keys({
            primary: Joi.string().required(),
            mobile: Joi.string().required()
        })
    }
    return Joi.validate(agent, schema);
}

exports.Agent = Agent;
exports.validateAgent = validateAgent;