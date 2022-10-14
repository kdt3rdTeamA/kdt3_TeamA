const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function() {
    console.log('server on at port 8000');
})

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res){
    res.render('index');
})

app.get('/pomodoro_tomato', function(req, res) {
    res.render('pomodoro_tomato');
})