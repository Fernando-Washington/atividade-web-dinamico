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
    { nome: 'Laranja pastel', cor: 'rgb(255, 160, 122)' } // Substituindo o vermelho vinho por um laranja pastel suave
  ];

const inverno = [
    { nome: 'Azul gelo', cor: 'rgb(240, 248, 255)' },
    { nome: 'Branco gelo', cor: 'rgb(240, 255, 255)' },    
    { nome: 'Lavanda', cor: 'rgb(230, 230, 250)' },   
    { nome: 'Azul suave', cor: 'rgb(135, 206, 235)' },
    { nome: 'Azul profundo', cor: 'rgb(0, 191, 255)' }
    
  ];

let i_estacao = 0;
let vet_estacao = primavera; // recebe o array

function calcula_estacao()
{
    clearInterval(intervalo);

    // aqui recebe-se o número do mês informado pelo usuário
    // informa-se o nome do mês correspondente
    // e calcula-se a estação do ano, conforme a meteorologia (vide arquivo observacoes.txt)
    // daí, destaca-se a imagem da referida estação do ano
    // e retiram-se os destaques de todas as demais

    
    intervalo = setInterval(coresEstacao, 5000);
}

const intervalo = setInterval(coresEstacao, 0);

let num_cor;


function coresEstacao(){

    // Os elementos HTML da classe "cor" devem mostrar 
    // os nomes das cores da estação do ano calculada 
    // na função calcula_estacao() 
    // e mudar o backgroundColor para estas cores.

    // O background da elemento HTML associado à classe estacoes
    // deverá alternar entre estas cores. 
     
}


clearInterval(intervalo);