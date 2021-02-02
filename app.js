const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const procurarPokemon = require('./src/functions/procurarPokemon');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('index', { dado: { name: 'vazio', img: '#' } });
});

app.post('/', async (req, res) => {
  const { key } = req.body;
  const result = await procurarPokemon(key);

  if (result === 'Not Found') {
    res.render('index', {
      dado: {
        name: 'Not Found',
        img: 'Not Found',
      },
    });
  } else {
    res.render('index', {
      dado: {
        name: result.name,
        img: result.sprites.other.dream_world.front_default,
      },
    });
  }
});

app.listen(3000);
