import { config } from './api_key.js';
const API_KEY = config.API_KEY;

function onGeoGood(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        // console.log(data);
        let nameCon = document.querySelector('.weather span:first-child');
        let weatherCon = document.querySelector('.weather span:last-child');
        nameCon.innerText = data.name;
        weatherCon.innerText = `/ ${data.main.temp}β`;
        let weathericon = data.weather[0].icon.substr(0, 2);
        // let weathericon = '50' for test;

        let wicon = $('.wicon');
        // wicon.attr('src', ``);
        if (weathericon == '01') {
            wicon.text('π');
        }
        else if (weathericon == '02') {
            wicon.text('π€');
        }
        else if (weathericon == '03') {
            wicon.text('β');
        }
        else if (weathericon == '04') {
            wicon.text('β');
        }
        else if (weathericon == '09') {
            wicon.text('β');
        }
        else if (weathericon == '10') {
            wicon.text('π§');
        }
        else if (weathericon == '11') {
            wicon.text('β');
        }
        else if (weathericon == '13') {
            wicon.text('β');
        }
        else if (weathericon == '50') {
            wicon.text('π«');
        }
        else {
            wicon.text('fail to load weather icon');
        }
        
        // console.log(data);
    }));
}

function onGeobad() {
    alert('μμΉ μ λ³΄ μ¬μ©μ λμνμ¬ μ£ΌμΈμ!');
}


navigator.geolocation.getCurrentPosition(onGeoGood, onGeobad);