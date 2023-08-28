// 1) Crie um algoritmo em javascript no qual o usuário irá digitar um operador +, -, *, / , no qual será realizado o cálculo e exibido para o usuário. Utilize Switch Case.

let valor1 = parseFloat(prompt("Digite o primeiro valor"));
let valor2 = parseFloat(prompt("Digite o segundo valor"));
let operador = prompt("Escolha um operador +,-,*,/ ");
let result;

switch (operador) {
    case '+':
      result = valor1 + valor2;
      break;
    case '-':
      result = valor1 - valor2;
      break;
    case '*':
      result = valor1 * valor2;
      break;
    case '/':
      result = valor1 / valor2;
      break;
    // outros casos
    default:
      result = "invalido";
  }


  alert("O resultado da operação é " + result);

