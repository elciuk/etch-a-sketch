const header = document.querySelector(".heading");
const container = document.querySelector(".container");
const x = document.querySelector("#x");
const y = document.querySelector("#y");
const confirmation = document.querySelector(".confirm");
const clear = document.querySelector(".clear");

let currentNumberOfDivs = 0;

window.onresize = () => {
    container.height = window.innerHeight - header.height;
}

confirmation.onclick = () => {
    for (let a=0; a< currentNumberOfDivs; a++){
        container.removeChild(container.lastChild);
    }
    if (x.value > 32) x.value=32;
    if (x.value < 1) x.value=1;
    if (y.value > 32) y.value=32;
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
            e.style.backgroundColor = "grey";
            console.log("hovered over");
        });
    });
    allDivs = document.querySelectorAll("div.container div");
    console.log(currentNumberOfDivs);
    console.log(allDivs);
}

clear.addEventListener("click", ()=> {
    for (let a=0; a< currentNumberOfDivs; a++){
        container.removeChild(container.lastChild);
    }
    currentNumberOfDivs = 0;
    console.log(currentNumberOfDivs);
});

//this is the part for changing color of elements
