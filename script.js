"use strict"

var addRowButton = document.getElementById("prideti");
var nameInput = document.getElementById("name");
var surnameInput = document.getElementById("surname");
var ageInput = document.getElementById("age");
var table = document.querySelector(".table1");
var deleteFirst = document.getElementById("pirmas");



addRowButton.addEventListener("click", function(){
  var name = nameInput.value;
  var surname = surnameInput.value;
  var age = ageInput.value;
    

    
    if(name === "" || surname === "" || age === ""){
        alert("Užpildykite visą informaciją")
    } 
    if (age <= 0){
        alert("Neteisingai nurodytas amžius")
    } else {
         // Create a new row with input values
  var prideti = document.createElement('tr');
  prideti.innerHTML = `
    <td class="violet">${name}</td>
    <td class="violet">${surname}</td>
    <td class="violet">${age}</td>
  `;

  // Add the new row to the table
  table.append(prideti);

  // Reset input fields
  nameInput.value = "";
  surnameInput.value = "";
  ageInput.value = "";
 } 
});
 
// deleteFirst.addEventListener("click", function() {
//     var table = document.getElementsByTagName("table1");
//     if (table.rows.length > 1) { 
//       table.deleteRow(1); 
//     }
//   });



 