// js

const API_KEY = "e7c3e6b00e4325c6fb24d9db6023b944";
let city_name = "seoul";
// let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

// 도시명 업데이트
function getWeatherData(cityname) {
  city_name = cityname;
  API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

  fetch(API_URL)
    .then(function (응답데이터) {
      return 응답데이터.json();
    })
    .then(function (data) {
      console.log(data);
      showWeather(data);
      // 이 안에서 함수를 실행시켜줘야 보임
    });
}
getWeatherData("seoul");
// () < 안에 아무 것도 넣지않아도 함수 실행함. seoul이라는 인자 넣어서 그 함수자료 안의 인자를 실행시키게 함

function showWeather(data) {
  const name = data.name; // 도시명
  const temp = parseInt(data.main.temp - 273.15); // 날씨 온도 , parseInt= 정수로 만드는 함수
  const desc = data.weather[0].main; // 날씨 상태
  const icon = data.weather[0].icon;
  console.log(name, temp, desc, icon);

  // UI 출력
  const citynameE1 = document.querySelector(".cityname");
  const temptE1 = document.querySelector(".temp");
  // const iconE1 = document.querySelector(".icon");
  const descE1 = document.querySelector(".desc");

  citynameE1.textContent = name;
  descE1.textContent = desc;
  temptE1.innerHTML = `${temp}&deg;`;
  // iconE1.innerHTML = `<i class="fa-solid fa-${desc}"></i>`;
  // iconE1.innerHTML = `<img src="src/images/${icon}.svg" alt="img">`;

  // 날씨 상태에 따른 아이콘 바꾸기
  let weather_icon = data.weather[0].icon;
  console.log(weather_icon);
  const iconE1 = document.querySelector(".icon");
  let icon_src = geticon(weather_icon);
  iconE1.src = icon_src;
  iconE1.innerHTML = `<img src="${icon_src}" alt="${icon_src}"/>`;

  function geticon(weather_icon) {
    let iconArray = [
      "01d",
      "01n",
      "02d",
      "02n",
      "03d",
      "03n",
      "04d",
      "04n",
      "09d",
      "09n",
      "10d",
      "10n",
      "11d",
      "11n",
      "13d",
      "13n",
      "50d",
      "50n",
    ];

    let iconArray_svg = [
      "images/01d.svg",
      "images/01n.svg",
      "images/02d.svg",
      "images/02n.svg",
      "images/03d.svg",
      "images/03n.svg",
      "images/04d.svg",
      "images/04n.svg",
      "images/09d.svg",
      "images/09n.svg",
      "images/10d.svg",
      "images/10n.svg",
      "images/11d.svg",
      "images/11n.svg",
      "images/13d.svg",
      "images/13n.svg",
      "images/50d.svg",
      "images/50n.svg",
    ];

    for (var i = 0; i < iconArray.length; i++) {
      if (iconArray[i] == weather_icon) {
        return iconArray_svg[i];
        break;
      }
    }
    return "none";
  }

  // 도시명 선택 변경 이벤트
  const select = document.getElementById("select");

  select.addEventListener("change", function (event) {
    const cityname = event.target.value;
    // 도시명이 변경되어야함

    getWeatherData(cityname);
  });
  // 이벤트랑 겹치지 않게 함수 나눠서 써주기

  $(function () {
    var today = new Date();
    // 현재 시간 구하기
    let theHours = today.getHours();
    var h = theHours;

    // 시간별로 주간/야간 배경 바꾸기
    // 6-12 아침 / 12-18 오후 / 18-06

    let bgArray = [
      "./images/morning.jpg",
      "./images/afternoon.jpg",
      "./images/evening.jpg",
    ];
    console.log(bgArray[0]);
    let bg = bgArray[0];

    if (h >= 6 && h < 12) {
      bg = bgArray[0];
    } else if (h >= 12 && h < 18) {
      bg = bgArray[1];
    } else {
      bg = bgArray[2];
    } // 18 ~ 06시

    $(".box").css("background-image", `url(${bg})`);
    // document.querySelector(".box").style.backgroundimage =
    //   "url(" + bgArray[0] + ")";
  });
}

var today = new Date();

//요일 구하기
let t = today.getDay();
var now = t;
console.log(now);

if (now == 0) {
  greeting = "Sunday";
} else if (now == 1) {
  greeting = "Monday";
} else if (now == 2) {
  greeting = "Tuesday";
} else if (now == 3) {
  greeting = "Wednesday";
} else if (now == 4) {
  greeting = "Tursday";
} else if (now == 5) {
  greeting = "Friday";
} else if (now == 6) {
  greeting = "Saturday";
} else {
  document.write("unknown");
}

// 현재 연/월/일

let theYears = today.getFullYear();
let theMonth = today.getMonth();
let theDate = today.getDate();

let theHours = today.getHours();
var h = theHours;
// theHours의 함수가 길어서 변수 설정

var m = theMonth + 1;
console.log(m);
let currentMonth = "January";

if (m == 1) {
  currentMonth = "January";
} else if (m == 2) {
  currentMonth = "February";
} else if (m == 3) {
  currentMonth = "March";
} else if (m == 4) {
  currentMonth = "April";
} else if (m == 5) {
  currentMonth = "May";
} else if (m == 6) {
  currentMonth = "June";
} else if (m == 7) {
  currentMonth = "July";
} else if (m == 8) {
  currentMonth = "August";
} else if (m == 9) {
  currentMonth = "September";
} else if (m == 10) {
  currentMonth = "October";
} else if (m == 11) {
  currentMonth = "November";
} else {
  currentMonth = "December";
}

let current = currentMonth + " " + theDate + "<br>" + greeting;
console.log(current);
let dateE1 = document.querySelector(".date");
dateE1.innerHTML = current;
