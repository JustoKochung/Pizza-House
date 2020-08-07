var deliveryaddress;

function insert(myForm) {

  var a = prompt("Enter your delivery address", "Address Ex. City, Estate, Street, Phone Number");
  document.getElementById('address').value = a;
  deliveryaddress = a;
}

function total(myForm) {
  var total = 0.00;
  var topping = 50;
  var count = 0;
  if (document.getElementById('small').checked) {

    total += 800
  }
  if (document.getElementById('medium').checked) {

    total += 1000
  }
  if (document.getElementById('large').checked) {

    total += 1200
  }
  if (document.getElementById('topping1').checked) {
    count++;
  }
  if (document.getElementById('topping2').checked) {
    count++;
  }
  if (document.getElementById('topping3').checked) {
    count++;
  }
  if (document.getElementById('topping4').checked) {
    count++;
  }
  if (document.getElementById('topping5').checked) {
    count++;
  }
  total += count * topping;
  if (document.getElementById('delivery').checked) {
    total = total * 1.10;
  }
  var result = Math.round(total * 100) / 100;
  if (document.getElementById('delivery').checked) {
    alert('Total Cost is Kshs. ' + result + ' and your order will be delivered to ' + deliveryaddress);
  } else {
    alert('Your Total will be Kshs. ' + result + ' and will be ready in 10 minutes');
  }
}

function blank(myForm) {
  document.getElementById('picking').checked = true;
  document.getElementById('small').checked = true;
  document.getElementById('address').value = "";
  for (var a = 0; a < 13; a++) {
    var topname = "topping" + a;
    document.getElementById(topname).checked = false;
  }

}