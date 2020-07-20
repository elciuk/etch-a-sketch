const header = document.querySelector(".heading");
const container = document.querySelector(".container");
const x = document.querySelector("#x");
const y = document.querySelector("#y");
const confirmation = document.querySelector(".confirm");
const random = document.querySelector(".random");

let currentNumberOfDivs = 0;
let randomColor = false;

window.onresize = () => {
    container.height = window.innerHeight - 35;
}

confirmation.onclick = () => {
    for (let a=0; a< currentNumberOfDivs; a++){
        container.removeChild(container.lastChild);
    }
    if (x.value > 32) x.value=64;
    if (x.value < 1) x.value=1;
    if (y.value > 32) y.value=64;
    if (y.value < 1) y.value=1;
    currentNumberOfDivs = (x.value * y.value);

    container.style.gridTemplateColumns = `repeat(${x.value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${y.value}, 1fr)`;
    
    for(let a = 0;a<(parseInt(x.value)*parseInt(y.value)); a++){
        const div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.display = "block";
        container.appendChild(div);
    }
    let allDivs = document.querySelectorAll("div.container div");
    allDivs.forEach((e)=>{
        e.addEventListener("mouseover", ()=>{
            if(!randomColor){
            e.style.backgroundColor = "grey";
            } else {
                e.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            }
        });
    });
    allDivs = document.querySelectorAll("div.container div");
    console.log(currentNumberOfDivs);
    console.log(allDivs);
}

//this is the part for changing color of elements

random.addEventListener("click", ()=>{
    if(!randomColor) randomColor = true;
    else randomColor = false;
    console.log(randomColor);
});