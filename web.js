setInterval(updateTime, 1000);

function updateTime(){
    let dt = new Date();
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    let divH = document.getElementById("hour");
    divH.innerText = hr;

    let divM = document.getElementById("min");
    divM.innerText = min;

    let divS = document.getElementById("sec");
    divS.innerText = sec;
}


