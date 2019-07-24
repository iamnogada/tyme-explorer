var express = require('express')
const path = require('path')
const EventEmitter = require('events');
var router = express.Router()
const my = new EventEmitter()


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
    res.write(`id: ${id}\n`);
    res.write(`event: userlogon\n`);
    res.write(`data: ${data} -- ${Date.now()}\n\n`);
  }
  my.on('trigger', res.callback)
  req.on('close', () => {
    my.removeListener('trigger', res.callback)
    // clearInterval(intervalId);
  });
}

router.all('/trigger/:data', function (req, res, next) {
  res.send(`${req.params.data}`)
  my.emit('trigger', req.params.data)
})
/* GET users listing. */
router.all('/:id?', function (req, res, next) {
  console.log(`client id: ${req.params['id']}`);

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  res.write('\n');
  sseDemo(req, res, req.params['id']);
})

module.exports = router
