import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ConsumoCliente from "../negocio/consumoCliente";
import ListagemClientes from "../negocio/listagemClientes";
import ListagensEspeciais from "../negocio/listagensEspeciais";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Cadastrar serviço`);
    console.log(`5 - Registrar consumo de produto/serviço`);
    console.log(`6 - Listagens especiais`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            new CadastroCliente(empresa.getClientes).cadastrar()
            break
        case 2:
            new ListagemClientes(empresa.getClientes).listar()
            break
        case 3:
            new CadastroProduto(empresa.getProdutos).cadastrar()
            break
        case 4:
            new CadastroServico(empresa.getServicos).cadastrar()
            break
        case 5:
            new ConsumoCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos).consumir()
            break
        case 6:
            const listagens = new ListagensEspeciais(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listagens.top10MaisConsumidores();
            listagens.clientesPorGenero();
            listagens.maisConsumidos();
            listagens.maisConsumidosPorGenero();
            listagens.top10MenosConsumidores();
            listagens.top5ValorConsumido();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break
        default:
            console.log(`Operação não entendida :(`)
    }
}
