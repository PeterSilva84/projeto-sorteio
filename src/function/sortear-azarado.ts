import Pessoa from "../model/pessoa";

export default function sortearAzarado(pessoas: Pessoa[]): Pessoa {
    let restantes = [...pessoas]; // criar uma variavel (clonando uma já existente pessoas no caso)

    for (let i = 0; i < pessoas.length; i++) {
        restantes = todosMenosUm(restantes);
    }
    return restantes[0]; //retornar essa variavel
}

function todosMenosUm(pessoas: Pessoa[]): Pessoa[] {
    if (pessoas.length === 1) return pessoas;
    const sorteado = Math.floor(Math.random() * pessoas.length)
    return pessoas.splice(sorteado, 1);
}





