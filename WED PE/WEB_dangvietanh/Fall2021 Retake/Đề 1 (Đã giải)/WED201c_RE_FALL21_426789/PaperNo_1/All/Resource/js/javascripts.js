var parentBuy = document.getElementsByClassName(
  "accessories__list__item__info"
);
for (let i = 0; i < parentBuy.length; i++) {
  parentBuy[i]
    .getElementsByTagName("div")[0]
    .addEventListener("click", function () {
      var checkPhone = prompt("Enter Your Phone:");
      if (parseInt(checkPhone) == checkPhone) {
        alert("Minh Phuong will contact you via phone number: " + checkPhone);
      }
    });
}

