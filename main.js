const menuBtn = document.querySelector(".menu-btn"),
      sideMenu = document.querySelector(".sideMenu");

//this line of code opens and closes the mobile side menu
menuBtn.addEventListener("click", () => {
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
