const API_KEY = '62c62e8dac7bdb553dd0a22ff0cfa32c';

function onGeoGood(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        let nameCon = document.querySelector('.weather span:first-child');
        let weatherCon = document.querySelector('.weather span:last-child');
        nameCon.innerText = data.name;
        weatherCon.innerText = `/ ${data.main.temp}℃`;
        let weathericon = data.weather[0].icon.substr(0, 2);
        // let weathericon = '50' for test;

        wicon = $('.wicon');
        // wicon.attr('src', ``);
        if (weathericon == '01') {
            wicon.text('🌞');
        }
        else if (weathericon == '02') {
            wicon.text('🌤');
        }
        else if (weathericon == '03') {
            wicon.text('☁');
        }
        else if (weathericon == '04') {
            wicon.text('☁');
        }
        else if (weathericon == '09') {
            wicon.text('☔');
        }
        else if (weathericon == '10') {
            wicon.text('🌧');
        }
        else if (weathericon == '11') {
            wicon.text('⛈');
        }
        else if (weathericon == '13') {
            wicon.text('❄');
        }
        else if (weathericon == '50') {
            wicon.text('🌫');
        }
        else {
            wicon.text('fail to load weather icon');
        }
        
        
        
        console.log(data);
    }));
}

function onGeobad() {
    Swal.fire('현재 위치를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoGood, onGeobad);