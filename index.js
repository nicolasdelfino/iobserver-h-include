const express = require('express')
const app = express();
const path = require('path');
const compression = require('compression');
const es6Renderer = require('express-es6-template-engine')
const PORT = process.env.PORT = 4000;

app.engine('html', es6Renderer);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(compression())
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('template.html');
})

app.get('/panel', (req, res) => {
    setTimeout(() => {
        const panel = [...Array(5).keys()].map((v, i) => ({id: i, name: `item_${i}`}))
        res.render('panel.html', {locals: {panel: panel}});
    }, 200);
})

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))