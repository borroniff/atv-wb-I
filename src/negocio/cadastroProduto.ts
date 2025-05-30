import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nCadastro de novo produto`);
        let nome = this.entrada.receberTexto(`Nome do produto: `);
        let produto = new Produto();
        produto.nome = nome;
        this.produtos.push(produto);
        console.log(`Produto cadastrado com sucesso!\n`);
    }
}
