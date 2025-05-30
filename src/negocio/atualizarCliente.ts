import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";

export default class AtualizarCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        let cpfBusca = this.entrada.receberTexto("Informe o CPF do cliente a ser atualizado: ");
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpfBusca);

        if (!cliente) {
            console.log("Cliente não encontrado.");
            return;
        }

        let novoNome = this.entrada.receberTexto("Novo nome: ");
        let novoNomeSocial = this.entrada.receberTexto("Novo nome social: ");
        let novoGenero = this.entrada.receberTexto("Novo gênero (M/F/O): ");

        cliente.nome = novoNome;
        cliente.nomeSocial = novoNomeSocial;
        cliente.genero = novoGenero;

        console.log("Cliente atualizado com sucesso.");
    }
}
