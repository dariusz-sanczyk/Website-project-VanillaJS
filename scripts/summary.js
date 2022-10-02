//Selectors
const namesList = document.querySelector(".names__list");

//LocalStorage getter
const specialOfferNameValue = localStorage.getItem("inputName0");
const namesArray = JSON.parse(localStorage.getItem("namesArr"));

//Display special offer names list
function displayNames() {
  namesList.innerHTML = "";
  namesArray.forEach(function (name) {
    const html = `<div class="grid__content"><p class="grid__cell promo__name">${name}</p>
  <input class="edit__name"/>
  <button class="delete__button">Delete</button>
  </div>`;

    namesList.insertAdjacentHTML("beforeend", html);
  });
}
displayNames();

// Event handlers

const namesListRow = document.querySelectorAll(".grid__content");

function setLocalStorage(arr) {
  localStorage.setItem("namesArr", JSON.stringify(arr));
}

namesListRow.forEach((row, i) => {
  const name = row.querySelector(".promo__name");
  const input = row.querySelector(".edit__name");
  const btn = row.querySelector(".delete__button");

  input.value = namesArray[i];

  input.addEventListener("input", (e) => {
    const inputValue = e.target.value;
    name.innerHTML = inputValue;
    namesArray[i] = inputValue;
    setLocalStorage(namesArray);
  });
  btn.addEventListener("click", () => {
    if (confirm("Are you sure?")) {
      namesArray.splice(i, 1);
      window.location.reload();
    }
    displayNames();
    setLocalStorage(namesArray);
  });
});
