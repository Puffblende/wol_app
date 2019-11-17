'use strict';

const express = require('express');
const wol = require('node-wol');

// Constants
const PORT = 8082;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/wol/wakeup', (req, res) => {
  wol.wake('AC:22:0B:75:F4:42');
  console.log("command recieved");
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
