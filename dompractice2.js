newBttn = document.createElement("button");
console.dir(newBttn);
newBttn.innerText = "Click Me";

newBttn.style.backgroundColor = "red";
newBttn.style.color = "white";

document.querySelector("body").prepend(newBttn);

let el = document.querySelector("p");
el.classList.add("content");
