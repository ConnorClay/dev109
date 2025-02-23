function calculateTotal() {
    const pricePerItem = 15.99;
    let total = 0;

    const chiaPuddingQty = parseInt(document.getElementById("chiaPuddingQty").value);
    const avocadoToastQty = parseInt(document.getElementById("avocadoToastQty").value);
    const fruitSmoothieQty = parseInt(document.getElementById("fruitSmoothieQty").value);
    const eggsAndBaconQty = parseInt(document.getElementById("eggsAndBaconQty").value);
    const wafflesQty = parseInt(document.getElementById("wafflesQty").value);
    const alkiiBowlQty = parseInt(document.getElementById("alkiiBowlQty").value);
    const breakfastPuddingQty = parseInt(document.getElementById("breakfastPuddingQty").value);

    total += chiaPuddingQty * pricePerItem;
    total += avocadoToastQty * pricePerItem;
    total += fruitSmoothieQty * pricePerItem;
    total += eggsAndBaconQty * pricePerItem;
    total += wafflesQty * pricePerItem;
    total += alkiiBowlQty * pricePerItem;
    total += breakfastPuddingQty * pricePerItem;

    document.getElementById("totalPrice").textContent = total.toFixed(2);
}
