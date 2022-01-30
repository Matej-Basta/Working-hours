const cart = {
  total: {
    amount: 91.6,
    currency: "CZK",
  },
  items: [
    {
      name: "Apples",
      amount: "2kg",
      price: 62.6,
    },
    {
      name: "Cinnamon",
      amount: 1,
      price: 29,
    },
  ],
};

const data = JSON.stringify(cart);

const newArray = JSON.parse(data);
console.log(newArray);

const button = document.querySelector(".remove-cheapest");

button.addEventListener("click", () => {
  let cheapest = Infinity;
  let indexN = null;

  newArray.items.forEach((element, index) => {
    if (element.price < cheapest) {
      cheapest = element.price;
      indexN = index;
    }
  });
  newArray.items.splice(indexN, 1);
  displayItems(newArray);
});

const displayItems = (item) => {
  document.querySelector(".items").textContent = "";
  item.items.forEach((element) => {
    const li = document.createElement("li");
    li.className = "items__item";
    li.textContent = `${element.name} ${element.amount}`;
    document.querySelector(".items").appendChild(li);
  });
};

displayItems(newArray);

const buttonAdd = document.querySelector(".add-item");

buttonAdd.addEventListener("click", () => {
  let name1 = document.querySelector(".item-name-input").value;
  let amount1 = document.querySelector(".item-amount-input").value;
  let price1 = document.querySelector(".item-price-input").value;

  if (name1 !== "" && amount1 !== "" && price1 !== "") {
    newArray.items.push({ name: name1, amount: amount1, price: price1 });
    displayItems(newArray);
    document.querySelector(".item-name-input").value = "";
    document.querySelector(".item-amount-input").value = "";
    document.querySelector(".item-price-input").value = "";
  }
});
