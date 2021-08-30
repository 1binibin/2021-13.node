/*************** global init **************/
const port = 3000
const express = require('express')
const app = express()


/*************** router init **************/

// Middleware
// app.use()는  GET/POST 가리지 않고 다 받는다
app.use((req, res, next) => {
	//res.send('주소 없어요')	//return이라고 생각하자., 중간처리 역할
	req.wonbin = 'wonbin'	//중간처리
	next()	// 다음으로 넘어감
})

// Static Router
app.use('/', express.static('./public')) //정적 html, 파일 찾으면 응답.

// Get Router
app.get('/', (req, res, next) => {
	// next()
	res.send('index.html이 없어요'+ req.wonbin)	// 파일 못찾으면 넘어감
})

// Get Router
app.get('/', (req, res, next) => {
	res.send('/book')
})

// POST Router
app.post('/', (req, res, next) => {
	res.send('POST/book')
})

//모든 라우터 찾았는데 없으면 Error

/*************** server init **************/
app.listen(port, serverInit(port))