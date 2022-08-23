const express = require('express');

const router = express.Router()

router.get("/", (req, res)=>{
  res.send("Gallery")
})

router.get("/photos", (req, res)=>{
  res.send("Album")
})

module.exports = router