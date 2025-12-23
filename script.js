let total = 14000;

function updatePrice(value) {
  total += value;
  document.getElementById("price").innerText = total;
}

function reset() {
  total = 14000;
}

function setColor(v) {
  reset();
  document.getElementById("carImage").src = "img/" + v + ".png";
}

function setWheels(v) {
  if (v === "amg") updatePrice(2500);
  if (v === "offroad") updatePrice(3000);
}

function setLights(v) {
  if (v === "led") updatePrice(1800);
}

function setLift(v) {
  if (v === "lift") updatePrice(3500);
}
