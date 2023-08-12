//Example of the event onclick and onchange
let button = document.querySelector(".menu-form button");
// let checkboxes = document.querySelectorAll('input[name="item"]');

let items = {
  kemdua: "Coconut cream",
  kemdau: "Strawberry ice-cream",
  kemdu: "Durian ice-cream",
  kembo: "Buttermilk ice-cream",
  kemxoai: "Mango ice-cream",
  "tra-sua": "Milk tea",
  "tra-sua-matcha": "Matcha tea",
  "tra-sua-coffee": "Coffee tea",
  "tra-sua-caramel": "Caramel tea",
};
// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener("change", updateOrderList());
// });

button.addEventListener("click", (e) => {
  e.preventDefault();
  let item = document.querySelectorAll('input[name="item"]:checked');
  let orderList = document.querySelector(".order-list-content");
  let orderPattern = "";
  item.forEach((orderItem) => {
    orderPattern += `
    <div class="order-item">
    <div class="product-name">
    ${items[orderItem.id]}
    </div>
    </div>
     `;
  });
  orderList.innerHTML = orderPattern;
  let total = CalculateTotal(item);
  let resultDisplay = document.querySelector(".total");
  let result = document.querySelector(".total-price");
  result.innerHTML = `${total}$`;
  resultDisplay.style.display = "block";
});

function CalculateTotal(item) {
  let total = 0;
  item.forEach((item) => {
    total += parseFloat(item.value);
  });
  return total;
}
function updateOrderList() {
  // Implement your code to update the order list here
  let item = document.querySelectorAll('input[name="item"]:checked');
  let orderList = document.querySelector(".order-list-content");
  let orderPattern = "";
  item.forEach((orderItem) => {
    orderPattern += `
    <div class="order-item">
    <div class="product-name">
    ${items[orderItem.id]}
    </div>
    </div>
     `;
  });
  orderList.innerHTML = orderPattern;
}
