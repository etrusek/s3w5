const express = require('express');
const hbs = require('express-handlebars');
const {clientRoutes} = require('./routers/client')
const {homeRoutes} = require("./routers/home");
const {db} = require('./utils/db')

const app = express();

app.use(express.urlencoded({extended: true,}));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', hbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/', homeRoutes);
app.use('/client', clientRoutes);
app.get('/test', (req, res) => {
db.delete('c7cfaaaa-54b3-4ff2-9d86-dfc9725c29dd')
    res.send('ok');
})

app.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000...')
})