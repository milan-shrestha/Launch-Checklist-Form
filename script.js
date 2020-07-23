// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {

   let form = document.querySelector("form");
   form.addEventListener("submit", function() {
      
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      let pilotName = validateNames(pilotNameInput, "pilot");

      let copilotName = validateNames(copilotNameInput, "co-pilot");
     
      let fuelLevel = validateNumbers(fuelLevelInput, "fuel level");
      
      let cargoMass = validateNumbers(cargoMassInput, "cargo mass");
   });

   function validateNames(nameInput, member) {
   
      if(nameInput.value === "") {
         alert(`Please enter the name for ${member}.`);
         event.preventDefault();
      } else if (!isNaN(nameInput.value)) {
         alert(`Enter a valid name for ${member}.`);
         event.preventDefault();
      } else {
         return nameInput.value;
      }
   };

   function validateNumbers(input, number) {
      if (input.value === "") {
         alert(`Please enter a number for ${number}.`);
         event.preventDefault();
      } else if (isNaN(input.value)) {
         alert(`Enter a valid number for ${number}.`);
         event.preventDefault();
      } else {
         return input.value;
      }
   }
});