// 1. POST запрос

const http = require('http');


// сервер на порту 2000
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end();
}).listen(2000, '127.0.0.1', () => console.log('Server is listening on port:' + 2000));



// 2. фильтрация телефонов, сервер на порту 3000

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const url = require('url');
 
    let urlSearch = url.parse(req.url, true).query;
    // вырываем кусочки из url.query, а именно введенные пользователем параметры поиска
    // priceS, priceF и color
    let priceS = urlSearch.priceS;
    let priceF = urlSearch.priceF;
    let color = urlSearch.color;
    
    const phones = [
        {
            name: 'iphone7',
            price: 14000,
            color: 'black'
        },
        {
            name: 'iphone8',
            price: 18000,
            color: 'white'
        },
        {
            name: 'iphone10',
            price: 24000,
            color: 'pink'
        },
        {
            name: 'iphone11',
            price: 28000,
            color: 'black'
        },
        {
            name: 'sumsung',
            price: 14000,
            color: 'black'
        },
        {
            name: 'xiomi',
            price: 10000,
            color: 'black'
        },
        {
            name: 'meizu',
            price: 8000,
            color: 'green'
        },
        {
            name: 'huaiwei',
            price: 11000,
            color: 'black'
        },
    ];

    let filteredPhones = phones.filter(curr => {
        if (curr.price >= priceS && curr.price <= priceF && curr.color === color) {
            
            return curr
        }
    })
    if (req.url === `/phone?priceS=${priceS}&priceF=${priceF}&color=${color}`) {
        console.log(filteredPhones)
        res.end(JSON.stringify(filteredPhones));
    }
    res.end("incorrect URL");
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));
