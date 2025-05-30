import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class ConsumoCliente {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public consumir(): void {
        console.log("\nRegistro de consumo");
        let cpf = this.entrada.receberTexto("Digite o CPF do cliente: ");
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpf);

        if (!cliente) {
            console.log("Cliente não encontrado.");
            return;
        }

        let tipo = this.entrada.receberNumero("1 - Produto | 2 - Serviço: ");
        if (tipo === 1) {
            this.produtos.forEach((p, i) => console.log(`${i + 1} - ${p.nome}`));
            let idx = this.entrada.receberNumero("Escolha um produto (número): ") - 1;
            if (this.produtos[idx]) {
                cliente.consumirProduto(this.produtos[idx]);
                console.log("Produto registrado com sucesso!");
            } else {
                console.log("Produto inválido.");
            }
        } else if (tipo === 2) {
            this.servicos.forEach((s, i) => console.log(`${i + 1} - ${s.nome}`));
            let idx = this.entrada.receberNumero("Escolha um serviço (número): ") - 1;
            if (this.servicos[idx]) {
                cliente.consumirServico(this.servicos[idx]);
                console.log("Serviço registrado com sucesso!");
            } else {
                console.log("Serviço inválido.");
            }
        } else {
            console.log("Opção inválida.");
        }

        console.log();
    }
}
