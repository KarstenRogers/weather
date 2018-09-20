const clickedOnCity = () => {
  let searchInput = document.querySelector('.city-input')
  let citySearch = searchInput.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+`${citySearch}&units=imperial&appid=59fa88271712f1716837d764589f204a`)
.then(response => {
  return response.json()
})


.then(weatherAttributes => {
      let weatherOnPage = document.querySelector('.weather-display')

      let weatherLiName = document.createElement('li')
      weatherLiName.textContent = weatherAttributes.name
      weatherOnPage.appendChild(weatherLiName)
      console.log(weatherAttributes.name)

      let weatherLiTemp = document.createElement('li')
      weatherLiTemp.textContent = weatherAttributes.main.temp
      weatherOnPage.appendChild(weatherLiTemp)
      console.log(weatherAttributes.main.temp)

      weatherAttributes.weather.forEach(weatherCondition => {
        let weatherLi = document.createElement('li')
        weatherLi.textContent = weatherCondition.main
        weatherOnPage.appendChild(weatherLi)
        console.log(weatherCondition.main)
      })
})

}

class weatherList {
  constructor(parentSelector) {
    this.parent = document.querySelector(parentSelector)
  }

  addCondition(parent, className, word) {
    let newLi = document.createElement('li')
    newLi.classList.add('conditions')
    newLi.textContent = 'the ' + className + ' is ' + word
    parent.appendChild(newLi)
  }
}

class weatherAPI {
  constructor(json) {
    this.json = json
  }
  weatherCondition(json) {
    let WeatherList = new weatherList('.weatherconditions')
    WeatherList.addCondition(parent, 'humidity', json.main.humidity)
    WeatherList.addCondition(parent, 'temp', json.main.temp)
    WeatherList.addCondition(parent, 'high', json.main.temp_max)
    WeatherList.addCondition(parent, 'low', json.main.temp_min)
  }
}
const main = () => {

let city = document.querySelector('.city')
city.addEventListener('click', clickedOnCity)
}

document.addEventListener('DOMContentLoaded', main)
