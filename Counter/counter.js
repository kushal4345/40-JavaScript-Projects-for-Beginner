let Counter = document.querySelectorAll("#Counter");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");
let inc = document.getElementById("inc");
let zer = document.getElementById("zero");
let count = 0;

inc.addEventListener("click", () => {   
    count++;                                  // Increment count
    zer.innerText = count;                    // Update the text inside the element
    console.log(count);                  
});
reset.addEventListener("click", () => {  
    count = 0;                                  // Increment count
    zer.innerText = count;                    // Update the text inside the element
    console.log(count);                      
});
dec.addEventListener("click", () => {    
    count--;                                  // Increment count
    zer.innerText = count;                    // Update the text inside the element
    console.log(count);               
});
