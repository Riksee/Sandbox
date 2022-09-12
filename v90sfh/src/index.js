let weather = [
  {
    name: "paris",
    temp: 19.7,
    humidity: 80,
    tempF: 67.5
  },
  {
    name: "tokyo",
    temp: 17.3,
    humidity: 50,
    tempF: 63.1
  },
  {
    name: "lisbon",
    temp: 30.2,
    humidity: 20,
    tempF: 86.4
  },
  { name: "san francisco", temp: 20.9, humidity: 100, tempF: 69.6 },
  {
    name: "oslo",
    temp: -5,
    humidity: 20,
    tempF: 23
  }
];

// write your code here
let city = prompt(`Enter a city`).toLowerCase().trim();
if (city === weather[0].name) {
  alert(
    `It is currently ${Math.round(weather[0].temp)}°C(${Math.round(
      weather[0].tempF
    )}°F) in ${city} with a humidity of ${weather[0].humidity}%`
  );
} else {
  if (city === weather[1].name) {
    alert(
      `It is currently ${Math.round(weather[1].temp)}°C(${Math.round(
        weather[1].tempF
      )}°F) in ${city} with a humidity of ${weather[1].humidity}%`
    );
  } else {
    if (city === weather[2].name) {
      alert(
        `It is currently ${Math.round(weather[2].temp)}°C(${Math.round(
          weather[2].tempF
        )}°F) in ${city} with a humidity of ${weather[2].humidity}%`
      );
    } else {
      if (city === weather[3].name) {
        alert(
          `It is currently ${Math.round(weather[3].temp)}°C(${Math.round(
            weather[3].tempF
          )}°F) in ${city} with a humidity of ${weather[3].humidity}%`
        );
      } else {
        if (city === weather[4].name) {
          alert(
            `It is currently ${Math.round(weather[4].temp)}°C(${Math.round(
              weather[4].tempF
            )}°F) in ${city} with a humidity of ${weather[4].humidity}%`
          );
        } else {
          alert(
            `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${city}`
          );
        }
      }
    }
  }
}
