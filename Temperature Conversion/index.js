let tempSlider = document.getElementById("temp-slider");
let tempDisplay = document.getElementById("temp-display");
let FahrTemp = document.getElementById("fahrenheit-temp");
let kelvinTemp = document.getElementById("kelvin-temp");

tempSlider.addEventListener("input", function(){
    let currentTemp = this.value;
    let fahrenheitTemp = (currentTemp * 1.8) + 32;

    tempDisplay.innerHTML = currentTemp + " °C";
    FahrTemp.innerHTML = fahrenheitTemp.toFixed(2) + " ℉";
});
