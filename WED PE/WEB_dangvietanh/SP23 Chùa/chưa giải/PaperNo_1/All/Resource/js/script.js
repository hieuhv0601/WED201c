let tour = document.getElementById("tour");
let tourPriceElement = document.getElementById("tour-price");
let totalPeopleInput = document.getElementById("total-num-of-people");

// Set initial price based on the value of the first option
tourPriceElement.textContent = `${tour.value}$/Person`;

tour.addEventListener("change", function () {
  tourPriceElement.textContent = `${tour.value}$/Person`;
});

function calculateTourBudget() {
  let total = parseInt(totalPeopleInput.value) * parseInt(tour.value);
  let output = document.querySelector(".output");
  output.textContent = total;
}
