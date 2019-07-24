const express = require('express')
const router = express.Router()
const apiSummary = require('../service/apiSummary')

/* GET users listing. */
const blockSummary= async(req,res,next)=>{
  const count = req.params.count || 5;
  res.json(await apiSummary.getBlocks(count))
}
router.get('/blocksummary/:count?', blockSummary);

const transactionSummary= async(req,res,next)=>{
  const count = req.params.count || 5;
  res.json(await apiSummary.getTransactions(count))
}
router.get('/transactionsummary/:count?', transactionSummary);


module.exports = router
