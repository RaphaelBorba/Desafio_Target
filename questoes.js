function quest1() {

    let index = 13
    let sum = 0
    let k = 0

    while (k < index) {

        k += 1

        sum = sum + k
    }
    return sum
}

// Na questão 1 o valor da variável é de 91

function quest2(number) {

    const arrFib = [0, 1]
    let i = 0
    while (arrFib[i + 1] < number) {

        arrFib.push(arrFib[i] + arrFib[i + 1])
        i++
    }
    if (arrFib.includes(number)) return `O número ${number} pertence a sequência Fibonacci.`

    return `O número ${number} não pertence a sequência Fibonacci.`
}

// Na função criei um while que cria a sequência de Fibonacci até o número informado, 
// após isso verifico se o número pertence a sequência ou não

/*
  Questão 3

  A) 1,3,5,7,9,11,13,15,17 ... está mostrando os impares
  B) 2,4,8,16,32,64,128,256,512 ... está mostrando o dobro do anterior
  C) 0,1,4,9,16,25,36,49,64,81... está mostrando o quadrado dos números 1,2,3,4,5,6,7,8,9...
  D) 4,16,36,64,100,144,196... está mostrando o quadrado dos pares 2,4,6,8,10,12,14
  E) 1,1,2,3,5,8,13,21,34,55,89... está mostrando a soma dos 2 últimos 
  F) 2,10,12,16,17,18,19,27,29,33,34,35,36... a sequência soma 8, 2, 4 depois mostra uma sequencia de tres numeros
  
*/


//Questão 4

/*
A distância total que cada veículo percorre é de 100 km,
e podemos usar a fórmula de distância = velocidade x tempo
para encontrar o tempo que cada veículo leva para chegar ao 
ponto de cruzamento. Para o carro, temos:

distância = velocidade x tempo
100 km = 110 km/h x tempo
tempo = 100 km / 110 km/h
tempo = 0,91 h

Para o caminhão, devemos considerar o tempo extra nos 
dois pedágios. O caminhão leva 5 minutos a 
mais em cada pedágio, então ele leva um total de 0,1666 horas a 
mais para atravessar ambos os pedágios. Portanto, o tempo que o 
caminhão leva para chegar ao ponto de cruzamento é:

distância = velocidade x tempo
100 km = 80 km/h x tempo
tempo = 100 km / 80 km/h + 0,1666 h
tempo = 1,25 h

Para calcular a distância que cada veículo está de Ribeirão Preto
no momento do cruzamento, basta multiplicar a velocidade de cada
veículo pelo tempo que ele leva para chegar ao ponto de cruzamento.
Para o carro, temos:

distância do carro de Ribeirão Preto = 110 km/h x 0,91 h
distância do carro de Ribeirão Preto = 100 km

Para o caminhão, temos:

distância do caminhão de Ribeirão Preto = 80 km/h x 1,25 h
distância do caminhão de Ribeirão Preto = 100 km

Conclusão: No momento do cruzamento, tanto o carro quanto o caminhão estão 
exatamente a mesma distância da cidade de Ribeirão Preto. Portanto, nenhum 
deles está mais próximo da cidade de Ribeirão Preto.
 */
