const colors = ["green", "blue", "orange", "#0123ff", "black"];

let body = document.querySelector("body");
let btn = document.querySelector(".btn");
let span = document.querySelector(".color")

let currentIndex = 0;  

btn.addEventListener("click", () => {

    body.style.backgroundColor = colors[currentIndex];
    span.textContent = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});

    