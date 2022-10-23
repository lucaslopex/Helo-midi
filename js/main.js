function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// variavel colocando o contador como 0
//let contador = 0;

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    //Faz lista de tecla (de 0 a 9)
    const tecla = listaDeTeclas[contador];

    //Faz a lista de sons
    const instrumento = tecla.classList[1];
    
    //usando crase para misturar a classe com a variável instrumento (template string)
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //console.log(contador);

    tecla.onkeydown = function (evento) {

        //console.log(evento.code === 'Space')

        if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}