const express = require('express');
const app = express();
  
// 定义要监听的端口号
const listenedPort = '81';
  
app.get('/', (req, res) => res.send(`This is server application 1!`));
  
// 监听端口
app.listen(listenedPort, () => console.log(`success: ${listenedPort}`));