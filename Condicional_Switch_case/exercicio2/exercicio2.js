//  Faça dois algoritmos, um com Switch Case e outro com IF.  O usuário irá digitar um número de 1 a 12, e será exibido o nome do mês.

let numero = parseInt(prompt('digite o numero do mês'));
let mensagem = "";

selecionarMes(numero);
validarMes(numero);
exibirMes();

function selecionarMes(numero_escolhido) {
  
  switch (numero_escolhido) {
    case 1:
      mensagem = "o mês é Janeiro";
      break;
    case 2:
      mensagem = "o mês é Fevereiro";
      break;
    case 3:
      mensagem = "o mês é Março";
      break;
    case 4:
      mensagem = "o mês é Abril";
      break;
    case 5:
      mensagem = "o mês é Maio";
      break;
    case 6:
      mensagem = "o mês é Junho";
      break;
    case 7:
      mensagem = "o mês é Julho";
      break;
    case 8:
      mensagem = "o mês é Agosto";
      break 
    case 9:
      mensagem = "o mês é Setembro";
      break;
    case 10:
      mensagem = "o mês é Outubro";
      break;
    case 11:
      mensagem = "o mês é Novembro";
      break;
    case 12:
      mensagem = "o mês é Dezembro";
      break;   
    // outros casos
    default:
      mensagem = "Mês inválido"}
}

function validarMes(numero_escolhido) {
    if(numero_escolhido < 1) {
      console.log ('Mês inválido');
      return;
    }
    if(numero_escolhido > 12) {
      console.log ('Mês inválido');
      return;
    }
  }
  
  function exibirMes() {
    alert(mensagem)
  }
  
  
