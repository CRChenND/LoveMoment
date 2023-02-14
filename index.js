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
      'burger', 'death', 'flowers',
      'gifts', 'hands', 'scarf',
      'gent_bank', 'sunflower', 'rabbit',
      'musha', 'pearlgirl', 'cake', 
      'kiss', 'rainbow', 'christmas',
      'heart', 'ice_cream'
    ];
    var source_photo = src_list[Math.floor(Math.random() * src_list.length)];
    var head = 'https://raw.githubusercontent.com/CRChenND/LoveMoment/main/photos/'
    document.getElementById("moment").src = head + source_photo + '.jpg';

    var src_dict = {
      'burger':'猫猫宝宝，这是我们在根特吃的好吃汉堡哟yummy～', 
      'death':'猫猫宝宝，这是马拉之死，是我们在比利时的博物馆看的哟，应该是真的吧哈哈哈，爱你', 
      'flowers':'呜呜这是猫猫宝宝送我的花花，真好看！爱你！',
      'gitfs':'远隔重洋给猫猫宝宝带来的礼物们❤️', 
      'hands':'和猫猫宝宝走回家的时候一起牵手呜呜，想抱抱你', 
      'scarf':'猫猫宝宝送的围巾呜呜 真好看！',
      'gent_bank': '猫猫宝宝看好多鸟，这是在根特的河岸边，冷冷的呜呜',
      'sunflower': '猫猫宝宝这是梵高博物馆的向日葵！真好看～',
      'rabbit': '猫猫宝宝看兔兔，兔兔想你了呜呜',
      'musha': '猫猫宝宝看是慕夏！猫猫宝宝的手真好看！',
      'pearlgirl': '猫猫宝宝看是带珍珠耳环的少女，猫猫宝宝和她一样好看！爱你',
      'cake': '猫猫宝宝看我们在火锅店里点的爱心蛋糕～爱你，爱你，爱你～',
      'kiss': '猫猫宝宝亲亲，爱你，吃果冻呜呜',
      'rainbow': '猫猫宝宝看彩虹，希望猫猫宝宝每天都开心',
      'christmas': '猫猫宝宝看是我们平安夜的苹果', 
      'heart': '比心，猫猫宝宝爱你，还想再吃茶里的蛋糕呜呜',
      'ice_cream': '猫猫宝宝看好吃的冰淇淋呜呜，还想再吃开心果味的，爱你爱你'
    };

    document.getElementById("caption").innerHTML = src_dict[source_photo];
}

currentTime();
weather( 2960313 ); // City ID: LU
photo();