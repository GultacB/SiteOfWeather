
 document.addEventListener("DOMContentLoaded", main);

function main(){
    let searchButton = document.querySelector('.btn.btn-outline-success');
    searchButton.addEventListener("click", onButton);
}

async function onButton(){
    event.preventDefault();
    let cityName = document.querySelector('.form-control.me-2').value;
    let response = await getWeather(cityName);
    let data = await response.json();

    document.querySelector('#cityname').innerText = data.name;
    document.querySelector('.temp').innerText = data.main.temp + "°C";
    document.querySelector('.feelsLike').innerText = data.main.feels_like + "°";
    document.querySelector('.humidity').innerText = data.main.humidity + "%";
    document.querySelector('.wind').innerText = data.wind.speed + "km/h";

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    document.querySelector('#todayDate').innerText = today;

    let objToday = new Date();
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	dayOfWeek = weekday[objToday.getDay()];

    document.querySelector('#weekday').innerText = dayOfWeek;

    if(data.weather[0].main == "Clouds"){
        document.querySelector('.image').setAttribute("src", "images/cloud.png");
    }
    else if(data.weather[0].main == "Atmosphere"){
        document.querySelector('.image').setAttribute("src", "images/wind.png");
    }
    else if(data.weather[0].main == "Clear"){
        document.querySelector('.image').setAttribute("src", "images/sunny.png");
    }
    else if(data.weather[0].main == "Snow"){
        document.querySelector('.image').setAttribute("src", "images/snow.png");
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector('.image').setAttribute("src", "images/rain.png");
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector('.image').setAttribute("src", "images/drizzle.png");
    }
}

async function getWeather(cityName){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6b0ae7efc91b3293aa75c28ecf29ba81&units=metric`;
    let response = await fetch(url);
    return response;
}
 

