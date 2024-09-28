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

        if(hh == 0){
            hh = 12;
        }

        if(hh < 10){
            hh = `0${hh}`
        }






    //   shou hour and minutes
        textHour.innerHTML = `${hh}:`
        textMinutes.innerHTML = mm
// add zero on single numbers
        if(mm < 10){
            mm = '0' + mm;
        }
      
    textAmPm.innerHTML = ampm;

    // getting the months of the uyear and showing it
    
    
    let months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
//  showing the date monthy and year
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year
    }
// show am or pm

      setInterval(clockText,1000)//1s

     /*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})