import Servico from "../modelo/servico";
import Entrada from "../io/entrada";

export default class AtualizarServico {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        this.servicos.forEach((s, i) => console.log(`${i + 1} - ${s.nome}`));
        let index = this.entrada.receberNumero("Escolha o serviço a atualizar (número): ") - 1;

        if (this.servicos[index]) {
            let novoNome = this.entrada.receberTexto("Novo nome do serviço: ");
            this.servicos[index].nome = novoNome;
            console.log("Serviço atualizado.");
        } else {
            console.log("Serviço não encontrado.");
        }
    }
}
