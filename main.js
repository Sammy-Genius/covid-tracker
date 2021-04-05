gsap.registerPlugin(ScrollTrigger);

//screen preloader
const preloader = document.querySelector(".preloader");

setTimeout(() => {
   preloader.classList.toggle("disappear");
   gsap.from("header", {opacity:0, x:50, duration:1, ease:Power2.easeInOut});
}, 3000);



//this line of code opens and collapses the mobile side menu
const menuBtn = document.querySelector(".menu-btn"),
      sideMenu = document.querySelector(".sideMenu"),
      menu = document.querySelectorAll(".menu");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle('toggle');
});

//this collapses the side menu when a menu item is clicked
const sideMenuAbout = document.querySelector(".sideMenuAbout"),
      sideMenuUpdates = document.querySelector(".sideMenuUpdates"),
      sideMenuContagion = document.querySelector(".sideMenuContagion"),
      sideMenuSymptoms= document.querySelector(".sideMenuSymptoms"),
      sideMenuPrevention = document.querySelector(".sideMenuPrevention");

sideMenuAbout.addEventListener("click", () => {
   sideMenu.classList.toggle('toggle');
});
sideMenuUpdates.addEventListener("click", () => {
   sideMenu.classList.toggle('toggle');
});
sideMenuContagion.addEventListener("click", () => {
   sideMenu.classList.toggle('toggle');
});
sideMenuSymptoms.addEventListener("click", () => {
   sideMenu.classList.toggle('toggle');
});
sideMenuPrevention.addEventListener("click", () => {
   sideMenu.classList.toggle('toggle');
});


//this line of code fetches the COVID-19 API
const url = 'https://mazitekgh.com/covid19/v1/',
      timeT = document.querySelector(".time"),
      dateD = document.querySelector(".date"),
      existingCases = document.querySelector(".existing-number"),
      confirmedCases = document.querySelector(".confirmed-number"),
      recoveredCases = document.querySelector(".recovered-number"),
      deathCases = document.querySelector(".death-number"),
      formatter = new Intl.NumberFormat('en');

async function getAPI() {
    try {
        const response = await fetch(url),
              data = await response.json(),
              currentTime = data.global.time,
              currentDate = data.global.date,
              existingNumber = data.global.existing,
              confirmedNumber = data.global.confirmed,
              recoveredNumber = data.global.recovered,
              deathNumber = data.global.deaths;  
          
              timeT.innerHTML = currentTime;
              dateD.innerHTML = currentDate;
              existingCases.innerHTML = formatter.format(existingNumber);
              confirmedCases.innerHTML = formatter.format(confirmedNumber);
              recoveredCases.innerHTML = formatter.format(recoveredNumber);
              deathCases.innerHTML = formatter.format(deathNumber);    

    }catch {
             timeT.innerHTML = "404 error";
             dateD.innerHTML =  "404 error";
             existingCases.innerHTML = "404 error";
             confirmedCases.innerHTML =  "404 error";
             recoveredCases.innerHTML =  "404 error";
             deathCases.innerHTML =  "404 error";
    }
}

getAPI();
