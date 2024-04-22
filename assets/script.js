document.getElementById('btnSim2').addEventListener('click', function() {
    verificarResposta('Amo muitao muitaoo, tu é minha vida!');
});

document.getElementById('btnNao').addEventListener('click', function() {
    verificarResposta('Não, te odeio');
});

document.getElementById('btnSim').addEventListener('click', function() {
    verificarResposta('Sim');
});

function verificarResposta(resposta) {
    var mensagem = document.getElementById('mensagem');
    var gif = document.getElementById('gif');
    
    if (resposta === 'Amo muitao muitaoo, tu é minha vida!') {
        mensagem.innerText = 'Resposta correta!';
        gif.style.display = 'block';
        setTimeout(function() {
            window.location.href = 'pergunta2.html'; // Redireciona para a próxima página após 1 segundo
        }, 3000); // Delay de 1 segundo
    } else {
        mensagem.innerText = 'Resposta errada!';
        ocultarOpcaoErrada(resposta);
    }
}

function ocultarOpcaoErrada(respostaErrada) {
    var opcoes = document.querySelectorAll('button');
    
    opcoes.forEach(function(opcao) {
        if (opcao.innerText === respostaErrada) {
            opcao.style.display = 'none'; // Oculta a opção errada
        }
    });
}
