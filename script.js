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
            <label for="${name}">${label}</label>
            <input type="${type}" name="${name}" required>
            
        </div>
    `
}

const select = (type, name, label,selectOptions) => {
    let optionElements = '';
    for (const option of selectOptions){
        optionElements += `<option value="${option}">${option}</option>`
    }
    return `
    <div>
        <label for="${name}">${label}</label>
        <select name="${name}" required>
            ${optionElements}
        </select>
    </div>

    `
}
const formElement = `
    <form id="form">
        <h1>EPIC FORM</h1>
        ${input("text","name","Keresztnév")}
        ${input("file","profpics","Profilkép")}
        ${input("email","email","E-mail cím")}
        ${input("checkbox","ola","Szeretnél hírlevelet kapni?")}
        ${input("checkbox","bola","Elfogadod a felhasználási feltételeket?")}
        ${select("select","where","Hol hallottál rólunk?",["internetről","ismerőstől","egyéb"])}
        <br/>
       <button>OK</button>
    </form>
`

const formSubmit = (event) => {
    event.preventDefault();
    const et = event.target;
    console.log(et);
    et.classList.add('submitted');
    const etValue = et.querySelector(`select[name="where"]`).value;
    console.log(etValue);
}

const inputEvent = (event) => {
    const fName = document.querySelector(`input[name='firstName']`);
    console.log(fName);
    if (event.target.getAttribute('name') === 'name'){
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