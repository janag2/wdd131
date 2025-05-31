var date = new Date();
var year = date.getFullYear();
document.getElementById('currentyear').innerHTML = year;

document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

function computeWindChillC(tempC, speed) {
    return 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * tempC * Math.pow(speed, 0.16));
}

let tempC = 30;
let speed = 17;
if (tempC <= 10 && speed > 4.8) {
  document.getElementById("wc").innerHTML = `${computeWindChillC(tempC, speed).toFixed(1)} °C`;
} else {
    document.getElementById("wc").innerHTML = "N/A";
}