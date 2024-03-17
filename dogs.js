const btn = document.querySelector(".btn");

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then((res) => res.json())
  .then((data) => {
    let dogs = Object.keys(data.message);
    dogs.forEach((el) => {
      btn.innerHTML += `
        <button class="btn-button">${el}</button>
      `;
    });
  });
