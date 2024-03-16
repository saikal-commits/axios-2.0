const blocks = document.querySelector(".blocks");
const region = document.querySelector(".region");
const sort = document.querySelector(".sort");
const input = document.querySelector(".search");
const btn = document.querySelector(".btn-search");

let data = null;
const readAll = (all) => {
  console.log(all);
  blocks.innerHTML = "";
  all.map((el) => {
    blocks.innerHTML += `
    <div class="card">
    <img class="img1" src ="${el.flags.png}" alt="${el.flags.alt}"/>
    <img class="img2" src ="${
      Object.keys(el.coatOfArms).length ? el.coatOfArms.png : "./img/logo.png"
    }" alt="img"/>
    <h2>${el.name.common}</h2>
    <h3>${el.capital}</h3>
    <h2>.....</h2>
    <h5>${el.altSpellings}</h5>
    <a target="_blank" href="${el.maps.googleMaps}">map</a>
    <ul class="tab">
    <li>Area - ${el.area} KM<sup>2</sup></li>
    <li>Region - ${el.region}</li>
    <li>Population - ${el.population}</li>  
    <li>Continents - ${el.continents}</li>  
    </ul>
    <button class=" button btn btn-danger">подробнее</button>
    </div>
    `;
  });
};

let getAll = (API) => {
  //https://restcountries.com/v3.1/name/{name}
  axios(`https://restcountries.com/v3.1/${API}`).then((res) => {
    readAll(res.data);
    data = res.data;
    console.log(res);
  });
};
getAll("all");

region.addEventListener("change", (e) => {
  let fil = e.target.value;
  if (fil === "Asia") {
    let res = data.filter((el) => el.region === "Asia");
    readAll(res);
  } else if (fil === "Africa") {
    let res = data.filter((el) => el.region === "Africa");
    readAll(res);
  } else if (fil === "Europe") {
    let res = data.filter((el) => el.region === "Europe");
    readAll(res);
  } else if (fil === "Americas") {
    let res = data.filter((el) => el.region === "Americas");
    readAll(res);
  }
});

sort.addEventListener("change", (e) => {
  let target = e.target.value;
  if (target === "area") {
    let res = data.sort((a, b) => b.area - a.area);
    readAll(res);
  } else if (target === "population") {
    let res = data.sort((a, b) => b.population - a.population);
    readAll(res);
  } else if (target === "A-Z") {
    let res = data.sort((a, b) => (a.name.common < b.name.common ? -1 : 1));
    readAll(res);
  } else if (target === "Z-A") {
    let res = data.sort((a, b) => (a.name.common > b.name.common ? -1 : 1));
    readAll(res);
  }
});

btn.addEventListener("click", () => {
  getAll(`name/${input.value}`);
});

input.addEventListener("input", (e) => {
  getAll(`name/${e.target.value}`);
});
