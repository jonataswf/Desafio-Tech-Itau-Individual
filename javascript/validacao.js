function validarForm() {
    let nome = document.getElementById("nome").value;
    let nomeRegex = new RegExp("ab");

    if (nome == "" || nome == null) {
        alert("Campo obrigatório! Favor preencher o nome invalido");
        return;
    }

}