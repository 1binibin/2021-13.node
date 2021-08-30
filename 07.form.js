// 정적 HTML, 동적 HTML

/*************** global init *****************/
const port = 3000
const express = require('express')
const app = express()

const books = [
	{ id: 1, name: '별주부전', content: '거북이가 용왕을...' },
	{ id: 2, name: '홍길동전', content: '아버지를 아버지라...' },
	{ id: 3, name: '심청전', content: '임당수 네이놈...' },
	{ id: 4, name: '콩쥐팥쥐전', content: '콩쥐 이것이...' },
	{ id: 5, name: '춘향전', content: '그네타다 낚였네...' },
]

/*************** Middleware *****************/
//application/json 을 처리
app.use(express.json()) //qs사용중, json방식 처리

//application/x-www-urlencoded 을 처리
app.use(express.urlencoded({ extended: false }))    // form처리,순수한 form을쓸땐 false, post로 보냈는데 배열과 객체를 써서 보내면 true(express가 알아서 변환해줌)
    // 딱하나 배열로 보냄 input type=radio

/*************** router init *****************/
app.use('/', express.static('./public'))
app.get('/', (req, res, next) =>{// get은 params, query 둘중에 하나
    //req.params.id (/book:/id)
    //req.query.id (/book?id=2)
    
} )

app.post('/book', (req, res, next) => { // req.body로 받아야함 밑에 두개
    // req.body (type: application/json) : axios.post('/book', { params:{...} })
    // req body (type: application/x-www-urlencoded):  <form method="post">...</form>
    console.log(req.body) // undefined 무작정 받지는 못함.
    res.send('받았음')
}) 

/*************** server init  *****************/
app.listen(port, () => { console.log('http://127.0.0.1:' + port) }) 
