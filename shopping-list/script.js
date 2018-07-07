const inputDOM = document.querySelector("#input");
const addButtonDOM = document.querySelector("#add-button");
const listDOM = document.querySelector("#list");
const ulDOM = document.querySelector("ul");
const inputLength = () => inputDOM.value.length;

const liDOMGenerator = () => {
    const li = document.createElement("li");
        li.textContent= inputDOM.value;
        li.classList.add("list-group-item" , "list-group-item-danger");
        li.addEventListener("click", (e) => {
            e.target.classList.toggle("list-group-item-danger");

            e.target.classList.toggle("done");
        })
        li.appendChild(removeButton());
        ulDOM.appendChild(li);
        inputDOM.value = "";
}

const removeButton = () => {
    const button = document.createElement("button");
    button.textContent="Remove";
    button.classList.add("btn", "btn-danger");

    button.addEventListener("click", (e) => {
        console.log(e);
        e.target.parentElement.remove();
    })
    return button;
}
inputDOM.addEventListener("keypress", (e) => {
    if(inputLength() > 0 && e.keyCode === 13) {
        liDOMGenerator();
    }
});

addButtonDOM.addEventListener("click", (e) => {
    if(inputLength() > 0) {
        liDOMGenerator();
    }
});


// Background Gradient

const color1DOM = document.querySelector(".color1");
const color2DOM = document.querySelector(".color2");
const bodyDOM = document.querySelector("body");

const changeGradient = () => {
    bodyDOM.style.background = `linear-gradient(to right,${color1DOM.value}, ${color2DOM.value})`;
}

color1DOM.addEventListener("input", changeGradient);
color2DOM.addEventListener("input", changeGradient);



