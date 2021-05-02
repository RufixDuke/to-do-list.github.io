var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li");


li.appendChild(document.createTextNode(input.value)); //makes text
// from input field the li text

ul.appendChild(li); // add li to ul
input.value = ""; //reset text input field

// STRIKE THROUGH
function crossOut() {
    li.classList.toggle("done");
} 

li.addEventListener("click", crossOut);
// END STRIKE THROUGH

// START AND DELETS BUTTON
var dBtn = document.createElement("button");

dBtn.appendChild(document.createTextNode("X"));
li.appendChild(dBtn);
dBtn.addEventListener("click", deleteListItem);
// END ADD DELETE BUTTON

//ADD CLASS DELETE (DISPLAY: NONE)
function deleteListItem() {
    li.classList.add("delete")
}
//END ADD CLASS DELETE
}

function addListAfterClick() {
    if (inputLength() > 0) {// makes sure that an empty input field
        //doesn't create a li
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13){
        //this now looks to see if you hit "enter"/"return"
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);