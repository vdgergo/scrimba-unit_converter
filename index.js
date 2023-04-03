/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn =document.getElementById("convert-btn")

const lengthResultEl = document.getElementById("lengthResult-el")
const volumeResultEl = document.getElementById("volumeResult-el")
const massResultEl = document.getElementById("massResult-el")

let inputUnit = 0

// 1. Create eventListener to store input value

convertBtn.addEventListener("click",function(){
    inputUnit = inputEl.value
    lengthResultEl.textContent = `${inputUnit} meters = ${lengthConverter(inputUnit)} feet | ${inputUnit} feet = ${lengthConverter(inputUnit,type="feetToMeter")} meters`
    volumeResultEl.textContent = `${inputUnit} liters = ${volumeConverter(inputUnit)} gallons | ${inputUnit} gallons = ${volumeConverter(inputUnit,type="gallonToLiter")} liters`
    massResultEl.textContent = `${inputUnit} kilos = ${massConverter(inputUnit)} pounds | ${inputUnit} pounds = ${massConverter(inputUnit,type="poundToKilo")} kilos`
  })
// 2. Functions to make unit conversions

function lengthConverter(value,type='meterToFeet'){
  let result = null
  if (type === "meterToFeet"){
      result =  (value * 3.281).toFixed(3)
  }
  else if (type === "feetToMeter"){
      result =  (value / 3.281).toFixed(3)
  }
  return result
}

function volumeConverter(value,type='literToGallon'){
  let result = null
  if (type === "literToGallon"){
      result =  (value * 0.264).toFixed(3)
  }
  else if (type === "gallonToLiter"){
      result =  (value / 0.264).toFixed(3)
  }
  return result
}

function massConverter(value,type='kiloToPound'){
  let result = null
  if (type === "kiloToPound"){
      result =  (value * 2.204).toFixed(3)
  }
  else if (type === "poundToKilo"){
      result =  (value / 2.204).toFixed(3)
  }
  return result
}