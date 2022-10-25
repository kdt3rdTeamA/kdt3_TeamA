const express = require('express');
const app = express();
const port = 8000

app.listen(port, function() {
    console.log('server on at port 8000');
})

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res){
    res.render('index');
})

// pomodoro render section
app.get('/pomodoro_dark', function(req, res) {
    res.render('pomodoro/pomodoro_dark');
})
app.get('/pomodoro_light', function(req, res) {
    res.render('pomodoro/pomodoro_light');
})
app.get('/pomodoro_tomato', function(req, res) {
    res.render('pomodoro/pomodoro_tomato');
})
app.get('/pomodoro_fresh', function(req, res) {
    res.render('pomodoro/pomodoro_fresh');
})
app.get('/pomodoro_sky', function(req, res) {
    res.render('pomodoro/pomodoro_sky');
})
app.get('/pomodoro_dog', function(req, res) {
    res.render('pomodoro/pomodoro_dog');
})
app.get('/pomodoro_cat', function(req, res) {
    res.render('pomodoro/pomodoro_cat');
})
app.get('/pomodoro_whale', function(req, res) {
    res.render('pomodoro/pomodoro_whale');
})
app.get('/pomodoro_mancity', function(req, res) {
    res.render('pomodoro/pomodoro_mancity');
})
app.get('/pomodoro_manuni', function(req, res) {
    res.render('pomodoro/pomodoro_manuni');
})
app.get('/pomodoro_tottenham', function(req, res) {
    res.render('pomodoro/pomodoro_tottenham');
})
app.get('/pomodoro_psg', function(req, res) {
    res.render('pomodoro/pomodoro_psg');
})

// timer render section
app.get('/timer_dark', function(req, res) {
    res.render('timer/timer_dark');
})
app.get('/timer_light', function(req, res) {
    res.render('timer/timer_light');
})
app.get('/timer_tomato', function(req, res) {
    res.render('timer/timer_tomato');
})
app.get('/timer_fresh', function(req, res) {
    res.render('timer/timer_fresh');
})
app.get('/timer_sky', function(req, res) {
    res.render('timer/timer_sky');
})
app.get('/timer_dog', function(req, res) {
    res.render('timer/timer_dog');
})
app.get('/timer_cat', function(req, res) {
    res.render('timer/timer_cat');
})
app.get('/timer_whale', function(req, res) {
    res.render('timer/timer_whale');
})
app.get('/timer_mancity', function(req, res) {
    res.render('timer/timer_mancity');
})
app.get('/timer_manuni', function(req, res) {
    res.render('timer/timer_manuni');
})
app.get('/timer_tottenham', function(req, res) {
    res.render('timer/timer_tottenham');
})
app.get('/timer_psg', function(req, res) {
    res.render('timer/timer_psg');
})

// sw render section
app.get('/sw_dark', function(req, res) {
    res.render('stopwatch/sw_dark');
})
app.get('/sw_light', function(req, res) {
    res.render('stopwatch/sw_light');
})
app.get('/sw_tomato', function(req, res) {
    res.render('stopwatch/sw_tomato');
})
app.get('/sw_fresh', function(req, res) {
    res.render('stopwatch/sw_fresh');
})
app.get('/sw_sky', function(req, res) {
    res.render('stopwatch/sw_sky');
})
app.get('/sw_dog', function(req, res) {
    res.render('stopwatch/sw_dog');
})
app.get('/sw_cat', function(req, res) {
    res.render('stopwatch/sw_cat');
})
app.get('/sw_whale', function(req, res) {
    res.render('stopwatch/sw_whale');
})
app.get('/sw_mancity', function(req, res) {
    res.render('stopwatch/sw_mancity');
})
app.get('/sw_manuni', function(req, res) {
    res.render('stopwatch/sw_manuni');
})
app.get('/sw_tottenham', function(req, res) {
    res.render('stopwatch/sw_tottenham');
})
app.get('/sw_psg', function(req, res) {
    res.render('stopwatch/sw_psg');
})

// gababo
app.get('/gababo', function(req, res) {
    res.render('miniGames/gababo');
})
// lotto
app.get('/lotto', function(req, res) {
    res.render('miniGames/lotto');
})

// wordle
app.get('/wordle', function(req, res) {
    res.render('miniGames/wordle');
})

//룰렛 
app.get('/roulette', function(req, res) {
    res.render('miniGames/roulette');
})

app.get('/roulette_bun', function(req, res) {
    res.render('miniGames/roulette_bun');
})

app.get('/roulette_han', function(req, res) {
    res.render('miniGames/roulette_han');
})

app.get('/roulette_il', function(req, res) {
    res.render('miniGames/roulette_il');
})

app.get('/roulette_jung', function(req, res) {
    res.render('miniGames/roulette_jung');
})

app.get('/roulette_yang', function(req, res) {
    res.render('miniGames/roulette_yang');
})
