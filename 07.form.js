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
//application/json
app.use(express.json()) //json방식 처리

//application/x-www-urlencoded
app.use(express.urlencoded({ extended: false }))    // form처리,순수한 form을쓸땐 false, post로 보냈는데 배열과 객체를 써서 보내면 true(express가 알아서 변환해줌)


/*************** router init *****************/
app.use('/', express.static('./public'))
app.get('/', (req, res, next) =>{
    //req.params.id (/book:/id)
    //req.query.id (/book?id=2)
    
} )

app.post('/book', (req, res, next) => {
    // req.body (application/json) : axios.post('/book', { params:{...} })
    // req body (application/x-www-urlencoded): <form method="post">...</form>
    res.send('받았음')
    console.log(req.body)
}) 

/*************** server init  *****************/
app.listen(port, () => { console.log('http://127.0.0.1:' + port) }) 


