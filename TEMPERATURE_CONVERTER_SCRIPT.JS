document.getElementById("convertBtn").addEventListener("click", function() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var unit = document.getElementById("unit").value;
  var result = document.getElementById("result");

  if (isNaN(temperature)) {
    result.textContent = "Please enter a valid temperature.";
    return;
  }

  if (unit === "celsius") {
    result.textContent = temperature + " °C is " + celsiusToFahrenheit(temperature) + " °F";
  } else if (unit === "fahrenheit") {
    result.textContent = temperature + " °F is " + fahrenheitToCelsius(temperature) + " °C";
  } else if (unit === "kelvin") {
    result.textContent = temperature + " K is " + kelvinToCelsius(temperature) + " °C";
  }
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}
