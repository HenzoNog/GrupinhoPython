const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//

class personagem {
    constructor(vida, tipo, atk, def, nome, mana) {
        this.nome = nome;
        this.atk = atk;
        this.def = def;
        this.vida = vida;
        this.tipo = tipo;
        this.mana = mana;
    }
    atk(alvo) {
        let dano= this.atk - alvo.def;
        if (dano>0) alvo.vida -=dano;
        console.log('${this.nome} atacou${alvo.nome} causando ${dano} de dano.');
    }
}
class Mago extends personagem {
    constructor(nome,) {
        super(nome, "Mago", );
    }
}
class Viking extends personagem {
    constructor(nome){
        super(nome, "Viking", );
    }
}
class Druida extends personagem{
    super(nome, )
}