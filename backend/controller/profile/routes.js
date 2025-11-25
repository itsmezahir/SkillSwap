const express = require("express");
const router = express.Router();
const profileController = require("./controller")

router.get("/get",  profileController.getProfile);
router.post("/create",  profileController.createProfile);
router.put("/update",  profileController.updateProfile);

module.exports = router;