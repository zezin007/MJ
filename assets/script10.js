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
    var opcoesCorretas = ['1'];
    var opcoesErradas = ['2', '3'];
    
    if (opcoesCorretas.includes(resposta)) {
        mensagem.innerText = '';
        gif.style.display = 'block';
        setTimeout(function() {
            window.location.href = 'presentemisterioso.html'; // Redireciona para a próxima página após 3 segundos
        }, 0990); // Delay de 3 segundos
    } else if (opcoesErradas.includes(resposta)) {
        mensagem.innerText = 'Resposta errada!';
        ocultarOpcaoErrada(resposta);
    }
}

function ocultarOpcaoErrada(respostaErrada) {
    var opcaoErrada = document.getElementById('btnOpcao' + respostaErrada);
    
    if (opcaoErrada) {
        opcaoErrada.style.display = 'none'; // Oculta a opção errada
    }
}
