import Produto from "../modelo/produto";
import Entrada from "../io/entrada";

export default class AtualizarProduto {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        this.produtos.forEach((p, i) => console.log(`${i + 1} - ${p.nome}`));
        let index = this.entrada.receberNumero("Escolha o produto a atualizar (número): ") - 1;

        if (this.produtos[index]) {
            let novoNome = this.entrada.receberTexto("Novo nome do produto: ");
            this.produtos[index].nome = novoNome;
            console.log("Produto atualizado.");
        } else {
            console.log("Produto não encontrado.");
        }
    }
}
