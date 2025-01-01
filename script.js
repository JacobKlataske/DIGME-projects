function submitForm() {
    var size = document.getElementById('size').value;
    var color = document.getElementById('color').value;
    var quantity = document.getElementById('quantity').value;

    var message = `Order placed!\n Product Information:\nWatch Size: ${size}\nWatch Color: ${color}\nWatch Quantity: ${quantity}`;

    alert(message);
}