// scripts.js

const mes = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const estacao_ano = ["primavera", "verão", "outono", "inverno"];

const primavera = [
  { "nome": "Rosa chá", "cor": "rgb(255, 182, 193)" },
  { "nome": "Lilás", "cor": "rgb(200, 162, 200)" },
  { "nome": "Verde menta", "cor": "rgb(152, 255, 152)" },
  { "nome": "Amarelo limão", "cor": "rgb(255, 250, 85)" },
  { "nome": "Peônia", "cor": "rgb(255, 105, 180)" }
];

const verao = [
    { nome: 'Turquesa', cor: 'rgb(64, 224, 208)' },
    { nome: 'Verde limão', cor: 'rgb(173, 255, 47)' },
    { nome: 'Amarelo ouro', cor: 'rgb(255, 223, 0)' },
    { nome: 'Laranja pastel', cor: 'rgb(255, 179, 71)' },
    { nome: 'Coral', cor: 'rgb(255, 127, 80)' }
];

const outono = [
    { nome: 'Amarelo suave', cor: 'rgb(255, 239, 184)' },
    { nome: 'Bege claro', cor: 'rgb(210, 180, 140)' },
    { nome: 'Pêssego suave', cor: 'rgb(255, 218, 185)' },
    { nome: 'Marrom claro', cor: 'rgb(222, 184, 135)' },
    { nome: 'Laranja pastel', cor: 'rgb(255, 160, 122)' }
  ];

const inverno = [
    { nome: 'Azul gelo', cor: 'rgb(240, 248, 255)' },
    { nome: 'Branco gelo', cor: 'rgb(240, 255, 255)' },
    { nome: 'Lavanda', cor: 'rgb(230, 230, 250)' },
    { nome: 'Azul suave', cor: 'rgb(135, 206, 235)' },
    { nome: 'Azul profundo', cor: 'rgb(0, 191, 255)' }
  ];

// Variáveis globais - certifique-se que estas são 'let' se forem reatribuídas
let i_estacao = 0;
let vet_estacao = primavera; // 'primavera' é um const, mas 'vet_estacao' é let, então pode receber a referência.
let intervaloGlobal;
let num_cor = 0;

// Variáveis para elementos DOM - declaradas com 'let' e atribuídas após o DOM carregar
let inputMes;
let labelNomeMes;
let labelNomeEstacao;
let divEstacoesBackground;
let elementosCorDisplay; // Note que querySelectorAll retorna uma NodeList, não um único elemento

const classesEstacoesImagens = {
    "primavera": "primavera",
    "verão": "verao",
    "outono": "outono",
    "inverno": "inverno"
};

function calcula_estacao() {
    // Verifica se os elementos DOM essenciais foram carregados
    if (!inputMes) {
        console.error("ERRO: inputMes não foi inicializado. O DOM carregou completamente?");
        return; // Sai da função se o input não estiver pronto
    }

    if (intervaloGlobal) {
        clearInterval(intervaloGlobal);
    }

    let mesUsuarioInput = parseInt(inputMes.value);
    if (isNaN(mesUsuarioInput) || mesUsuarioInput < 1 || mesUsuarioInput > 12) {
        console.warn("Mês inválido no input, usando o primeiro mês (Janeiro) como padrão.");
        mesUsuarioInput = 1;
        inputMes.value = "1";
    }
    
    let numeroMes = mesUsuarioInput - 1;
    const nomeMesAtual = mes[numeroMes];
    let nomeEstacaoAtual;

    if (numeroMes >= 8 && numeroMes <= 10) {
        i_estacao = 0; vet_estacao = primavera; nomeEstacaoAtual = estacao_ano[0];
    } else if (numeroMes === 11 || numeroMes === 0 || numeroMes === 1) {
        i_estacao = 1; vet_estacao = verao; nomeEstacaoAtual = estacao_ano[1];
    } else if (numeroMes >= 2 && numeroMes <= 4) {
        i_estacao = 2; vet_estacao = outono; nomeEstacaoAtual = estacao_ano[2];
    } else {
        i_estacao = 3; vet_estacao = inverno; nomeEstacaoAtual = estacao_ano[3];
    }

    if (labelNomeMes) labelNomeMes.textContent = `Mês: ${nomeMesAtual}`;
    if (labelNomeEstacao) labelNomeEstacao.textContent = `Estação: ${nomeEstacaoAtual}`;

    document.querySelectorAll('.estacao').forEach(el => el.classList.remove('imagem-destacada'));
    
    const classeEstacaoAtual = nomeEstacaoAtual === "verão" ? "verao" : nomeEstacaoAtual;
    const divImagemEstacaoAtual = document.querySelector(`.estacao.${classeEstacaoAtual}`);
    if (divImagemEstacaoAtual) {
        divImagemEstacaoAtual.classList.add('imagem-destacada');
    }
    
    num_cor = 0;
    coresEstacao();
    intervaloGlobal = setInterval(coresEstacao, 5000);
}

function coresEstacao() {
    if (!elementosCorDisplay || !divEstacoesBackground) {
        console.error("ERRO: elementosCorDisplay ou divEstacoesBackground não inicializados.");
        return; // Sai se os elementos não estiverem prontos
    }

    elementosCorDisplay.forEach((elemento, index) => {
        if (vet_estacao[index]) {
            elemento.textContent = vet_estacao[index].nome;
            elemento.style.backgroundColor = vet_estacao[index].cor;
        } else {
            elemento.textContent = '?';
            elemento.style.backgroundColor = 'transparent';
        }
    });

    if (divEstacoesBackground && vet_estacao.length > 0) {
        divEstacoesBackground.style.backgroundColor = vet_estacao[num_cor].cor;
        num_cor = (num_cor + 1) % vet_estacao.length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Atribui os elementos DOM aqui, APÓS o HTML ser completamente carregado
    inputMes = document.getElementById('i_mes');
    labelNomeMes = document.getElementById('nome_mes');
    labelNomeEstacao = document.getElementById('nome_estacao');
    divEstacoesBackground = document.getElementById('estacoes');
    elementosCorDisplay = document.querySelectorAll('.cores_est .cor');

    // Verifica se o input principal foi encontrado
    if (inputMes) {
      // Remova o onchange="calcula_estacao()" do seu HTML no elemento <input id="i_mes">
      // Deixe apenas o addEventListener abaixo controlar isso.
      inputMes.addEventListener('change', calcula_estacao);
      calcula_estacao(); // Chama para carregar com o valor inicial do input
    } else {
        console.error("CRÍTICO: Elemento de input do mês (id='i_mes') não encontrado!");
    }
});