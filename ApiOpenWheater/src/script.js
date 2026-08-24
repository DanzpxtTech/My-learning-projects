const city = document.getElementById("city").value.trim();
let cityUrl = encodeURIComponent("são paulo");
let results = document.querySelector(".metadata");

async function GetLatitude() {
  let ApiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityUrl}&count=10&language=en&format=json`;
  const req = await fetch(ApiUrl);
  let res = await req.json();
  console.log(res);
}

async function getWeather() {
  const res = await GetLatitude();
  let api = `https://api.open-meteo.com/v1/forecast?latitude=${res.results[0].latitude}&longitude=${res.results[0].longitude}&hourly=temperature_2m`;
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
}

//todo:
//hear what chatgpt have to say
