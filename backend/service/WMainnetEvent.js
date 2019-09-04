const redisconfig = require('../config/redisconfig')
const apiconfig = require('../config/apiconfig')
const redis = require('redis')
const EventEmitter = require('events')
const logger = require('../util/logger')
const endpoint = redisconfig.endpoint||'127.0.0.1'
const port = redisconfig.port||'6379'
const channel = redisconfig.channel || 'mainnet:block'
const _eventName = "onblock"
const axios = require('axios')

class WMainnetEvent extends EventEmitter {
    constructor() {
        super()
        this.sub ={}
        this.onmessage = this.onmessage.bind(this)
        this.onsubscribe = this.onsubscribe.bind(this)
    }
    get OnBlock(){
        return _eventName
    }
    start(){
        this.sub = redis.createClient({
            host: endpoint,
            port: port
        })
        this.sub.on('subscribe', this.onsubscribe)
        this.sub.on('message', this.onmessage)
        this.sub.on('error', this.onerror)
        this.sub.subscribe(channel)
    }
    onsubscribe(channel,count){
        logger.info(`Connected to ${endpoint}`)
    }
    onmessage(channel,msg){
        logger.debug(`Received : ${msg}`)
        const self =this
        axios.get(apiconfig.exchange.url).then((result)=>{
            
            self.emit(result)
        })
        // this.emit(_eventName,msg)
    }
    onerror(error){
        logger.error(`Redis subscription error: ${error}`)
    }
}

module.exports = new WMainnetEvent()
// const sub = redis.createClient({
//     host: redisconfig.endpoint,
//     port: redisconfig.port
// })

// sub.on('subscribe',(channel,count)=>{
//     console.log("subscribe " + channel + ": " + count);
// })
// sub.on("message", function (channel, message) {
//     console.log("sub channel " + channel + ": " + message);

// });
// sub.on('error',(err)=>{
//     console.log(err);

// })
// sub.subscribe("mainnet");
// module.exports=sub