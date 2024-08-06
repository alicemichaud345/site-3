

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");








const perguntas = [
  {
      enunciado: "Um dia você volta para casa cansado e deprimido, você já entra direto no quarto se recuperando dos machucados que os alunos da sua escola fizeram em você. Então você decide jogar um jogo aleatório no seu notebook para relaxar. Então você encontra um jogo VR chamado CircDubs.Você quer jogar? ",
      alternativas: [
          "Poder ser, não parece fazer o meu estilo mais acho que vai me relaxar",
          "Nah, não tô afim... quer saber acho que vou dormir, vai que assim eu relaxe um pouco"
      ]
  },
  {




      enunciado: "Após você pensar bastante sobre isso, decidiu que iria jogar só para testar! Então voçê alcança o seu VR que estava na sua estante e coloca em sua cabeça e seu controle remoto. Você vê que a tela do notebook está preta com apenas uma pergunta para decidir Start or Exit?",
      alternativas: [
          "Start (Você não pensa duas vezes e apertou start para começar)",
          "Exit (Você mudou de ideia ja que está muito tarde pra jogar)"
      ]




  },
];




let atual = 0;
let perguntaAtual;


function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;


}
mostraPergunta();


