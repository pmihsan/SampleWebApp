const express = require("express");
const router = express.Router();

router.post("/client/src/components/form", async(req, res) => {
    const inputs = req.body;
    console.log(inputs);
})