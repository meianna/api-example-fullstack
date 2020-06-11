const express = require("express");
const app = express();

router.get("/api", (req, res) => {
  res.send({ msg: "success" });
});

module.exports = router;
