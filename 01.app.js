const http = require('http');   // <script src=""></script> 이런느낌.

const hostname = '127.0.0.1';   // Localhost
const port = 3000;

const server = http.createServer(onCreateServer)    // 서버에 요청이 들어오면 CB실행
server.listen(port, hostname, onConnected);         // 서버를 생성

function onCreateServer(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Wonbin');
    };

function onConnected() {
    console.log(`Server running at http://${hostname}:${port}/`);
}; 
