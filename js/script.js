const css = document.querySelector("h3");
const body = document.getElementById("gradient");
const button = document.querySelector("button");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

// Sets initial background colors.
color1.value = "#8c00ff";
color2.value = "#319ffa";

// Converts hex into RGB - taken from CSS-Tricks
function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgb(" + +r + ", " + +g + ", " + +b + ")";
}

// Converts RGB into hex - taken from CSS-Tricks
function RGBToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

// Turns HTML input value into RGB to display on screen
let color1RGB = hexToRGB(color1.value);
let color2RGB = hexToRGB(color2.value);

// Sets background color and updates H3 with RGB value
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

// Fills h3 with default background color on load
window.addEventListener('load', (event) => {
  css.textContent = "linear-gradient(to right, " + color1RGB + ", " + color2RGB + ");";
});

// Listens for input change and changes the gradient accordinglyd
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Creates a random single RGB value between 0 and 255
function randomBackgroundGenerator() {
  function randomNumberGenerator() {
    const max = 255;
    const min = 0;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  // Creates 3 RGB values in string - for use in linear-gradient
  function createRandomRGB() {
    let randomRGB = randomNumberGenerator() + ", " + randomNumberGenerator() + ", " + randomNumberGenerator();
    return randomRGB;
  }

  // Assigns newly created 3 RGB values to values for use below in changing background color
  let randomRGB1 = createRandomRGB();
  let randomRGB2 = createRandomRGB();

  body.style.background = "linear-gradient(to right, " + "rgb(" + randomRGB1 + ")" + ", " + "rgb(" + randomRGB2 + "))";
  css.textContent = body.style.background + ";";

  color1.value = RGBToHex(randomRGB1);
  color2.value = RGBToHex(randomRGB2);
}

button.addEventListener("click", randomBackgroundGenerator);


