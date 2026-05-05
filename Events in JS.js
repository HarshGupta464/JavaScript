let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log("Button was clicked!");
//     let a = 678;
//     a++;
//     console.log(a);
//     console.log(evt);
//     console.log(evt.type);
// }

btn1.addEventListener("click" , () => {
    console.log("Button was clicked 1");
})

btn1.addEventListener("click" , () => {
    console.log("Button was clicked 2");
})

const handler = () => {
    console.log("Button was clicked 3");

}

btn1.addEventListener("click" , handler);

btn1.addEventListener("click" , () => {
    console.log("Button was clicked 4");
})

btn1.removeEventListener("click", handler);




let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside box1");
}



// ************ Program to switch modes via toggle button ****************

let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

mode.addEventListener("click", () =>{
    if (currmode==="light"){
    console.log("dark");
    currmode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
}
else{
    console.log("light");
    currmode="light";
    body.classList.add("light");
    body.classList.remove("dark");
}
})


