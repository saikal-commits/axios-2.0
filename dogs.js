const buttons = document.querySelector(".buttons");

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then((res) => res.json())
  .then((data) => {
    let dogs = Object.keys(data.message);
    dogs.forEach((el) => {
      buttons.innerHTML += `
        <button class="btn-button">${el}</button>
      `;
    });
  });
