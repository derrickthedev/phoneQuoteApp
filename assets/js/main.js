// http://javascript-coder.com/javascript-form/javascript-calculator-script.phtml

const theForm = document.forms["sprintQuote"];

// Plan Prices
let planPrices = new Array();
planPrices["unlimitedPlus"] = 75;
planPrices["unlimitedBasic"] = 65;
planPrices["unlimitedBYOD"] = 65;
planPrices["unlimitedMilitary"] = 65;

// Phone Prices
let phonePrices = new Array();
// Iphones
phonePrices["none"] = 0;
phonePrices["iphoneX"] = 41.67;
phonePrices["iphone8Plus"] = 33.34;
phonePrices["iphone8"] = 29.17;
phonePrices["iphone7Plus"] = 27.92;
phonePrices["iphone7"] = 22.92;
phonePrices["iphoneSE"] = 14.58;
// Samsung Phones
phonePrices["note8"] = 40;
phonePrices["s9Plus"] = 38;
phonePrices["s9"] = 33;
phonePrices["s8"] = 28;
phonePrices["gJ7"] = 12;
phonePrices["gJ3"] = 8;
// LG Phones
phonePrices["lgV30Plus"] = 38;
phonePrices["lgG7"] = 33;
phonePrices["lgStylo4"] = 11;
phonePrices["lgStylo3"] = 10;
phonePrices["lgTribute"] = 4;
// Other Phones
phonePrices["duraXTP"] = 11;
phonePrices["goFlip"] = 4;

// TEP Prices
let tepPrices = new Array();
tepPrices["none"] = 0;
tepPrices["tepMax"] = 17;
tepPrices["tepPlus"] = 13;
tepPrices["tepBasic"] = 9;

// Get Plan Price
function getPlanPrice() {
  let planPrice = 0;
  const theForm = document.forms["sprintQuote"];
  let selectedPlan = theForm.elements["selectedPlan"];
  for (let i = 0; i < selectedPlan.length; i++) {
    if (selectedPlan[i].checked) {
      planPrice = planPrices[selectedPlan[i].value];
      break;
    }
  }
  return planPrice;
}

// Get Autopay Discount
function getAutopayDiscount() {
  let autopayDiscount = 0;
  const theForm = document.forms["sprintQuote"];
  let autopay = theForm.elements["autopay"];
  if (autopay.checked === true) {
    autopayDiscount = -5;
  }
  return autopayDiscount;
}

// Get TEP Price
function getTepPrice() {
  let tepPrice = 0;
  const theForm = document.forms["sprintQuote"];
  let selectedTEP = theForm.elements["selectedTEP"];
  for (let i = 0; i < selectedTEP.length; i++) {
    if (selectedTEP[i].checked) {
      tepPrice = tepPrices[selectedTEP[i].value];
      break;
    }
  }
  return tepPrice;
}

// Get Phone Price
function getPhonePrice() {
  let phonePrice = 0;
  const theForm = document.forms["sprintQuote"];
  let selectedPhone = theForm.elements["phone"];
  phonePrice = phonePrices[selectedPhone.value];
  return phonePrice;
}

// Calculate Total
function calculateTotal() {
  let totalPrice =
    getPlanPrice() + getPhonePrice() + getAutopayDiscount() + getTepPrice();

  document.getElementById("totalPrice").innerHTML =
    "Total: $" + totalPrice + " Plus Tax";
}
