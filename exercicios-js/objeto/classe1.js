class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    adicionarLancamentos(...lancamentos) {
        lancamentos.forEach(
            item => this.lancamentos.push(item)
        )
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(item => {
            valorConsolidado +=item.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const alugel = new Lancamento('Aluguel', -1500)

const contas = new CicloFinanceiro(6, 2018)
contas.adicionarLancamentos(salario, contaDeLuz, alugel)

console.log(contas.sumario())

