/*
function functionName() {

}

functionName();




const functionName = function () {

}

functionName();



const functionName = () => {

}

functionName();



*/

const input = (type, name, label) => {
    return `
        <div>
            <label>${label}</label>
            <input type="${type}" name="${name}">
        </div>
    `
}

const formElement = `
    <form id="form">
        ${input("text","name","Keresztnév")}
        ${input("file","profpics","Profilkép")}
        ${input("email","email","Eamil cím")}
        ${input("radio","ola","Szeretnél hírlevelet?")}
        ${input("checkbox","bola","Elfogadod a felhasználási feltételeket?")}
       <button>ok</button>
    </form>
`

const formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    event.target.classList.add('submitted');
}

const inputEvent = (event) => {
    if (event.target.name === 'name'){
        console.log(event.target.value);
        document.getElementById('inputValueContent').innerHTML = event.target.value;

    };
}

const init = () => {
    const root = document.getElementById('root');
    root.insertAdjacentHTML('beforeend',formElement);
    root.insertAdjacentHTML('beforeend',`
    <div id='inputValueContent'></div>
    `);

    const form = document.getElementById('form');
    form.addEventListener('submit',formSubmit);

    const inputList = form.querySelectorAll('input');
    for(const input of inputList) {
        input.addEventListener('input',inputEvent)
    };

}


window.addEventListener("load", init);