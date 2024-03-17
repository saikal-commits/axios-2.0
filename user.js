// const user = document.querySelector(".user");
// const input = document.querySelector(".search");
// const btn = document.querySelector(".btn-search");

// let getUser = () => {
//   //https://restcountries.com/v3.1/name/{name}
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       readUser(data);
//     });
// };

// let readUser = () => {
//   data.map((el) => {
//     user.innerHTML += `
//           <div class="userBlock">
//         <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png" alt="">
//           <h2>${el.name}</h2>
//           <h4>${el.username}</h3>
//           <h3>Address - ${el.address.street}</h3>
//           <h4>${el.address.suite}</h4>
//           <h3>City - ${el.address.city}</h3>
//           <button>Button</button>
//         </div>
//           `;
//   });
// };
// getUser();

// btn.addEventListener("click", () => {
//   getUser(`name/${input.value}`);
// });

// input.addEventListener("input", (e) => {
//   getUser(`name/${e.target.value}`);
// });

const user = document.querySelector(".user");
const input = document.querySelector(".search");
const btn = document.querySelector(".btn-search");

let getUser = (url) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${url}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderUser(data);
    });
};

let renderUser = (data) => {
  user.innerHTML = "";
  data.forEach((el) => {
    user.innerHTML += `
          <div class="userBlock">
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png" alt="">
            <h2>${el.name}</h2>
            <h4>${el.username}</h4>
            <h3>Address - ${el.address.street}</h3>
            <h4>${el.address.suite}</h4>
            <h3>City - ${el.address.city}</h3>
            <button>Button</button>
          </div>
          `;
  });
};

getUser("");

btn.addEventListener("click", () => {
  getUser(`name/${input.value}`);
});

input.addEventListener("input", (e) => {
  getUser(`name/${e.target.value}`);
});
