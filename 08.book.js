/*************** global init *****************/
const port = 3000
const express = require('express')
const app = express()

const books = [
    { id: 1, name: '별주부전', content: '거북이가 용왕을...' },
    { id: 2, name: '홍길동전', content: '아버지를 아버지라..' },
    { id: 3, name: '심청전', content: '임당수 네이놈...' },
    { id: 4, name: '콩쥐팥지전', content: '콩쥐 이것이...' },
    { id: 5, name: '춘향전', content: '그네타다가...' }
]


/*************** Middleware *****************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*************** router init *****************/
app.use('/',express.static('./public'))

app.get('/book', (req, res, next) => {
    res.status(200).json(books.slice().reverse())   // 복제를 해서 reverse deep copy
})

app.post('/book', (req, res, next) => {
    const { name, content } = req.body
    const id = books[books.length - 1].id + 1
    books.push({ id, name, content })
    res.status(200).redirect('/book/list.html')
})


/*************** server init  *****************/
app.listen(port, () => { console.log('http://127.0.0.1:' + port) }) 

