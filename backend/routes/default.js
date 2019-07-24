var express = require('express')
const path = require('path')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log("========:"+path.join(__dirname, 'dist/index.html'));
  
  res.sendFile(path.join(__dirname, 'dist/index.html'))
  
})

module.exports = router
