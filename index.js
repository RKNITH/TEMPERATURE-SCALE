document.getElementById('year').textContent = new Date().getFullYear();

function convertTemperature() {
    let temp = parseFloat(document.getElementById('temperature').value);
    let scale = document.getElementById('scale').value;
    let result = '';

    if (isNaN(temp)) {
        result = 'Please enter a valid temperature.';
    } else {
        switch (scale) {
            case 'celsius':
                result = `Celsius: ${temp} °C<br>Fahrenheit: ${(temp * 9 / 5) + 32} °F<br>Kelvin: ${temp + 273.15} K`;
                break;
            case 'fahrenheit':
                result = `Celsius: ${(temp - 32) * 5 / 9} °C<br>Fahrenheit: ${temp} °F<br>Kelvin: ${((temp - 32) * 5 / 9) + 273.15} K`;
                break;
            case 'kelvin':
                result = `Celsius: ${temp - 273.15} °C<br>Fahrenheit: ${(temp - 273.15) * 9 / 5 + 32} °F<br>Kelvin: ${temp} K`;
                break;
        }
    }

    document.getElementById('result').innerHTML = result;
}
