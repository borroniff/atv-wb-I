import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ConsumoCliente from "../negocio/consumoCliente";
import ListagemClientes from "../negocio/listagemClientes";
import ListagensEspeciais from "../negocio/listagensEspeciais";
import AtualizarCliente from "../negocio/atualizarCliente";
import ExcluirCliente from "../negocio/excluirCliente";
import AtualizarProduto from "../negocio/atualizarProduto";
import ExcluirProduto from "../negocio/excluirProduto";
import AtualizarServico from "../negocio/atualizarServico";
import ExcluirServico from "../negocio/excluirServico";
import MockDados from "../negocio/mockDados";


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
    console.log("7 - Atualizar cliente");
    console.log("8 - Excluir cliente");
    console.log("9 - Atualizar produto");
    console.log("10 - Excluir produto");
    console.log("11 - Atualizar serviço");
    console.log("12 - Excluir serviço");
    console.log("13 - Gerar dados de teste (mock)");
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
        case 7:
            new AtualizarCliente(empresa.getClientes).atualizar();
            break;
        case 8:
            new ExcluirCliente(empresa.getClientes).excluir();
            break;
        case 9:
            new AtualizarProduto(empresa.getProdutos).atualizar();
            break;
        case 10:
            new ExcluirProduto(empresa.getProdutos).excluir();
            break;
        case 11:
            new AtualizarServico(empresa.getServicos).atualizar();
            break;
        case 12:
            new ExcluirServico(empresa.getServicos).excluir();
            break;
        case 13:
            new MockDados(empresa).gerar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break
        default:
            console.log(`Operação não entendida :(`)
    }
}
