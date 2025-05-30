import Produto from "../modelo/produto";
import Entrada from "../io/entrada";

export default class ExcluirProduto {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        this.produtos.forEach((p, i) => console.log(`${i + 1} - ${p.nome}`));
        let index = this.entrada.receberNumero("Escolha o produto a excluir (número): ") - 1;

        if (this.produtos[index]) {
            this.produtos.splice(index, 1);
            console.log("Produto excluído.");
        } else {
            console.log("Produto não encontrado.");
        }
    }
}
