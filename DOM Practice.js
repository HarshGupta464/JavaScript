// alert("Welcome all!");
// console.log(window.document);
// console.dir(window.document.body.childNodes[1]);
// console.dir(document.body);

// let abc = document.querySelector("div");
// console.dir(abc);

// console.dir(abc.innerText);

// let el = document.querySelector("h2");
// el.innerText = el.innerText + " from Harsh Gupta!";
// console.dir(el.innerText);

// let el2 = document.querySelectorAll(".box");
// el2[0].innerText="New Value 1";
// el2[1].innerText="New Value 2";
// el2[2].innerText="New Value 3";

let xyz = document.querySelector("div");
console.log(xyz);

let id = xyz.getAttribute("id");
console.log(id);

let name= xyz.getAttribute("name");
console.log(name);


let pName = document.querySelector("p");
console.log(pName.getAttribute("class"));


xyz.style.backgroundColor = "green";
xyz.style.fontSize="29px";
xyz.innerText="New Val";