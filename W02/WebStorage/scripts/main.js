var tbProductID = document.getElementById("tbProductID");
var tbProductName = document.getElementById("tbProductName");
var tbProductQuantity = document.getElementById("tbProductQuantity");
var tbProductPrice = document.getElementById("tbProductPrice");
var pTotalProduct = document.getElementById("pTotalProduct");
var pTotalPrice = document.getElementById("pTotalPrice");
var tbReceipt = document.getElementById("tbReceipt");

if (typeof (Storage) != undefined) {
    sessionStorage.cart = "{}";
}

function onClickAddToCart() {
    if (typeof (Storage) != undefined) {
        let current = JSON.parse(sessionStorage.cart);
        current[tbProductID.value] = {
            id: tbProductID.value,
            name: tbProductName.value,
            quantity: parseInt(tbProductQuantity.value),
            price: parseFloat(tbProductPrice.value)
        };

        sessionStorage.cart = JSON.stringify(current);

        let totalPrice = 0;
        let keys = Object.keys(current);
        for (let i = 0; i < keys.length; i++) {
            totalPrice += current[keys[i]].quantity * current[keys[i]].price;
        }

        pTotalProduct.innerHTML = "Total product: " + keys.length;
        pTotalPrice.innerHTML = "Total price: " + totalPrice;

        let row = tbReceipt.insertRow(keys.length);
        var cellID = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellQuantity = row.insertCell(2);
        var cellUnitPrice = row.insertCell(3);

        cellID.innerHTML = tbProductID.value;
        cellName.innerHTML = tbProductName.value;
        cellQuantity.innerHTML = parseInt(tbProductQuantity.value);
        cellUnitPrice.innerHTML = parseFloat(tbProductPrice.value);

    }
}
