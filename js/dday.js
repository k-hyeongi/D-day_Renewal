var firstDay = new Date("2019-11-21");
var now = new Date();

var toFirst = firstDay.getTime(); // 이 날짜를 밀리초 단위로 바꿔줌
var toNow = now.getTime();

var passedDay = (toNow - toFirst) / (24*60*60*1000);
passedDay = Math.ceil(passedDay);

document.querySelector("#dateNow").innerHTML = passedDay+"일!!";

// D-day 함수
function calcDDay(days) {
    var goHome = new Date(days);
    var toGoHome = goHome.getTime();

    var dday = (toGoHome - toNow) / (24*60*60*1000);
    dday = Math.ceil(dday);

    document.querySelector("#dateArmy").innerHTML = "D - "+dday+"일";
}

calcDDay("2022-02-09");