let temp = document.querySelector(".data");
let displayCity = document.querySelector(".city1");
let wind = document.querySelector(".speed");
let humidity = document.querySelector(".humidity");
const apiKey = "af7a23f03c0f237ed62d133f14e3f6cb";
let url = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric`
let ipt = document.querySelector(".search input")
let btn = document.querySelector(".search button")
let image = document.querySelector(".temp img");
async function getWeather(city){
    let response = await fetch(url + `&q=${city}`)
    var data = await (response.json());
    console.log(data);
    temp.innerHTML = `${parseInt(data.main.temp)}&deg;C`
    displayCity.innerHTML = `${data.name}`
    wind.innerHTML = `${data.wind.speed} kmph`
    humidity.innerHTML = `${data.main.humidity} %`
    if(data.weather[0].main=="Mist" || data.weather[0].main=="Haze"){
        image.src = "images/mist.png";
        document.body.style.backgroundImage = "url('bgmist.jpeg')"
    }

    else if(data.weather[0].main=="Clear"){
        image.src = "images/clear.png";
        document.body.style.backgroundImage = "url('bgclear.jpeg')"
    }
    else if(data.weather[0].main=="Clouds"){
        image.src = "images/clouds.png";
        document.body.style.backgroundImage = "url('bgcloud.jpeg')"
    }
    else if(data.weather[0].main=="Drizzle"){
        image.src = "images/drizzle.png";
        document.body.style.backgroundImage = "url('bgdrizzle.jpeg')"
    }
    else if(data.weather[0].main=="Rain"){
        image.src = "images/rain.png";
        document.body.style.backgroundImage = "url('bgrain.jpeg')"
    }
    else if(data.weather[0].main=="Snow"){
        image.src = "images/snow.png";
        document.body.style.backgroundImage = "url('bgsnow.jpeg')"
    }
    else{
        image.src = "";
        document.body.style.backgroundImage = "url('')"
    }
}
btn.addEventListener("click",function(e){
    let city = ipt.value;
    getWeather(city);
})
