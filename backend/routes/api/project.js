const express = require('express');
const asyncHandler = require('express-async-handler');
const { Project } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const allProjects = await Project.findAll();
    return res.json(allProjects)
}));

module.exports = router;