const express = require('express');
const app = express();
  
// 定义要监听的端口号
const listenedPort = '82';
  
app.get('/', (req, res) => res.send(`This is server application 2!`));
  
// 监听端口
app.listen(listenedPort, () => console.log(`success: ${listenedPort}`));