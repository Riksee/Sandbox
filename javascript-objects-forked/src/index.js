//Challenge 1
let weather = {};
console.log(weather);

//Challenge 2
weather = {
  temp: 12,
  humidity: 36
};
console.log(weather);

//Challenge 3
console.log(weather.temp);
console.log(weather.humidity);

//Challenge 4
weather.windSpeed = 5;
console.log(weather.windSpeed);

//Challenge 5
let weathers = [{ temp: 12, humidity: 36, windSpeed: 5 }];
console.log(weathers[0].temp);
console.log(weathers[0].humidity);
console.log(weathers[0].windSpeed);

//Challenge 6
let forecast = [
  {
    day: "Monday",
    temp: 23
  },
  {
    day: "Tuesday",
    temp: 26
  },
  {
    day: "Wednesday",
    temp: 19
  },
  {
    day: "Thursday",
    temp: 20
  },
  {
    day: "Friday",
    temp: 25
  },
  {
    day: "Saturday",
    temp: 22
  },
  {
    day: "Sunday",
    temp: 18
  }
];
console.log(forecast[4].day);
console.log(forecast[4].temp);
console.log(
  `The temperature for ${forecast[4].day} will be ${forecast[4].temp} degrees.`
);

console.log(forecast[5].day);
console.log(forecast[5].temp);
console.log(
  `The temperature for ${forecast[5].day} will be ${forecast[5].temp} degrees.`
);

console.log(forecast[6].day);
console.log(forecast[6].temp);
console.log(
  `The temperature for ${forecast[6].day} will be ${forecast[6].temp} degrees.`
);
