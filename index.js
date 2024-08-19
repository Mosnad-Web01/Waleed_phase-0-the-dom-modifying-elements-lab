const main = document.querySelector("main");
if (main) {
  main.remove();
}

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.innerHTML = "Waleed is the champion";

document.body.appendChild(newHeader);
