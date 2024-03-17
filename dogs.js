const buttons = document.querySelector(".buttons");
const selBbtn = document.querySelector(".select-btn");

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then((res) => res.json())
  .then((data) => {
    let dogs = Object.keys(data.message);
    dogs.forEach((el) => {
      buttons.innerHTML += `
        <button class="btn-button">${el}</button> `;
      selBbtn.innerHTML += `
    <option value="dogs">${el}</option>
    `;
    });
  });

  