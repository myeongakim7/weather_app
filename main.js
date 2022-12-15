// js

const API_KEY = "7da8cd09bfaaedc18b007356aecf7b8f";
let city_name = "seoul";
let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

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
  const temp = parseInt(data.main.temp - 273.15); // 날씨 온도 , parseInt= 정수로 만드는 함수 ,
  const desc = data.weather[0].main; // 날씨 상태
  const icon = data.weather[0].icon;
  console.log(name, temp, desc, icon);

  // UI 출력
  const citynameE1 = document.querySelector(".cityname");
  const temptE1 = document.querySelector(".temp");
  const iconE1 = document.querySelector(".icon");
  const descE1 = document.querySelector(".desc");

  citynameE1.textContent = name;
  descE1.textContent = desc;
  temptE1.innerHTML = `${temp}&deg;`;
  iconE1.innerHTML = `<i class="fa-solid fa-${desc}"></i>`;
  // iconE1.innerHTML = `<img src="src/images/${icon}.svg" alt="img">`;

  // 도시명 선택 변경 이벤트
  const select = document.getElementById("select");

  select.addEventListener("change", function (event) {
    const cityname = event.target.value;
    // 도시명이 변경되어야함

    getWeatherData(cityname);
  });
  $(function () {
    // 연월일, 시간 구하기
    var today = new Date();

    // 시간(시/분/초) - 12시간제로 나타내기/
    let theHours = today.getHours();

    var h = theHours;
    // theHours의 함수가 길어서 변수 설정

    // 시간별로 주간/야간 배경 바꾸기
    // 6-12 아침 / 12-18 오후 / 18-06

    let bgArray = [
      "./images/morning.jpg",
      "./images/afternoon.jpg",
      "./images/evening.jpg",
    ];
    console.log(bgArray[0]);

    if (h >= 6 && h < 12) {
      bgArray[0];
    } else if (h >= 12 && h < 18) {
      bgArray[1];
    } else {
      bgArray[2];
    }
    $(".box").css("background-image", `url(${bgArray[0]})`);
    // document.querySelector(".box").style.backgroundimage =
    //   "url(" + bgArray[0] + ")";
  });

  // 18 ~ 06시
}
