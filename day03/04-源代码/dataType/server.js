var http = require('http');

http.createServer(function (request, response) {

  // 发送 HTTP 头部 
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  response.writeHead(200, {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
    "Access-Control-Allow-Headers": "X-Requested-With",
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  const person = {
    name: 'joven',
    age: 27
  }

  // 发送响应数据 "Hello World"
  response.end(JSON.stringify(person));
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');