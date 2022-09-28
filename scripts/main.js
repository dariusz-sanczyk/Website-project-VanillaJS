"use strict";

//Selectors
const tabsContainer = document.querySelector(".tabs__container");
const tabs = document.querySelectorAll(".tabs__link");
const tabsContent = document.querySelectorAll(".tabs__content");
const marketingName = document.querySelector(".marketing__input");
const technicalName = document.querySelector(".technical__input");
const descriptionName = document.querySelector(".description__input");
const requiredInputs = document.querySelectorAll(".required__input");
const requiredTabs = document.querySelectorAll(".tabs__link--required");
const requiredTooltips = document.querySelectorAll(".tooltip__icon--button");
const selectInputs = document.querySelectorAll(".select__input");
const portalSelect = document.querySelector(".select__portal");
const typeSelect = document.querySelector(".select__type");
const dateInputs = document.querySelectorAll(".date__input");
const startDate = document.querySelector(".date__start");
const endDate = document.querySelector(".date__end");
const checkBoxes = document.querySelectorAll("input[type=checkbox]");
const radioInputs = document.querySelectorAll("input[type=radio]");
const conditionRadio = document.getElementById("buscond");
const basePriceRadio = document.getElementById("baseprice");
const connectCheckBox = document.getElementById("connprom");
const backCheckBox = document.getElementById("backprom");

//LocalStorage getters
const marketingNameStorage = localStorage.getItem("inputName0");
const technicalNameStorage = localStorage.getItem("inputName1");
const descriptionNameStorage = localStorage.getItem("description");
const portalValueStorage = localStorage.getItem("selectName0");
const typeValueStorage = localStorage.getItem("selectName1");
const startDateValueStorage = localStorage.getItem("dateValue0");
const endDateValueStorage = localStorage.getItem("dateValue1");
const connectCheckBoxStorageString = localStorage.getItem("checkBox0");
const backCheckBoxStorageString = localStorage.getItem("checkBox1");

// Converting string to boolean
const connectCheckBoxStorage = connectCheckBoxStorageString === "true";
const backCheckBoxStorage = backCheckBoxStorageString === "true";

//Init function getting localStorage values
(() => {
  marketingName.value = marketingNameStorage;
  technicalName.value = technicalNameStorage;
  descriptionName.value = descriptionNameStorage;
  if (portalValueStorage) portalSelect.value = portalValueStorage;
  if (typeValueStorage) typeSelect.value = typeValueStorage;
  startDate.value = startDateValueStorage;
  endDate.value = endDateValueStorage;
  connectCheckBox.checked = connectCheckBoxStorage;
  backCheckBox.checked = backCheckBoxStorage;

  if (marketingName.value || technicalName.value) enableTabs();
})();

// Tabs navigation and content display
tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".tabs__link");

  if (!clicked) return;

  tabs.forEach((tab) => tab.classList.remove("tabs__link--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("tabs__content--active")
  );

  clicked.classList.add("tabs__link--active");
  document
    .querySelector(`.tabs__content--${clicked.dataset.tab}`)
    .classList.add("tabs__content--active");
});

// Tabs enable/disable functions
function enableTabs() {
  requiredTabs.forEach((tab) => {
    tab.classList.remove("tabs__link--disabled");
    tab.disabled = false;
  });
  requiredTooltips.forEach((tooltip) => {
    tooltip.classList.add("tooltip__icon--button--hidden");
  });
}

function disableTabs() {
  requiredTabs.forEach((tab) => {
    tab.classList.add("tabs__link--disabled");
    tab.disabled = true;
  });
  requiredTooltips.forEach((tooltip) => {
    tooltip.classList.remove("tooltip__icon--button--hidden");
  });
}

// Enable/disable tabs
requiredInputs.forEach((inpt, i) => {
  inpt.addEventListener("keyup", (e) => {
    const inputText = e.target.value;
    //Add values to localStorage
    localStorage.setItem(`inputName${i}`, inputText);
    if (marketingName.value || technicalName.value) {
      enableTabs();
    } else {
      disableTabs();
    }
  });
});

// Adding values to localStorage
function addValueToLocalStorage(element, i, name) {
  const value = element.value;
  localStorage.setItem(`${name}${i}`, value);
}

descriptionName.addEventListener("input", () => {
  addValueToLocalStorage(descriptionName, "", "description");
});

selectInputs.forEach((inpt, i) => {
  inpt.addEventListener("click", () => {
    addValueToLocalStorage(inpt, i, "selectName");
  });
});

dateInputs.forEach((inpt, i) => {
  inpt.addEventListener("change", () => {
    addValueToLocalStorage(inpt, i, "dateValue");
  });
});

checkBoxes.forEach((inpt, i) => {
  inpt.addEventListener("change", () => {
    const value = inpt.checked;
    localStorage.setItem(`checkBox${i}`, value);
  });
});

radioInputs.forEach((inpt, i) => {
  inpt.addEventListener("change", () => {
    addValueToLocalStorage(inpt, i, "radioInput");
  });
});

console.log(radioInputs);
