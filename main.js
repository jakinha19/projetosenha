const campoSenha = document.querySelector("#campo-senha");
const checkboxMaiusculas = document.querySelector("#maiusculas");
const checkboxMinusculas = document.querySelector("#minusculas");
const checkboxNumeros = document.querySelector("#numeros");
const checkboxSimbolos = document.querySelector("#simbolos");
const tamanhoSenha = document.querySelector("#tamanho");
const aumentar = document.querySelector("#aumentar");
const diminuir = document.querySelector("#diminuir");
const forcaSenha = document.querySelector(".forca");

let tamanho = 12;

aumentar.onclick = () => {
    tamanho++;
    tamanhoSenha.textContent = tamanho;
    geraSenha();
}

diminuir.onclick = () => {
    if(tamanho > 1){
        tamanho--;
        tamanhoSenha.textContent = tamanho;
        geraSenha();
    }
}

checkboxMaiusculas.onclick = geraSenha;
checkboxMinusculas.onclick = geraSenha;
checkboxNumeros.onclick = geraSenha;
checkboxSimbolos.onclick = geraSenha;

function geraSenha(){
    let alfabetoMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
    let alfabetoMinusculas = 'abcdefghijklmnopqrstuvxywz';
    let numeros = '0123456789';
    let simbolos = '!@#$%^&*()';

    let caracteres = '';
    let senha = '';

    if(checkboxMaiusculas.checked) caracteres += alfabetoMaiusculas;
    if(checkboxMinusculas.checked) caracteres += alfabetoMinusculas;
    if(checkboxNumeros.checked) caracteres += numeros;
    if(checkboxSimbolos.checked) caracteres += simbolos;

    for(let i = 0; i < tamanho; i++){
        let numeroAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha();
}

function classificaSenha(){
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if(tamanho > 11 && checkboxMaiusculas.checked && checkboxMinusculas.checked && checkboxNumeros.checked && checkboxSimbolos.checked){
        forcaSenha.classList.add('forte');
    } else if(tamanho > 5 && (checkboxMaiusculas.checked || checkboxMinusculas.checked) && checkboxNumeros.checked){
        forcaSenha.classList.add('media');
    } else {
        forcaSenha.classList.add('fraca');
    }
}

geraSenha();
