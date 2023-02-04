let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuf`fin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
const addSpace = (numberOfSpaces) => {
  return " ".repeat(numberOfSpaces);
};

console.log(`QTY${addSpace(7)}ITEM${addSpace(20)}TOTAL`);

order.forEach((x) => {
  let { itemName, quantity, unitPrice } = x;

  console.log(
    `${quantity}${addSpace(8)} ${itemName}${addSpace(
      24 - itemName.length
    )}${unitPrice.toFixed(2)}`
  );
});

console.log("-".repeat(40));
let total = 0;
order.forEach((x) => (total += x.unitPrice * x.quantity));
console.log(addSpace(27) + "Total: " + total);
//`
