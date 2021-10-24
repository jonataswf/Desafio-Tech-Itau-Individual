function validarForm() {
    let nome = document.getElementById("nome").value;
    let rg = document.getElementById("rg").value;
    let cep = document.getElementById("cep").value;
    let cpf = document.getElementById("cpf").value;
    let endereco = document.getElementById("endereco").value;
    let num = document.getElementById("numero").value;
    let telcelular = document.getElementById("telcelular").value;
    let telFixo = document.getElementById("telfixo").value;

    //Regex
    let letras = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    let numeros = /^([0-9]*)$/;
    let cpfRegex = /^[0-9]{11}$/;
    let telCelRegex = /^[0-9]{11}$/;
    let telFixoRegex = /^[0-9]{10}$/;


    if (nome == "" || nome == null) {
        alert("Campo nome obrigatorio!");
        return;
    }

    if (!letras.test(nome)) {
        alert("O nome deve conter apenas letras");
        return;
    }

    if (cpf == "" || cpf == null) {
        alert("Campo CPF obrigatorio!");
        return;
    }

    if (!cpfRegex.test(cpf)) {
        alert("CPF tem que possuir 11 digitos e somente numeros!");
        return;
    }

    if (!numeros.test(rg)) {
        alert("RG tem que possuir somente numeros!");
        return;
    }

    if (!numeros.test(cep)) {
        alert("CEP tem que possuir somente numeros!");
        return;
    }

    if (endereco == "" || endereco == null) {
        alert("Campo endereço obrigatorio!\nDigite o cep para encontrar!");
        return;
    }

    if (num == "" || num == null) {
        alert("Campo numero obrigatorio!");
        return;
    }

    if (telcelular == "" || telcelular == null) {
        alert("Campo telefone celular obrigatorio!");
        return;
    }

    if (!telCelRegex.test(telcelular)) {
        alert("Telefone celular tem que possuir 11 digitos com DDD e somente numeros!");
        return;
    }

    if (!telFixoRegex.test(telFixo)) {
        alert("Telefone fixo tem que possuir 10 digitos com DDD e somente numeros!");
        return;
    }

    window.location.href = "../cadastrado.html";

};