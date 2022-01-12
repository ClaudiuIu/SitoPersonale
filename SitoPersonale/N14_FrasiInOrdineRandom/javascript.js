console.log("Loaded!");

let a1 = ["bello", "brutto"];
let a2 = ["franco", "pinco"];
let a3 = ["ruota", "palla"];
let a4 = ["telefono", "computer"];
let a5 = ["ciabatta", "scarpa"];

function showArray() {
  let text = "";
  let formInput = "";
  formInput = document.getElementById("field").value; 
  a1.push(formInput); 
  text = text + ", " + formInput; 
  document.getElementById("output-text").innerHTML = arrayContent; 
  return false;
}