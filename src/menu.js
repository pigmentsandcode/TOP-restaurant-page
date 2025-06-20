const menuArr = [
  { name: "Sno Cone - Small", price: 4.99 },
  { name: "Sno Cone - Medium", price: 6.99 },
  { name: "Sno Cone - Large", price: 8.99 },
  { name: "Soda Float", price: 6.99 },
  { name: "Cream Sno Cone", price: 9.99 },
  { name: "Today's Special", price: 9.99 },
];

export function populateMenu() {
  const menuDivEl = document.createElement("div");
  menuDivEl.id = "menu-content";

  const titleEl = document.createElement("h1");
  titleEl.textContent = "Menu";
  menuDivEl.appendChild(titleEl);

  const menuListEl = document.createElement("ul");
  menuListEl.classList.add("menu-list");

  menuArr.forEach((item) => {
    const menuItemEl = document.createElement("li");
    menuItemEl.classList.add("menu-item");
    const itemName = document.createElement("p");
    itemName.textContent = item.name;
    itemName.classList.add("item-name");
    const itemPrice = document.createElement("p");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = item.price;
    menuItemEl.appendChild(itemName);
    menuItemEl.appendChild(itemPrice);
    menuListEl.appendChild(menuItemEl);
  });

  menuDivEl.appendChild(menuListEl);

  return menuDivEl;
}
