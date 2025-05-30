import Empresa from "../modelo/empresa"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"

export default class MockDados {
    private empresa: Empresa

    constructor(empresa: Empresa) {
        this.empresa = empresa
    }

    public gerar(): void {
        // Produtos
        for (let i = 1; i <= 20; i++) {
            const produto = new Produto()
            produto.nome = `Produto ${i}`
            this.empresa.getProdutos.push(produto)
        }

        // Serviços
        for (let i = 1; i <= 20; i++) {
            const servico = new Servico()
            servico.nome = `Serviço ${i}`
            this.empresa.getServicos.push(servico)
        }

        // Clientes
        for (let i = 1; i <= 30; i++) {
            const cpf = new CPF(`0000000000${i}`, new Date(2000, 1, 1))
            const genero = i % 3 === 0 ? 'M' : i % 3 === 1 ? 'F' : 'O'
            const cliente = new Cliente(`Cliente ${i}`, `ClienteSocial ${i}`, cpf, genero)

            // Consumo simulado
            const produtos = this.empresa.getProdutos
            const servicos = this.empresa.getServicos

            for (let j = 0; j < Math.floor(Math.random() * 5); j++) {
                cliente.consumirProduto(produtos[Math.floor(Math.random() * produtos.length)])
            }

            for (let j = 0; j < Math.floor(Math.random() * 5); j++) {
                cliente.consumirServico(servicos[Math.floor(Math.random() * servicos.length)])
            }

            this.empresa.getClientes.push(cliente)
        }

        console.log("Mock de dados gerado com sucesso!\n")
    }
}
