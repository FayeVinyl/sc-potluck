// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assignment button
const assignButton = document.querySelector(".assign");
// assigned items - guests name and their assigned dish
const assignedItems = document.querySelector(".assigned-items")



// Event listener, add element with guest name
addGuestButton.addEventListener("click", function() {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }

});

// Refactor
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
}

// Clear input box
const clearInput = function () {
  guestInput.value = "";
};

// Update and limit guest count to 8
const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li"); //selects all list elements
  guestCount.innerText = guests.length;

//hide guest input box and button
if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  let potluckItems = [
    "spinach dip",
    "deviled eggs",
    "sushi",
    "fruit and veggie plate",
    "macaroni salad",
    "ceviche",
    "taco salad",
    "sliders",
    "chicken adobo",
    "doro wat and injera",
    "chocolate chip cookies",
    "cassava cake"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true; //prevent reassignment of dishes
})