var button = document.querySelector(".form-style button");
var items = {
  kemdua: "Coconut cream",
  kemdau: "Strawberry ice-cream",
  kemdu: "Durian ice-cream",
};

button.addEventListener("click", (e) => {
  e.preventDefault();

  let checkboxes = document.querySelectorAll('.menu-form input[name="item"]');
  let selectedItems = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedItems.push(checkbox.id);
    }
  });

  let itemsBlock = document.querySelector(".order-list-content");
  let price = CalTotal(selectedItems);

  let htmls = "";
  selectedItems.forEach((itemId) => {
    htmls += `
            <div class="order-item">
                <div class="product-name">
                    ${items[itemId]}
                </div>
            </div>
        `;
  });

  let totalSection = document.querySelector(".total");
  let totalPriceElement = totalSection.querySelector(".total-price");

  if (price > 0) {
    totalSection.style.display = "block";
    totalPriceElement.textContent = price.toFixed(2) + " $";
  } else {
    totalSection.style.display = "none";
  }

  itemsBlock.innerHTML = htmls;
});

function CalTotal(selectedItems) {
  let total = 0;
  selectedItems.forEach((itemId) => {
    let checkbox = document.getElementById(itemId);
    total += parseFloat(checkbox.value);
  });
  return total;
}
