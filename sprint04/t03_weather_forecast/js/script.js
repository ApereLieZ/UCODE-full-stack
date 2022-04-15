const key = "b9ffc61cb512195ab55939429fb0be86"
let lat;
let lon;
let cityName = prompt("Input Name");



let daysData = document.getElementsByClassName("city-data");
let temperatureByDates = document.getElementsByClassName("temperature");
let icos = document.getElementsByClassName("weather-ico");



let apiCall = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&mode=json&units=metric&appid=${key}`;

fetch(apiCall)
.then((data) => {
  if(data.ok)
    return data.json()
  else{
    throw new Error("LOL");;
  }
    
})
.catch((e) =>{
  console.log(e);
  return;
})
.then((data) =>{
  
  lat = data.coord.lat;
  lon = data.coord.lon;
  return {x:lat, y:lon};
}).then((data) =>{
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.x}&lon=${data.y}&exclude=current,hourly,minutely,alerts&units=metric&appid=${key}`

  fetch(url)
  .then((data) => {
    return data.json()
  })
  .then((data) =>{
    console.log(data);
    for(let i = 0; i < daysData.length; i++){
      daysData[i].innerHTML = GetDate(i);
      temperatureByDates[i].innerHTML = data.daily[i].temp.day;
      icos[i].src = "http://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png";
    }
  })
  
})


function GetDate(n){
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + n);
  return currentDate.getDate() +"."+currentDate.getMonth();
}




