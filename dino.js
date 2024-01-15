// menu
let menu = document.querySelector(".menu");
let theme = document.querySelector(".theme");
// cactuses
let cactuses = document.querySelector(".cactuses");
// earth
let earth = document.querySelector(".earth");
// sky
let sky = document.querySelector(".sky");
// stopwatch
let stopwatch = document.querySelector(".stopwatch");
let playPauseBtn = document.querySelector(".play-pause-btn");
let resetBtn = document.querySelector(".reset");
let buttons = document.querySelectorAll(".buttons button");
let [hour, minute, second] = [0, 0, 0];
let counter;


////////////////////menu

theme.lastElementChild.addEventListener("click", () => {
    theme.lastElementChild.firstElementChild.classList.toggle("fa-moon");
    theme.lastElementChild.firstElementChild.classList.toggle("fa-sun");
    document.body.classList.toggle("dark-theme");
})
menu.addEventListener("click", () => {
    menu.classList.toggle("openmenu")
    theme.classList.toggle("b-w-160");

})
///////////////////stopwatch
playPauseBtn.addEventListener("click", () => {
    start = false;
    if (playPauseBtn.firstElementChild.classList.contains("fa-play")) {
        counter = setInterval(count, 1000);
        earth.firstElementChild.style = "animation: dinosaurWalking .2s linear infinite";
        sky.style = "animation: movementSky 30s linear infinite";
        earth.style = "animation: earthMovement .2s linear infinite";
        cactuses.style = "animation: cactusMovement 9s linear infinite";
    }
    if (stopwatch.lastElementChild.firstElementChild.firstElementChild.classList.contains("fa-pause")) {
        clearInterval(counter);
        earth.firstElementChild.style = "animation: none";
        sky.style = "animation: none";
        earth.style = "animation: none";
        cactuses.style = "animation: none";
    }
    stopwatch.lastElementChild.firstElementChild.firstElementChild.classList.toggle("fa-pause");
    stopwatch.lastElementChild.firstElementChild.firstElementChild.classList.toggle("fa-play");

})
resetBtn.addEventListener("click", () => {
    stopwatch.lastElementChild.firstElementChild.firstElementChild.classList.replace("fa-pause", "fa-play");
    earth.firstElementChild.style = "animation: none";
    sky.style = "animation: none";
    earth.style = "animation: none";
    cactuses.style = "animation: none";
    [hour, minute, second] = [0, 0, 0];
    clearInterval(counter);
    stopwatch.firstElementChild.innerHTML = "00:00:00";
})
buttons.forEach(btn);
function btn(e){
    e.addEventListener("mousedown" , ()=>{
        e.style.boxShadow = "rgb(82, 81, 81) 1px 1px 6px 0px inset, rgba(70, 70, 70, 0.5) -1px -1px 6px 1px inset"
    })
    e.addEventListener("mouseup" , ()=>{
        e.style = "box-shadow: 0 0 5px black"
    })
}
function count() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }
    let h = (hour < 10) ? "0" + hour : hour;
    let m = (minute < 10) ? "0" + minute : minute;
    let s = (second < 10) ? "0" + second : second;

    stopwatch.firstElementChild.innerHTML = `${h}:${m}:${s}`;

}