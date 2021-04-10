const tl = gsap.timeline();

//screen preloader
const preloader = document.querySelector(".preloader");

setTimeout(() => {
   preloader.classList.toggle("disappear");
   tl.from("header", {opacity:0, x:50, duration:1, ease:Power2.easeInOut})
     .from("main", {opacity:0, y:50, duration:1, ease:Power2.easeInOut})
     .from("section", {opacity:0, y:50, duration:1, ease:Power2.easeInOut});
}, 9000);




//this line of code opens and collapses the mobile side menu
const menuBtn = document.querySelector(".menu-btn"),
      sideMenu = document.querySelector(".sideMenu"),
      menu = document.querySelectorAll(".menu");

menuBtn.addEventListener("click", () => {
   tl.from(menu, {opacity:0, x:50, duration:1, ease:Power2.easeInOut});
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


//This line of code refreshes the entire page
const refresh = document.querySelector('.refresh');

refresh.addEventListener('click', () => {
   window.location.reload(true);
});


//this line of code fetches the current Time and Date
const urlTimeAndDate = 'https://mazitekgh.com/covid19/v1/',
      timeT = document.querySelector(".time"),
      dateD = document.querySelector(".date");
   

     async function getAPI() {
      try {
          let response = await fetch(urlTimeAndDate),
                data = await response.json(),
                currentTime = data.global.time,
                currentDate = data.global.date;
            
                timeT.innerHTML = currentTime;
                dateD.innerHTML = currentDate;  
  
  
      }catch {
              timeT.innerHTML = "404 error. Network problem";
              dateD.innerHTML =  "404 error. Network problem";
      }
  }
  
  getAPI();



//This line of code fetches the API for every Covid19 case in the world
let url = 'https://covid19.mathdro.id/api',
      confirmedCases = document.querySelector(".confirmed-number"),
      recoveredCases = document.querySelector(".recovered-number"),
      deathCases = document.querySelector(".death-number"),
      confirmedText = document.querySelector(".confirmedText"),
      recoveredText = document.querySelector(".recoveredText"),
      deathText = document.querySelector(".deathText"),
      formatter = new Intl.NumberFormat('en');


async function getCovidAPI() {
    try {
        let response = await fetch(url),
              data = await response.json(),
              confirmedNumber = data.confirmed.value,
              recoveredNumber = data.recovered.value,
              deathNumber = data.deaths.value;  
          

              confirmedText.innerHTML = 'Confirmed Cases';
              recoveredText.innerHTML = 'Recovered Cases';
              deathText.innerHTML = 'Worldwide Deaths';

              confirmedCases.innerHTML = formatter.format(confirmedNumber);
              recoveredCases.innerHTML = formatter.format(recoveredNumber);
              deathCases.innerHTML = formatter.format(deathNumber);  


    }catch {
             confirmedCases.innerHTML =  "404 error";
             recoveredCases.innerHTML =  "404 error";
             deathCases.innerHTML =  "404 error";
             confirmedText.innerHTML = 'Network problem. Try again';
             recoveredText.innerHTML = 'Network problem. Try again';
             deathText.innerHTML = 'Network problem. Try again';
    }
}

getCovidAPI();


//this line of code gets the Covid API for every country
const btn = document.querySelector('.btn'),
      search = document.querySelector('.search');

btn.addEventListener("click", () => {
    async function fetchCountries (country) {
        try {
            let response = await fetch(`${url}/countries/${country}`),
                  data = await response.json(),
                  confirmedCountryNumber = data.confirmed.value,
                  recoveredCountryNumber = data.recovered.value,
                  deathCountryNumber = data.deaths.value; 
                  
                  confirmedText.innerHTML = `Confirmed Cases in ${country}`;
                  recoveredText.innerHTML = `Recovered Cases in ${country}`;
                  deathText.innerHTML = `Deaths in ${country}`;
                  
                 if (search.value === country) {
                     tl.from('.covid-data', {opacity:0, y:-50, stagger:.5, ease:Power2.easeInOut});
                     confirmedCases.innerHTML = formatter.format(confirmedCountryNumber);
                     recoveredCases.innerHTML = formatter.format(recoveredCountryNumber);
                     deathCases.innerHTML = formatter.format(deathCountryNumber);  
                 }
                                  
        }catch {
         tl.from('.covid-data', {opacity:0, y:-50, stagger:.5, ease:Power2.easeInOut});
         confirmedCases.innerHTML = '404 error';
         recoveredCases.innerHTML = '404 error';
         deathCases.innerHTML = '404 error';  
         confirmedText.innerHTML = `Country name invalid or Network problem. Try again`;
         recoveredText.innerHTML = `Country name invalid or Network problem. Try again`;
         deathText.innerHTML = `Country name invalid or Network problem. Try again`;
        }

        search.value = '';
   }

fetchCountries(search.value);

});


