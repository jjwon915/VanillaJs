const timerContainer = document.querySelector(".js-timer"),
    timerTitle = timerContainer.querySelector("h2");

function getTime() {
    const date = new Date();
    const xmasDay = new Date("2021-12-24:00:00:00+0900");

    const difference = xmasDay.getTime() - date.getTime();
    const daysDifference = Math.ceil(difference/(1000 * 60 * 60 * 24));
    console.log(daysDifference);

    const hours = Math.ceil((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.ceil((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.ceil((difference % (1000 * 60)) / 1000);

    timerTitle.innerText = `${daysDifference}d ${
        hours < 10 ? `0${hours}`: `${hours}`}h ${
            minutes < 10 ? `0${minutes}` : `${minutes}`}m ${
                seconds < 10 ? `0${seconds}` : `${seconds}`}s`;
    //clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init(){
    setInterval(getTime, 1000);
}

init()