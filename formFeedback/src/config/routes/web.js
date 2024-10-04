const express = require('express');
const { getHomepage, getFeedback, getDataDisplay } = require('../../controller/homeController.js');

const router = express.Router();

router.get('/', getHomepage);
router.get('/feedback', getFeedback);
router.get('/display-data', getDataDisplay); // New route for displaying data

module.exports = router;
