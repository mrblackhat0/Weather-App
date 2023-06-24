let citiesName = [Birgunj,Pokhara,Janakpur,Dharan,Lumbini,Lalitpur,Ilam]

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'eec5f91564msh780ddf7b7207f03p11914fjsnf6fb8af5f195',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const weather = (city) => {
  cityName.innerHTML = city;
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then((response) => {
      temp.innerHTML = response.temp + '&deg;C'
      tempt.innerHTML = response.temp
      min_temp.innerHTML = response.min_temp + '&deg;C'
      max_temp.innerHTML = response.max_temp + '&deg;C'
      humidity.innerHTML = response.humidity + '%'
      humdt.innerHTML = response.humidity
      feels_like.innerHTML = response.feels_like + '&deg;C'
      cloud_pct.innerHTML = response.cloud_pct
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset
      wind_speed.innerHTML = response.wind_speed
      windSpeed.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
    })
    .catch(e => console.error(e));
}

weather('Kathmandu');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  weather(city.value);
})

const addElements = (city, response) => {
  let tmp = document.createElement('td');
  tmp.innerHTML = response.temp + '&deg;C';
  city.append(tmp);
  
  let mintemp = document.createElement('td');
  mintemp.innerHTML = response.min_temp + '&deg;C';
  city.append(mintemp);
  
  let maxtemp = document.createElement('td');
  maxtemp.innerHTML = response.max_temp + '&deg;C';
  city.append(maxtemp);
  
  let humidity = document.createElement('td');
  humidity.innerHTML = response.humidity + ' %';
  city.append(humidity);
  
  let feels_like = document.createElement('td');
  feels_like.innerHTML = response.feels_like + '&deg;C';
  city.append(feels_like);
  
  let cloud_pct = document.createElement('td');
  cloud_pct.innerHTML = response.cloud_pct;
  city.append(cloud_pct);
  
  let sunrise = document.createElement('td');
  sunrise.innerHTML = response.sunrise;
  city.append(sunrise);
  
  let sunset = document.createElement('td');
  sunset.innerHTML = response.sunset;
  city.append(sunset);
  
  let wind_speed = document.createElement('td');
  wind_speed.innerHTML = response.wind_speed + ' km/hr';
  city.append(wind_speed);
  
  let wind_degrees = document.createElement('td');
  wind_degrees.innerHTML = response.wind_degrees;
  city.append(wind_degrees);
}


citiesName.forEach((city) => {
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city.innerText}`, options)
    .then(response => response.json())
    .then((response) => {
      addElements(city,response)
    })
    .catch(e => console.error(e));
})


