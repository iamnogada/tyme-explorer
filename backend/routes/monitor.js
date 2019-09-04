var express = require('express')
const path = require('path')
const EventEmitter = require('events');
var router = express.Router()
const WMainnetEvent = require('../service/WMainnetEvent')
const logger = require('../util/logger')


function sseDemo(req, res, id) {
  let messageId = 0;

  // const intervalId = setInterval(() => {
  //   console.log("send back"+id);

  //     res.write(`id: ${id}\n`);
  //     res.write(`event: userlogon\n`);
  //     res.write(`data: Test Message -- ${Date.now()}\n\n`);
  //     messageId += 1;
  // }, 1000);
  res.callback = (data) => {
    const timestamp = new Date()
    res.write(`id: ${ timestamp.toUTCString()}\n`);
    res.write(`event: mainnet\n`);
    res.write(`data: ${data}\n\n`);
  }
  WMainnetEvent.on(WMainnetEvent.OnBlock, res.callback)
  req.on('close', () => {
    WMainnetEvent.removeListener(WMainnetEvent.OnBlock, res.callback)
    console.log('closed');
    
  });
}

/* GET users listing. */
router.all('/:id?', function (req, res, next) {
  logger.debug('start push')
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  res.write('\n');
  sseDemo(req, res, req.params['id']);
})

module.exports = router
