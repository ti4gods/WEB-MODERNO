/**
 * Timer que executa a cada 1 segundo, fazendo o incremento da idade
 * O contexto não varia para this
 */
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa