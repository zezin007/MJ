document.getElementById('btnOpcao1').addEventListener('click', function() {
    verificarResposta('1');
});

document.getElementById('btnOpcao2').addEventListener('click', function() {
    verificarResposta('2');
});

document.getElementById('btnOpcao3').addEventListener('click', function() {
    verificarResposta('3');
});

function verificarResposta(resposta) {
    var mensagem = document.getElementById('mensagem');
    var gif = document.getElementById('gif');
    
    // Números das opções corretas e erradas para cada pergunta
    var opcoesCorretas = ['1', '2'];
    var opcoesErradas = ['3'];
    
    if (opcoesCorretas.includes(resposta)) {
        mensagem.innerText = 'Resposta correta!';
        gif.style.display = 'block';
        setTimeout(function() {
            window.location.href = 'pergunta3.html'; // Redireciona para a próxima página após 3 segundos
        }, 3000); // Delay de 3 segundos
    } else if (opcoesErradas.includes(resposta)) {
        mensagem.innerText = 'Resposta errada!';
        ocultarOpcaoErrada(resposta);
        setTimeout(function() {
            window.location.href = 'vaisim.html'; // Redireciona para a página de erro após 3 segundos
        }, 0000); // Delay de 3 segundos
    }
}

function ocultarOpcaoErrada(respostaErrada) {
    var opcaoErrada = document.getElementById('btnOpcao' + respostaErrada);
    
    if (opcaoErrada) {
        opcaoErrada.style.display = 'none'; // Oculta a opção errada
    }
}
