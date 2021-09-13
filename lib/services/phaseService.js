'use strict';

const { Phase: PhaseModel, User, Phase } = require('../../model');

module.exports = {
    addPhase,
    addTask,
    getPhases,
    updateTask
};

async function addPhase(payload) {
    const { title, userId } = payload;

    const parentPhase = (await PhaseModel.findOne({ user: userId }, {}, { sort: { 'created_at': -1 } })) || {};
    const { id: parentId } = parentPhase;

    const phase = await PhaseModel.create({
        title,
        parent: parentId,
        user: userId
    });

    const userById = await User.findById(userId);

    userById.phases.push(phase);
    return await userById.save();
};


async function addTask(payload) {
    try {
        const { task, phaseId } = payload;

        // generating random ID for task
        const id = (Math.random() + 1).toString(36).substring(2);

        const newTask = {
            task,
            id,
            isDone: false,
            created_at: new Date().toISOString()
        };

        const phase = await PhaseModel.findByIdAndUpdate(phaseId,
            { "$push": { "tasks": newTask } }
        );

        return phase;

    } catch (e) {
        throw e;
    }
}


async function getPhases(userId) {
    try {
        const { phases } = await User.findById(userId).populate('phases');
        return phases;
    } catch (e) {
        throw (e);
    }
}


async function updateTask(payload) {
    try {
        const { phaseId, taskId, task, isDone } = payload;
        const phase = await Phase.findById(phaseId);
        
        if (!phase) {
            throw new Error('Phase does not exist!');
        }

        if (!isDone) {
            // look child phase should not mark as true
            const childPhase = await Phase.findOne({ parent: phaseId, 'tasks.isDone': true });

            if (childPhase) {
                throw new Error(`Child phase's tasks should be unchecked first!`);
            }
        } else {
            // look for parent phase, its all tasks should be completed
            const parentPhase = await Phase.findOne({_id: phase.parent, 'tasks.isDone': false});
            if (parentPhase) {
                throw new Error(`Complete Previous phases's task first!`);
            }
        }

        await Phase.update({
            _id: phaseId,
            'tasks.id': taskId
        }, { 
            $set: { 'tasks.$.task': task, 'tasks.$.isDone': isDone }
        });

        return;
        
    } catch (e) {
        throw e;
    }
}

