//Um almoxarifado precisa cadastrar 4 materiais. Cada material possui nome, quantidade atual e estoque
//mínimo. Ao final, o programa deve indicar quais precisam de reposição.
//O programa deve:
//☐ Criar um array vazio.
//☐ Usar um laço para cadastrar 4 materiais.
//☐ Criar um objeto em cada repetição com nome, quantidade e estoqueMinimo.
//☐ Adicionar cada objeto ao array com push().
//☐ Depois do cadastro, percorrer o array.
//☐ Se quantidade < estoqueMinimo, exibir REPOR ESTOQUE; caso contrário, ESTOQUE OK.
//☐ Exibir nome, quantidade, estoque mínimo e situação.

const entrada = require('readline-sync');

const materiais = [];

for (let i = 0; i < 4; i++){
    const material = {
        nome: entrada.question(`Nome do ${i+1}o material: `),
        quantidade: entrada.questionInt(`Quantidade atual: `),
        estoqueMinimo: entrada.questionInt(`Estoque minimo: `)
    };
    materiais.push(material);
}
console.log(`---- RELATORIO DE ESTOQUE ----`);
for (let i = 0; i < materiais.length; i++){
    const material = materiais[i];

    let situacao;
    if(material.quantidade < material.estoqueMinimo){
        situacao = "Repor Estoque";
    }else{
        situacao = "Estoque OK";
    }
    console.log(`Material: ${material.nome}`)
    console.log(`Quantidade: ${material.quantidade}`)
    console.log(`Estoque Minimo: ${material.estoqueMinimo}`)
    console.log(`Situacao: ${situacao}`)
    console.log("-" .repeat(20));
}


    