const hour = document.getElementById('clock-hour'),
minutes = document.getElementById('clock-minutes'),
seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date(),
    hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6
 //rotation

 hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
 minutes.style.transform = `rotateZ(${mm}deg)`
 seconds.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock, 1000);