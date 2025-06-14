const temples = [
  {
    imageUrl:
    "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/403587/1.jpg?9586",
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
  },
  {
    imageUrl:
    "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/7702682/1.jpg?8472",
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
  },
  {
    imageUrl:
    "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/1041082/1.jpg?6717",
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
  },
  {
    imageUrl:
    "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/6709481/1.jpg?9488",
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
  },
  {
    imageUrl:
    "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/5931092/1.jpg?3742",
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
  },
  {
    imageUrl:
    "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/0840492/1.jpg?7734",
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
  },
  {
    imageUrl: 
    "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/31487/1.jpg?6236",
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
  },
  {
    imageUrl: 
    "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/1632482/1.jpg?3383",
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
  },
];

createTempleCard();

function createTempleCard() {
  temples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);

    document.querySelector(".tab").appendChild(card);
  });
  }