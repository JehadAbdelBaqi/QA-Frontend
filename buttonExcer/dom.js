'use strict';

let buttonCount = 0;

// make a varialble to be able to modify = query selector - selectors
let mainDiv = document.querySelector("#addToMe");
let mainDiv2 = document.querySelector("#addToMe2");
let addBtn = document.querySelector("#addBtn");
let saveBtn = document.querySelector("#saveBtn");
let clearBtn = document.querySelector("#clearBtn");

let clearbox = (id) => {
    document.getElementById(id).innerHTML = "";
} 

let clearAll = () => {
    clearbox("addToMe");
    clearbox("addToMe2");
    buttonCount = 0;
}

let buttonUp = () => {
    buttonCount++;
    // clear text content JS - line 6 - main div needs to be cleared.
    mainDiv.innerHTML = "";
    let numberheader = document.createElement("h1");
    let newText = document.createTextNode(buttonCount);
    numberheader.appendChild(newText);
    mainDiv.appendChild(numberheader);
}

let saveNumber = () => {
    let savedNum = document.createElement("h1");
    let saveText = document.createTextNode(buttonCount);
    savedNum.appendChild(saveText);
    mainDiv2.appendChild(savedNum);
}

// Event listener
addBtn.addEventListener("click", buttonUp);
saveBtn.addEventListener("click", saveNumber);
clearBtn.addEventListener("click", clearAll);
