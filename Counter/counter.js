let Counter = document.querySelectorAll("#Counter");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");
let inc = document.getElementById("inc");
let zer = document.getElementById("zero");
let count = 0;

inc.addEventListener("click", () => {   
    count++;     
    zer.style.color = "green"                             // Increment count
    zer.innerText = count;                    // Update the text inside the element
    console.log(count);                  
});
reset.addEventListener("click", () => { 
    zer.style.color ="white"
    count = 0;                                  // Increment count
    zer.innerText = count;                    // Update the text inside the element
    console.log(count);                      
});
dec.addEventListener("click", () => {  
    zer.style.color = "Red"  
    count--;                                  // Increment count
    zer.innerText = count;                    // Update the text inside the element
    console.log(count);               
});
