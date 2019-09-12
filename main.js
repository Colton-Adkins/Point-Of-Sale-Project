function SetStyle() {
drinks.style.display = "none";   
ic.style.display = "none";   
chips.style.display = "none";   
candy.style.display = "none";   
}


function HideDrinks() {
  var drinks = document.getElementById("drinks");

  if (drinks.style.display === "none") {
    drinks.style.display = "inline-block";
  } else {
    drinks.style.display = "none";
  }
} 

function HideChips() {
  var drinks = document.getElementById("chips");

  if (chips.style.display === "none") {
    chips.style.display = "inline-block";
  } else {
    chips.style.display = "none";
  }
} 

function HideIC() {
  var drinks = document.getElementById("ic");

  if (ic.style.display === "none") {
    ic.style.display = "inline-block";
  } else {
    ic.style.display = "none";
  }
} 
function HideCandy() {
  var drinks = document.getElementById("candy");

  if (candy.style.display === "none") {
    candy.style.display = "inline-block";
  } else {
    candy.style.display = "none";
  }
} 
