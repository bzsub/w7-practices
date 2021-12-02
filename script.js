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

const input = (type, name, label,req = '') => {
    console.log(req);
    return `
        <div class="${type}">
            <label for="${name}">${label}</label>
            <input type="${type}" name="${name}" ${req}>
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


/*const nameData = {
    type: "text",
    name: "name",
    label: "Keresztnév"
}*/

const formFields = [
    {
        type: "text",
        name: "name",
        label: "Keresztnév"
    },{
        type: "file",
        name: "profpics",
        label: "Profilkép"
    },{
        type: "email",
        name: "email",
        label: "E-mal cím",
        required:"required"
    },{
        type: "checkbox",
        name: "ola",
        label: "Szeretnél hírlevelet kapni?"
    },{
        type: "checkbox",
        name: "bola",
        label: "Elfogadod a felhasználási feltételeket?"
    }/*,{
        type: "select",
        name: "where",
        label: "Hol hallottál rólunk?",
        selectOptions:["internetről","ismerőstől","egyéb"]
    },*/
]

const anotherFormFields = [
    {
        type: "text",
        name: "street",
        label: "Közterület neve"
    },
    {
        type: "text",
        name: "houseNumber",
        label: "Házszám"
    },
    {
        type: "text",
        name: "zipCode",
        label: "Irányítószám"
    },
    {
        type: "text",
        name: "city",
        label: "Település neve"
    },
]
/*const formElement = `
    <form id="form">
        <h1>EPIC FORM</h1>
        ${input(nameData.type,nameData.name,nameData.label)}
        ${input("file","profpics","Profilkép")}
        ${input("email","email","E-mail cím","required")}
        ${input("checkbox","ola","Szeretnél hírlevelet kapni?")}
        ${input("checkbox","bola","Elfogadod a felhasználási feltételeket?")}
        ${select("select","where","Hol hallottál rólunk?",["internetről","ismerőstől","egyéb"])}
        <br/>
       <button>OK</button>
    </form>
`
*/

const formElement = (ffs,id) => {
    let toForm = '';
    for ( const ff of ffs ){
        toForm += input(ff.type,ff.name,ff.label,ff.required);
    }

    return `
    <form id="${id}">
        <h1>EPIC FORM</h1>
        ${toForm}
        ${select("select","where","Hol hallottál rólunk?",["internetről","ismerőstől","egyéb"])}
        <br/>
       <button>OK</button>
    </form>
`

}


const formSubmit = (event) => {
    event.preventDefault();
    const et = event.target;
    //console.log(et);
    et.classList.add('submitted');
    const etValue = et.querySelector(`select[name="where"]`).value;
    //console.log(etValue);
}

const inputEvent = (event) => {
    const fName = document.querySelector(`input[name='firstName']`);
    //console.log(fName);
    if (event.target.getAttribute('name') === 'name'){
        console.log(event.target.value);
        document.getElementById('inputValueContent').innerHTML = event.target.value;

    };
    if (event.target.getAttribute("name") ==="profpics" ){
        console.log(event.target.files[0]);
        const image = URL.createObjectURL(event.target.files[0]);
        document.getElementById('inputValueContent').insertAdjacentHTML('beforeend',`<img src="${image}">`);
        document.getElementById('inputValueContent').insertAdjacentHTML('beforeend',`<p>ola</p>`);
    }
}

const init = () => {
    const root = document.getElementById('root');
    root.insertAdjacentHTML('beforeend',formElement(formFields,"form"));
    root.insertAdjacentHTML('beforeend',formElement(anotherFormFields,"form2"));
    
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