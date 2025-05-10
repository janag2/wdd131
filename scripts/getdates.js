var date = new Date();
var year = date.getFullYear();
document.getElementById('currentyear').innerHTML = year;

document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

const lastModified = document.querySelector("#lastModified");
const today = new Date();
lastModified.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat("en-US", {dateStyle: "short"}).format(today)}</span>`;