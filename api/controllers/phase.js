'use strict';

const revalidator = require('revalidator');
const { ADD_PHASE, ADD_TASK, UPDATE_TASK } = require('../../lib/constants').validator;
const phaseService = require('../../lib/services/phaseService');

module.exports = {
    create,
    addTask,
    get,
    updateTask
};

async function create(req, res, next) {
    try {
        const payload = req.body;
        payload.userId = req.user.sub;
        const { valid, errors } = revalidator.validate(payload, ADD_PHASE);
    
        if (!valid) {
            throw errors[0].message;
        }
    
        await phaseService.addPhase(payload);
        res.send('Phase created successfully!');
    } catch(e) {
        next(e);
    }
}


async function addTask(req, res, next) {
    try {
        const payload = req.body;
        payload.userId = req.user.sub;
        const { valid, errors } = revalidator.validate(payload, ADD_TASK);
    
        if (!valid) {
            throw errors[0].message;
        }
    
        await phaseService.addTask(payload);
        res.send('Task added sucessfully!');
    } catch(e) {
        next(e);
    }
}


async function get(req, res, next) {
    try {
        const userId = req.user.sub;
        const phases = await phaseService.getPhases(userId);
        res.json(phases);
    } catch(e) {
        next(e);
    }
}


async function updateTask(req, res, next) {
    try {
        const payload = req.body;
        payload.userId = req.user.sub;
        const { valid, errors } = revalidator.validate(payload, UPDATE_TASK);
    
        if (!valid) {
            throw errors[0].message;
        }
    
        await phaseService.updateTask(payload);
        res.send('Task updated sucessfully!');
    } catch(e) {
        next(e);
    }
}
