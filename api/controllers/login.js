'use strict';

const revalidator = require('revalidator');
const { LOGIN } = require('../../lib/constants').validator;
const userService = require('../../lib/services/userService'); 

module.exports = login;

async function login(req, res, next) {
    try {
        const payload = req.body;
        const { valid, errors } = revalidator.validate(payload, LOGIN);
        
        if (!valid) {
            console.log(errors);
            throw errors[0].message;
        }

        await userService.authenticate(payload, res, next);

    } catch(e) {
        next(e);
    }
}