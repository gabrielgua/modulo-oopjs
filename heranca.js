function Pessoa(nome) {
    this.nome = nome;
    this.hello = () => {
        console.log(`${this.nome} says Hello!`);
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;
    Pessoa.call(this, nome);

    this.getSalario = () => {
        return _salario;
    } 

    this.setSalario = (valor) => {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.sobre = () => {
        // this.hello();
        console.log(`${this.nome} - ${this.cargo}, R$ ${this.getSalario()}`);
    }

    this.aumento = () => {
        _salario = _salario * 1.1;
    }
}

function Estagiario(nome) {
    Funcionario.call(this, nome, 'Estagiário', 2000);

    this.aumento = () => {
        this.setSalario(this.getSalario() * 1.07);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, 'Gerente', 10000);

    this.aumento = () => {
        this.setSalario(this.getSalario() * 1.15);
    }
}

const joao = new Pessoa('João');
const maria = new Pessoa('Maria');
const paula = new Pessoa('Paula');

const funcionario = new Funcionario(maria.nome, 'Desenvolvedor Backend', 5000);
const estag = new Estagiario(joao.nome);
const gerente = new Gerente(paula.nome);

funcionario.sobre();
funcionario.aumento();
funcionario.sobre();
console.log('---------------');
estag.sobre();
estag.aumento();
estag.sobre();
console.log('---------------');
gerente.sobre();
gerente.aumento();
gerente.sobre();



