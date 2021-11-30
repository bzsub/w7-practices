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
        <label>${label}</label>
        <input type="${type}" name="${name}"">
    `;
}

const form = `
    <form id="form">
        ${input('text','name','Keresztneved')}
        ${input('file','profPics','Profilképed')}
        ${input('email','email','Email cím')}
        ${input('radio','ola','Szeretnél hírlvelet?')}
        ${input('checkbox','bola','Elfogadod a felhsz. felt.')}
    </form>
`

const init = () => {

    const root = document.getElementById('root');
    root.insertAdjacentHTML('beforeend', form);

}


window.addEventListener("load", init);