function fahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        const celsius = (5 / 9) * (fahrenheit - 32);
        document.getElementById("celsius").value = celsius.toFixed(2);
    } else {
        document.getElementById("celsius").value = '';
    }
}

function celsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else {
        document.getElementById("fahrenheit").value = '';
    }
}