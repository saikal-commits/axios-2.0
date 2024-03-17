const breeds = document.querySelector(".buttons");
const dog = document.querySelector(".select-btn");
const img = document.querySelectorAll(".breeds-img");

function getAll() {
  axios(`https://dog.ceo/api/breeds/list/all`)
    .then((res) => {
      console.log(Object.keys(res.data.message));
      Object.keys(res.data.message).forEach((el) => {
        breeds.innerHTML += `
        <button class="btn-button">${el}</button> `;
        dog.innerHTML += `
       <option value="${el}">${el}</option>`;
      });
    })
    .then(() => btn());
}
getAll();

function getImg(name) {
  axios(`https://dog.ceo/api/breed/${name}/images/random`).then((res) => {
    console.log(res.data, "akita");
    img.forEach((element) => {
      element.innerHTML = `
          <img src="${res.data.message}" alt="">
        `;
    });
  });
}

function btn() {
  const buttons = document.querySelectorAll(".btn-button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      getImg(btn.innerHTML);
    });
  });
}

dog.addEventListener("change", (e) => {
  console.log(e.target.value);
  getImg(e.target.value);
});
