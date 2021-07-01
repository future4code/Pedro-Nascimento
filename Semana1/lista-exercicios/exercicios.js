// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
  }
  
  // EXERCÍCIO 0B
  function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')
  
    console.log(mensagem)
  }
  
  // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
  
// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("Qual a altura do triangulo?"))
const largura = Number(prompt("Qual a largura do triangulo?"))
console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const nascimento = Number(prompt("Qual ano de nascimento?"))
  const anoAtual = Number(prompt("Qual ano atual?"))
  console.log(nascimento - anoAtual)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual o seu nome?")
const idade = Number(prompt("Qual a sua idade?"))
const email = prompt("Qual o seu email?")

console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email +".")
  
  }
  
  // EXERCÍCIO 05
  function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
    const cor1 = prompt('Digete uma cor')
    const cor2 = prompt('Digete uma outra cor')
    const cor3 = prompt('Digete umais uma cor')
    // console.log([cor1,cor2,cor3])
    const arrayDeCores = []
    arrayDeCores.push(cor1,cor2,cor3)
console.log(arrayDeCores)
  }
  
  // EXERCÍCIO 06
  function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
  // const retornoMaiusculo = string.toUpperCase()
  // return retornoMaiusculo
  return string.toUpperCase()
  }
  
  // EXERCÍCIO 07
  function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
  
  //custo = valorIngresso * numero de ingreddo
  //numero de ingressos = custp/valorIngresso
  // const quantidadeDeIngressos = custo / valorIngresso
  return custo / valorIngresso

  }
  
  // EXERCÍCIO 08
  function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui
  // const totalString1 = string1.length
  // const totalString2 = string2.length
  // const comparar = totalString1 === totalString2
  // return comparar
  return string1.length === string2.length

  }
  
  // EXERCÍCIO 09
  function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
  // const primeiroElemento = array[0]
  // return primeiroElemento
  return array[0]

  }
  
  // EXERCÍCIO 10
  function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
  //   const posicaoUltimoElemento = array.length -1
  // const ultimoElemento = array[posicaoUltimoElemento]
  // return ultimoElemento
   return array[array.length -1] 

  }
  
  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length -1]
  array[0]=ultimoElemento
  array[array.length -1]=primeiroElemento
  return array
  
  }
  
  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
    const elemento1 = string1.toUpperCase()
    const elemento2 = string2.toUpperCase()
    return elemento1 === elemento2
    // return string1.toUpperCase() === string2.toUpperCase()

  }
  
  // EXERCÍCIO 13
  function checaRenovacaoRG() {
    // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual o ano voce nasceu?"))
  const anoEmissao = Number(prompt("Qual a sua carteira foi emitida?"))
  

  const idade = anoAtual - anoNascimento
  const tempoDeCarteira = anoAtual - anoEmissao

  const condicao1  = idade <=20 && tempoDeCarteira >=5
  const condicao2  = idade > 20 && idade <=50 && tempoDeCarteira >=10
  const condicao3  = idade > 50 && tempoDeCarteira >=15
  
  console.log(condicao1 || condicao2 || condicao3)

  }
  
  // EXERCÍCIO 14
  function checaAnoBissexto(ano) {
    // implemente sua lógica aqui
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
  return cond1 || cond2
  }
  
  // EXERCÍCIO 15
  function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
  const suaIdade = prompt("Qual a sua idade?")
  const escolaridade = prompt("Voce tem o ensino médio completo?")
  const disponibilidade = prompt("Voce tem disponibilidade de horario para o curso?")
  
  console.log( suaIdade === "sim" && escolaridade === "sim" && disponibilidade === "sim" )

  }