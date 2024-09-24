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




const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')


      const  clockText = () => {
        let date = new Date(),
        hh = date.getHours(),
        mm = date.getMinutes(),
        // ss = date.getSeconds(),
        // ampm = hh >= 12? 'PM' : 'AM',
        ampm,
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()
        // day = date.toLocaleString('default', {weekday: 'long'}),
        // month = date.toLocaleString('default', {month: 'long'}),
        // year = date.getFullYear()

        if(hh >= 12){
            hh = hh - 12;
            ampm = 'PM'
        }else {
            ampm = 'AM'
        }

        if






      
        textHour.innerHTML = `${hh}`
      }

      setInterval(clockText,1000)//1s

     