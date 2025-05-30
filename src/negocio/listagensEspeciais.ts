import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"

export default class ListagensEspeciais {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }

    public top10MaisConsumidores(): void {
        const ordenado = [...this.clientes].sort((a, b) =>
            (b.getProdutosConsumidos.length + b.getServicosConsumidos.length)
            - (a.getProdutosConsumidos.length + a.getServicosConsumidos.length)
        )

        console.log("\nTop 10 clientes que mais consumiram (em quantidade):")
        ordenado.slice(0, 10).forEach((c, i) => {
            const total = c.getProdutosConsumidos.length + c.getServicosConsumidos.length
            console.log(`${i + 1}. ${c.nome} (${total} itens)`)
        })
    }

    public clientesPorGenero(): void {
        const generos = ["M", "F", "O"]

        console.log("\nClientes por gênero:")
        generos.forEach(g => {
            console.log(`\nGênero ${g}:`)
            this.clientes
                .filter(c => c.getGenero.toUpperCase() === g)
                .forEach(c => console.log(`- ${c.nome}`))
        })
    }

    public maisConsumidos(): void {
        const contador: Record<string, number> = {}

        this.clientes.forEach(c => {
            c.getProdutosConsumidos.forEach(p => {
                contador[p.nome] = (contador[p.nome] || 0) + 1
            })
            c.getServicosConsumidos.forEach(s => {
                contador[s.nome] = (contador[s.nome] || 0) + 1
            })
        })

        const ordenado = (Object.entries(contador) as [string, number][]).sort((a, b) => b[1] - a[1])

        console.log("\nProdutos/Serviços mais consumidos:")
        ordenado.forEach(([nome, qtd], i) => {
            console.log(`${i + 1}. ${nome} (${qtd}x)`)
        })
    }

    public maisConsumidosPorGenero(): void {
        const generos = ["M", "F", "O"]

        console.log("\nMais consumidos por gênero:")
        generos.forEach(g => {
            const contador: Record<string, number> = {}

            this.clientes
                .filter(c => c.getGenero.toUpperCase() === g)
                .forEach(c => {
                    c.getProdutosConsumidos.forEach(p => {
                        contador[p.nome] = (contador[p.nome] || 0) + 1
                    })
                    c.getServicosConsumidos.forEach(s => {
                        contador[s.nome] = (contador[s.nome] || 0) + 1
                    })
                })

            const ordenado = (Object.entries(contador) as [string, number][]).sort((a, b) => b[1] - a[1])

            console.log(`\nGênero ${g}:`)
            ordenado.forEach(([nome, qtd], i) => {
                console.log(`${i + 1}. ${nome} (${qtd}x)`)
            })
        })
    }

    public top10MenosConsumidores(): void {
        const ordenado = [...this.clientes].sort((a, b) =>
            (a.getProdutosConsumidos.length + a.getServicosConsumidos.length)
            - (b.getProdutosConsumidos.length + b.getServicosConsumidos.length)
        )

        console.log("\nTop 10 clientes que menos consumiram:")
        ordenado.slice(0, 10).forEach((c, i) => {
            const total = c.getProdutosConsumidos.length + c.getServicosConsumidos.length
            console.log(`${i + 1}. ${c.nome} (${total} itens)`)
        })
    }

    public top5ValorConsumido(): void {
        // Supondo valor fixo: produto = 10, serviço = 20
        const valorProduto = 10
        const valorServico = 20

        const ordenado = [...this.clientes].map(c => ({
            cliente: c,
            valor: c.getProdutosConsumidos.length * valorProduto + c.getServicosConsumidos.length * valorServico
        })).sort((a, b) => b.valor - a.valor)

        console.log("\nTop 5 clientes por valor consumido:")
        ordenado.slice(0, 5).forEach((c, i) => {
            console.log(`${i + 1}. ${c.cliente.nome} - R$${c.valor},00`)
        })
    }
}
