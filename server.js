const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Запит: ${req.method} ${req.url}`);

  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Привіт! Це головна сторінка.');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Сторінку не знайдено (404)');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});
