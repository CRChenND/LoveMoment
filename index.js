function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    var date_origin = new Date("07/08/2022");
      
    // To calculate the time difference of two dates
    var Difference_In_Time = date.getTime() - date_origin.getTime();
      
    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.trunc(Difference_In_Time / (1000 * 3600 * 24));
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
      
    let time = "现在是猫猫和小鱼在一起的" + Difference_In_Days + "天" + hh + "小时" + mm + "分" + ss + "秒";
  
    document.getElementById("timer").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}

function weather( cityID ) {
  var key = 'ed8217628325dfa3c4e8c59fa356c100';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var feels_like = Math.round(parseFloat(data.main.feels_like)-273.15);
    var celcius_max = Math.round(parseFloat(data.main.temp_max)-273.15);
    var celcius_min = Math.round(parseFloat(data.main.temp_min)-273.15);
    var description = d.weather[0].description;

    var weather_text = "今天卢森堡的天气是"+ description + "，现在的实际温度是" + celcius + "&deg" + "，体感温度是" + feels_like + "&deg" + "，最高温" + celcius_max + "&deg" + "，最低温" + celcius_min + "&deg";   
    
    console.log(weather_text);
    document.getElementById("weather").innerHTML = weather_text;
  })
  .catch(function() {
    // catch any errors
  });
}

currentTime();
window.onload = function() {
  weather( 2960313 ); // City ID: LU
}