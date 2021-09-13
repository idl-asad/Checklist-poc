'use strict';

const revalidator = require('revalidator');
const { REGISTER } = require('../../lib/constants').validator;
const userService = require('../../lib/services/userService'); 

module.exports = registerUser;
async function registerUser(req, res, next) {
    try {
        const payload = req.body;
        const { valid, errors } = revalidator.validate(payload, REGISTER);
        
        if (!valid) {
            throw errors[0].message;
        }

        await userService.register(payload);
        res.json({});

    } catch(e) {
        next(e);
    }
}