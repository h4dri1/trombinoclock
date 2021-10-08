require('dotenv').config();

const express = require('express');
const router = require('./app/router');

const app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');
app.set(express.static('./public'));

app.use(router);

app.use((req, res) => {
    res.status(404).render('404');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});