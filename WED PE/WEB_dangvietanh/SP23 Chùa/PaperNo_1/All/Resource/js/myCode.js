let tour = document.getElementById("tour"),
    price = document.getElementById("price"),
    totalAmountContent = document.getElementById("total-amount"),
    numOfPeople = document.getElementById("number"),
    amount = document.getElementById("amount");
price.textContent = `${getPriceByTour(tour[tour.selectedIndex].value)}$/Person`;
tour.addEventListener("change", () => {
    price.textContent = `${getPriceByTour(tour[tour.selectedIndex].value)}$/Person`;
})
function getPriceByTour(id) {
    switch (id) {
        case "1":
            return 150;
            break;
        case "2":
            return 200;
            break;
        case "3":
            return 250;
            break;
    }
}
function CalTotal() {
    totalAmountContent.style.display = 'flex';
    amount.textContent = `${getPriceByTour(tour[tour.selectedIndex].value) * numOfPeople.value}$`;
}