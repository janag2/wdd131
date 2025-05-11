var date = new Date();
var year = date.getFullYear();
document.getElementById('currentyear').innerHTML = year;


document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;