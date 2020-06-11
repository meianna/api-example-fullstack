const express = require("express");
const router = express.Router();

router.post("/api", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

router.post("/api/test", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
