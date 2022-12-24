const app = require('express')();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello!`);
});

app.post('/api/auth', (req, res) => {
  fetch(
    `http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=96eb0d8e36eb2d950ab288c4e0d04e6b9523043d9369fc7f127438e893e48a1f`,
    {
      method: 'POST',
      mode: 'no-cors',
    },
  )
    .then((response) => response.json())
    .then((data) => res.send(data))
})

/*app.listen(8888, () => {
  console.log(`Example app listening... `)
})*/

module.exports = app;
