const express = require('express')
const app = express();
const path = require('path');
const es6Renderer = require('express-es6-template-engine')
const PORT = process.env.PORT = 4000;

app.engine('html', es6Renderer);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('template.html');
})

app.get('/panel', (req, res) => {
    const panel = getPanel()
    res.render('panel.html', {locals: {panel: panel}});
})

const getPanel = () => [...Array(5).keys()].map((v, i) => ({id: i, name: `item_${i}`}))

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))