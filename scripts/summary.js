//Selectors
const specialOfferName = document.querySelector(".promo__name");
const editName = document.querySelector(".edit__name");
const deleteNameBtn = document.querySelector(".delete__button");

//LocalStorage getter
const specialOfferNameValue = localStorage.getItem("inputName0");

//Init function to get value from form
(() => {
  specialOfferName.innerHTML = specialOfferNameValue;
  editName.value = specialOfferNameValue;
})();

//Event handlers
editName.addEventListener("input", (e) => {
  const inputValue = e.target.value;
  specialOfferName.innerHTML = inputValue;
});

deleteNameBtn.addEventListener("click", () => {
  if (confirm("Are you sure?")) {
    specialOfferName.innerHTML = "";
    editName.value = "";
  }
});
