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
      
    let time = "现在是猫猫和小鱼在一起的第" + Difference_In_Days + "天" + hh + "小时" + mm + "分" + ss + "秒";
  
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
    var description = data.weather[0].description;

    var remind = ''
    
    if (description.indexOf('rain')>-1){
        remind = '。猫猫宝宝下雨啦，要记得带伞哟，爱你❤️';
    }
    else if (description.indexOf('snow')>-1){
        remind = '。猫猫宝宝下雪啦，别忘了带伞，要多穿点衣服，不要冻着啦呜呜。';
    }
    else if (description.indexOf('clouds')>-1){
        remind = '。猫猫宝宝，今天的云可能有点多，不过不要怕，小鱼宝宝会一直陪着你的~';
    }
    else if (description.indexOf('clear sky')>-1){
        remind = '。猫猫宝宝今天是晴天哟，希望每天猫猫宝宝都可以像个小太阳一样开开心心！'
    }

    var remind_temp = ''
    if (feels_like < 10) {
        remind_temp = '猫猫宝宝现在冷冷的，要多穿点哟，不要肚肚痛啦，抱抱抱抱。'
    }
    else if (feels_like > 28) {
      remind_temp = '猫猫宝宝现在好热呀，要涂防晒、多喝水哟，不要中暑啦，爱你爱你！'
    }

    var weather_text = "今天卢森堡的天气是"+ description + remind + 
                       "现在的气温是" + celcius + "&degC" + 
                       "，体感温度是" + feels_like + "&degC" + 
                       "，最高温" + celcius_max + "&degC" + 
                       "，最低温" + celcius_min + "&degC。" + 
                       remind_temp;   
    
    console.log(weather_text);
    document.getElementById("weather").innerHTML = weather_text;

    let t = setTimeout(function(){ weather( 2960313 ) }, 60*1000);
  })
  .catch(function() {
    // catch any errors
    console.log('check error!')
  });
}

function photo(){
    var src_list = [
      'burger', 'death', 'flower',
      'gitfs', 'hands', 'scarf'
    ]
    var source_photo = src_list[Math.floor(Math.random() * array.length)]
    document.getElementById("photo").src = './photos/' + source_photo + '.jpg'
}

currentTime();
weather( 2960313 ); // City ID: LU
photo()