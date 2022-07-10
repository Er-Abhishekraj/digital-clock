
const hourElem = document.getElementById('hour');
const minElem = document.getElementById('minutes');
const secElem = document.getElementById('seconds');
const ampmElem = document.getElementById('ampm');

function updateClock(){
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridian = "AM"

    // Converting hour into 12hr format and setting AM/PM
    if(hour > 12){
        hour = hour - 12;
        meridian = "PM";
    }

    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;


    // Setting the valur of hour, minutes, seconds in html
    hourElem.innerText = hour;
    minElem.innerText = minutes;
    secElem.innerText = seconds;
    ampmElem.innerText = meridian;

    setTimeout(()=>{
        updateClock();
    }, 1000)

}

updateClock()
