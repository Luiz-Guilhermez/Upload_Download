function enviarCurriculo() {

    const arquivo = document.getElementById('arquivo').files[0];
    const resultado = document.getElementById('resultado');

    if (!arquivo) {
        alert("Insira algum arquivo");
        return;
    }
    if (
        arquivo.type !== "application/pdf" &&
        arquivo.type !== "application/msword" &&
        arquivo.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
        alert("Por favor, selecione um arquivo PDF ou Word");
        return;
    }

    resultado.innerHTML = `
    Nome do Arquivo: ${arquivo.name} <br>
    Tipo: ${arquivo.type} <br>
    Tamanho: ${(arquivo.size / 1024).toFixed(2)} KB <br>
    Curriculo enviado com sucesso!
    `;

    resultado.style.padding = "10px"

    const download = document.getElementById('download');

    download.style.display = 'inline-block';
}