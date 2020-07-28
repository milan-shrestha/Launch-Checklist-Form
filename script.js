
window.addEventListener("load", function() {

   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      let pilotName = validateNames(pilotNameInput, "pilot");
      let copilotName = validateNames(copilotNameInput, "co-pilot");
      let fuelLevel = validateNumbers(fuelLevelInput, "fuel level");
      let cargoMass = validateNumbers(cargoMassInput, "cargo mass");

      if (pilotName === false || copilotName === false || fuelLevel === false || cargoMass === false) {

         event.preventDefault();

      } else {

         displayLaunchStatus(pilotName, copilotName, fuelLevel, cargoMass);
      }
   });


   function validateNames(nameInput, member) {
   
      if (nameInput.value === "") {

         alert(`Please enter the name for ${member}.`);
         return false;

      } else if (!isNaN(nameInput.value)) {

         alert(`Enter a valid name for ${member}.`);
         return false;

      } else {

         return nameInput.value;
      }
   };


   function validateNumbers(input, number) {

      if (input.value === "") {

         alert(`Please enter a number for ${number}.`);
         return false;

      } else if (isNaN(input.value)) {

         alert(`Enter a valid number for ${number}.`);
         return false;

      } else {

         return input.value;
      }
   };


   function displayLaunchStatus(pilotName, copilotName, fuelLevel, cargoMass) {

      if (fuelLevel > 10000 && cargoMass < 10000) {

         displaySuccessStatus();
      } else {

         displayFaultyStatus(pilotName, copilotName, fuelLevel, cargoMass);
      }
   };


   function displaySuccessStatus() {

      let launchStatus = document.getElementById("launchStatus");
     
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "green";

      displayMissionInformation();
   };


   function displayFaultyStatus(pilotName, copilotName, fuelLevel, cargoMass) {

      let faultyStatus = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");

      faultyStatus.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";

      pilotStatus.innerHTML = `${pilotName} is ready for the launch.`;
      copilotStatus.innerHTML = `${copilotName} is ready for the launch.`;

      if (fuelLevel < 10000) {

         let fuelStatus = document.getElementById("fuelStatus");
         fuelStatus.innerHTML = "Not enough fuel for the journey.";
      }

      if (cargoMass > 10000) {

         let cargoStatus = document.getElementById("cargoStatus");
         cargoStatus.innerHTML= "Too much cargo mass for the shuttle to take off.";
      }
   }


   function displayMissionInformation() {

      let missionTarget = document.getElementById("missionTarget");

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {

            let index = Math.floor(Math.random() * json.length);
            missionTarget.innerHTML = `
                                       <h2>Mission Destination</h2>
                                       <ol>
                                          <li>Name: ${json[index].name}</li>
                                          <li>Diameter: ${json[index].diameter}</li>
                                          <li>Star: ${json[index].star}</li>
                                          <li>Distance from Earth: ${json[index].distance}</li>
                                          <li>Number of Moons: ${json[index].moons}</li>
                                       </ol>
                                       <img src="${json[index].image}">
            `;
         });
      });
   }
});