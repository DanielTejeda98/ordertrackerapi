/*
  Route manager for the manager access routes.
  Access level must be 1 or 0 to reach these routes.
*/

const express = require('express');

const router = express.Router();

const mgrController = require('../controllers/mgr');

//TODO: add validation for access level
router.post('/newUser', mgrController.createUser);

module.exports = router;