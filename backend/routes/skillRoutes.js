
const express = require("express");
const router = express.Router();
const { getAllSkills , getUsersBySkill} = require("../controllers/skillController");

router.get("/skills", getAllSkills);
router.get("/skills/:skill", getUsersBySkill);

module.exports = router;
