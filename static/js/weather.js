const API_KEY = '62c62e8dac7bdb553dd0a22ff0cfa32c';

function onGeoGood(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        let nameCon = document.querySelector('.weather span:first-child');
        let weatherCon = document.querySelector('.weather span:last-child');
        nameCon.innerText = data.name;
        weatherCon.innerText = `${data.weather[0].main}/${data.main.temp}'C`;
    }));
}

function onGeobad() {
    Swal.fire('현재 위치를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoGood, onGeobad);