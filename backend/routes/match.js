const express = require("express");
const { getMatches } = require("../controllers/matchController.js");

const router = express.Router();

router.get("/:userId", getMatches);

module.exports = router; 