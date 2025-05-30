import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nCadastro de novo serviço`);
        let nome = this.entrada.receberTexto(`Nome do serviço: `);
        let servico = new Servico();
        servico.nome = nome;
        this.servicos.push(servico);
        console.log(`Serviço cadastrado com sucesso!\n`);
    }
}
