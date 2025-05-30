import Servico from "../modelo/servico";
import Entrada from "../io/entrada";

export default class ExcluirServico {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        this.servicos.forEach((s, i) => console.log(`${i + 1} - ${s.nome}`));
        let index = this.entrada.receberNumero("Escolha o serviço a excluir (número): ") - 1;

        if (this.servicos[index]) {
            this.servicos.splice(index, 1);
            console.log("Serviço excluído.");
        } else {
            console.log("Serviço não encontrado.");
        }
    }
}
