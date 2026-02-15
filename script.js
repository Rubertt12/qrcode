function gerarCracha() {
    // Captura os dados
    const info = {
        nome: document.getElementById('nome').value.toUpperCase() || "NOME DO TITULAR",
        sangue: document.getElementById('sangue').value.toUpperCase() || "--",
        c1_n: document.getElementById('c1_nome').value,
        c1_t: document.getElementById('c1_tel').value,
        c2_n: document.getElementById('c2_nome').value,
        c2_t: document.getElementById('c2_tel').value,
        obs: document.getElementById('obs').value || "Nenhuma observação."
    };

    // Preenche o crachá visualmente
    document.getElementById('res-nome').innerText = info.nome;
    document.getElementById('res-sangue').innerText = info.sangue;
    document.getElementById('res-c1').innerText = `1. ${info.c1_n}: ${info.c1_t}`;
    document.getElementById('res-c2').innerText = `2. ${info.c2_n}: ${info.c2_t}`;
    document.getElementById('res-obs').innerText = info.obs;

    // Gerar QR Code
    const qrDiv = document.getElementById("qrcode");
    qrDiv.innerHTML = ""; // Limpa anterior

    const textoFormatado = `EMERGENCIA\nTitular: ${info.nome}\nSangue: ${info.sangue}\nC1: ${info.c1_n} ${info.c1_t}\nC2: ${info.c2_n} ${info.c2_t}\nObs: ${info.obs}`;

    new QRCode(qrDiv, {
        text: textoFormatado,
        width: 160,
        height: 160,
        correctLevel : QRCode.CorrectLevel.H
    });
}

// Inicia com um exemplo
window.onload = gerarCracha;