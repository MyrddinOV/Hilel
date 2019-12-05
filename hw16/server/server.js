const http = require('http'); // подключаем http модуль!
http.createServer((req, res) => {

    if (req.url === '/data') {
        res.end('SUCCSESS');
    }
    let obj = JSON.stringify({ name: 'SERGEi', lastName: 'SHAKHOV' })
    res.end(obj);


}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));