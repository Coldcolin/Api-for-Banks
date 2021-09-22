const express = require("express");
const router = express.Router();
const {createBank, getBanks, updateBank, deleteBank, getSingle} = require("../controllers/bankController")

router.post("/bank", createBank);

router.get("/bank", getBanks);

router.get("/bank/:id", getSingle);

router.patch("/bank/:id", updateBank)

router.delete("/bank/:id", deleteBank)

module.exports = router;