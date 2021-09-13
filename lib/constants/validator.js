'use strict';

const REGISTER = {
    properties: {
        username: {
            type: 'string',
            required: true,
            messages: {
                type: 'username is not a string',
                required: 'username is required'
            }
        },
        email: {
            type: 'string',
            format: 'email',
            required: true,
            messages: {
                type: 'email is not a string',
                required: 'email is required',
                format: 'Invalid email format'
            }
        },
        password: {
            type: 'string',
            required: true,
            messages: {
                type: 'password is not a string',
                required: 'password is required'
            }
        },
        firstName: {
            type: 'string',
            required: true,
            messages: {
                type: 'firstName is not a string',
                required: 'firstName is required'
            }
        },
        lastName: {
            type: 'string',
            required: true,
            messages: {
                type: 'lastName is not a string',
                required: 'lastName is required'
            }
        }
    }
};

const LOGIN = {
    properties: {
        username: {
            type: 'string',
            required: true,
            messages: {
                type: 'username is not a string',
                required: 'username is required'
            }
        },
        password: {
            type: 'string',
            required: true,
            messages: {
                type: 'password is not a string',
                required: 'password is required'
            }
        }
    }
};

const ADD_PHASE = {
    properties: {
        title: {
            type: 'string',
            required: true,
            messages: {
                type: 'title is not a string',
                required: 'title is required'
            }
        }
    }
};

const ADD_TASK = {
    properties: {
        task: {
            type: 'string',
            required: true,
            messages: {
                type: 'task is not a string',
                required: 'task is required'
            }
        },
        phaseId: {
            type: 'string',
            required: true,
            messages: {
                type: 'phaseId is not a string',
                required: 'phaseId is required'
            }
        }
    }
};

const UPDATE_TASK = {
    properties: {
        phaseId: {
            type: 'string',
            required: true,
            messages: {
                type: 'taskId is not a string',
                required: 'taskId is required'
            }
        },
        taskId: {
            type: 'string',
            required: true,
            messages: {
                type: 'taskId is not a string',
                required: 'taskId is required'
            }
        },
        task: {
            type: 'string',
            required: true,
            messages: {
                type: 'phaseId is not a string',
                required: 'phaseId is required'
            }
        },
        isDone: {
            type: 'boolean',
            required: true,
            messages: {
                type: 'isDone is not a boolean',
                required: 'isDone is required'
            }
        } 
    }
};

module.exports = {
    ADD_TASK,
    ADD_PHASE,
    UPDATE_TASK,
    REGISTER,
    LOGIN
};