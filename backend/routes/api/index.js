const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const projectsRouter = require('./project.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/projects', projectsRouter);

module.exports = router;