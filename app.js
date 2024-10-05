let enterNum = prompt("Enter a number between 1 and 100");
    enterNum = parseInt(enterNum);

    if (enterNum >= 1 && enterNum <= 100) {
        createDivs(enterNum);
    } else {
        alert("Please enter a number between 1 and 100.");
    }

const start = document.querySelector(".start");

start.addEventListener("click", () => {
    enterNum = prompt("Enter a number between 1 and 100");
    enterNum = parseInt(enterNum);

    if (enterNum >= 1 && enterNum <= 100) {
        createDivs(enterNum);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

function createDivs(num) {
    let container = document.querySelector(".container");
    container.innerHTML = "";

    let totalDivs = num * num;

    for (let i = 0; i < totalDivs; i++) {
        let div = document.createElement("div");
        div.classList.add("divs");
        container.appendChild(div);

        div.addEventListener("mouseenter",()=>{
            div.style.backgroundColor = "rgb(35, 67, 154)";
        })
        div.addEventListener("click",()=>{
            div.style.backgroundColor = "white";
        })
    }

    const divSize = 100 / num; 
    document.querySelectorAll(".divs").forEach(div => {
        div.style.flexBasis = `${divSize}%`;
    });
}
