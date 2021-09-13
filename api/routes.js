'use strict';

const router = require('express').Router();
const {
    register,
    login,
    phase } = require('./controllers');

router.post('/register', register);
router.post('/login', login);

router.get('/phase', phase.get);
router.post('/phase', phase.create);
router.post('/phase/task', phase.addTask);
router.put('/phase/task', phase.updateTask);

module.exports = router;