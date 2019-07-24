const { Block, Transaction } = require('../model')

class apiSummary{
    constructor(){

    }
    async getBlocks(count){
        count = Number.isNaN(count)? count : Number(count)
        var blocks = await Block.find({}).sort({_id:-1}).limit(count)
        return blocks
    }
    async getTransactions(count){
        count = Number.isNaN(count)? count : Number(count)
        var transactions = await Transaction.find({}).sort({timestamp: -1}).limit(count)
        return transactions
    }
}



module.exports = new apiSummary()