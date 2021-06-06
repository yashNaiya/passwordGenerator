const symbolEl = document.getElementById("symbol");
const GenbutEl  = document.getElementById("Genbut");
const numberEl = document.getElementById("number");
const lowerEl = document.getElementById("lower");
const upperEl = document.getElementById("upper");
const lenEl = document.getElementById("len");
const copyEl = document.getElementById("copy");
const pwEl = document.getElementById("pw");

const upperLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerLetters = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_";

function getuppercase(){
        return upperLetters[Math.floor(Math.random()* upperLetters.length)];
}

function getlowercase(){
    return lowerLetters[Math.floor(Math.random()* lowerLetters.length)];
}

function getnumber(){
    return numbers[Math.floor(Math.random()* numbers.length)];   
}

function getsymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}


function generatePassword(){

    const len = lenEl.value;
    let password = "";

    for(let i=0; i<len; i++){
        const x = generateX();
        password += x;
    }
    
    pwEl.innerText = password;
}

function generateX(){

    const xs =[];
    if(upperEl.checked){
        xs.push(getuppercase());
    }

    if(lowerEl.checked){
        xs.push(getlowercase());
    }

    if(numberEl.checked){
        xs.push(getnumber());
    }

    if(symbolEl.checked){
        xs.push(getsymbol());
    }

    return xs[Math.floor(Math.random()*xs.length)];
}

GenbutEl.addEventListener("click",generatePassword);


copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});