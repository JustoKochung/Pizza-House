var deliveryaddress;

function insert(myForm) {
  var address = prompt("Enter delivery address", "Enter Delivery Location")
  document.getElementById('address').value = address;
  deliveryaddress = address;
}