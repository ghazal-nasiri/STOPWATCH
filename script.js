let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let msecond = document.querySelector(".msecond");
let menu = document.querySelector(".menu");
let colors = document.querySelector(".colors")
let menu2 = document.querySelector(".menu2");
let btn = document.querySelectorAll(".buttons button")
let lineMenu = document.querySelectorAll(".line");
let [h, m, s, ms] = [0, 0, 0, 0];
let counter;
let click = false;

////////////// menu
menu.addEventListener("click", () => {
    menu.classList.toggle("openmenu");
    colors.classList.toggle("h-200");
})

////////////// stopwatch
btn.forEach(clickBtn);
function clickBtn(e) {
    e.addEventListener("mousedown", () => {
        e.style = "box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.2) -3px -3px 6px 1px inset"
    })
    e.addEventListener("mouseup", () => {
        e.style = "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
    })

}

startBtn.addEventListener("click", () => {
    if (click == false) {
        counter = setInterval(count, 10);
        click = true;
    }
})
stopBtn.addEventListener("click", () => {
    clearInterval(counter);
    click = false;
})
resetBtn.addEventListener("click", () => {
    clearInterval(counter);
    [h, m, s, ms] = [0, 0, 0, 0];
    click = false;
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    msecond.innerHTML = "00";
})
function count() {
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
        if (s == 60) {
            s = 0;
            m++;
            if (m == 60) {
                m = 0;
                h++;
            }
        }
    }
    nh = (h < 10) ? "0" + h : h;
    nm = (m < 10) ? "0" + m : m;
    ns = (s < 10) ? "0" + s : s;
    nms = (ms < 10) ? "0" + ms : ms;
    hour.innerHTML = nh;
    minute.innerHTML = nm;
    second.innerHTML = ns;
    msecond.innerHTML = nms;
}
///////////////// colors
let green = document.querySelector(".gree");
let pink = document.querySelector(".pink");
let brown = document.querySelector(".brown");
let purple = document.querySelector(".purple");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");



green.addEventListener("click", () => {
    document.body.className = "green";
})
pink.addEventListener("click", () => {
    document.body.className = "pink";
})
brown.addEventListener("click", () => {
    document.body.className = "brown";
})
purple.addEventListener("click", () => {
    document.body.className = "purple";
})
blue.addEventListener("click", () => {
    document.body.className = "blue";
})
red.addEventListener("click", () => {
    document.body.className = "red";
})


