import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";

export default class ExcluirCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public excluir(): void {
        let cpf = this.entrada.receberTexto("Informe o CPF do cliente a ser excluído: ");
        let index = this.clientes.findIndex(c => c.getCpf.getValor === cpf);

        if (index >= 0) {
            this.clientes.splice(index, 1);
            console.log("Cliente excluído com sucesso.");
        } else {
            console.log("Cliente não encontrado.");
        }
    }
}
