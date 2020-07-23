function calculaTabuada() {

    // obtendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    /*let ValorA = 5; */

    //obtendo valor a do campo input number e convertendo em inteiro
    let ValorA = parseInt((document.querySelector("#valorA").value));

    //limpando o conteudo do tbody
    tabuada.innerHTML = ''; 

    //criando laço de repetição de 0 a 10
    for (let ValorB = 0; ValorB <= 10; ValorB++) {

        //calculando o resultado da linha atual
        let resultado = ValorA * ValorB;
        //criando o template das colunas da linhas 
        let template = `
            <td>${ValorA}</td>
            <td>X</td>
            <td>${ValorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        `;

        /* criar o elemento tr */
        let tr = document.createElement('tr'); /* criar um elemento tr - criar uma linha e colcoar a string dentro da linha , dentro da tr */

        
        tr.innerHTML = template /* colocar uma string dentro da linha tr */
        //inserindo a linha na tabela
        tabuada.append(tr); 
    }

}

calculaTabuada();

document.querySelector("#valorA").addEventListener('change', calculaTabuada);