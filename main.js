const carro = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    ano: 2020,
    anoFabricacao: 2019,

    acelerar: () => {
        console.log('Vruum');
    }
}

function Carro(modelo, fabricante, ano, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.ano = ano;
    this.anoFabricacao = anoFabricacao;

    this.acelerar = () => {
        console.log('Vrumm');
    }
}

const carroJoao = new Carro('Fiesta', 'Ford', 2020, 2019);
const carroMaria = new Carro('Ka', 'Ford', 2021, 2020);

const nome = 'Gabriel';
const idade = 22;
const maiorDeIdade = true;
const habilidades = ['html', 'java', 'css'];

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: () => {
        return idade >= 18;
    },
    habilidades: habilidades,
}

function Pessoa(nome, idade, habilidades) {
    this.nome = nome;
    this.idade = idade;
    this.habilidades = habilidades;
    this.maiorDeIdade = () => {
        return this.idade >= 18;
    }
}

function exibirCarro(carro, nome) {
    console.log(`Carro do ${nome}: ${carro.fabricante} ${carro.modelo}, ano: ${carro.ano}`);
}

exibirCarro(carroJoao, 'João');

const gabriel = new Pessoa('Gabriel', 22, ['html', 'css', 'Spring Boot']);

if (gabriel.maiorDeIdade()) {
    console.log('Is Maior');
}

// gabriel.maiorDeIdade();




