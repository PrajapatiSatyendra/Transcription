const express= require('express');
const router = express.Router();
const mainControllers =require('../constrollers/main');


router.post(
  "/transcription",
  mainControllers.transcription
);
router.get('/hello', (req, res, next) => {
  res.send("Hello");
})

module.exports= router;