class Produto {
    constructor() {
        this.produtos = localStorage.getItem('tbProdutos') === null
        ? []
        : JSON.parse(localStorage.getItem('tbProdutos'))
    }

    salva(prod) {
        //registro esta sendo editado?
        if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
            this.apaga(prod.codigo)
        }

        this.produtos.push(prod) //adiciona um novo elemento ao array(matriz)
        localStorage.setItem('tbProdutos', JSON.stringify(this.produtos))
        alert('Dados salvos!')
    }

    apaga(codigo) {
        let index = this.produtos.findIndex(prod => prod.codigo == codigo)
        this.produtos.splice(index, 1)

        localStorage.setItem('tbProdutos', JSON.stringify(this.produtos))
        prod.atualiza()
    }

    edita(prod) {
        document.getElementById('codigo').setAttribute('disabled', 'disabled')
        document.getElementById('codigo').value = prod.codigo
        document.getElementById('nome').value = prod.nome
        document.getElementById('precoCusto').value = prod.precoCusto
        document.getElementById('lucro').value = prod.lucro
        document.getElementById('precoVenda').value = prod.precoVenda
        document.getElementById('icms').value = prod.icms
        document.getElementById('ncm').value = prod.ncm
        document.getElementById('unMedida').value = prod.unMedida
        document.getElementById('marca').value= prod.marca
        document.getElementById('categoria').value = prod.categoria
        document.getElementById('origem').value = prod.origem
        document.getElementById('codigoBarras').value = prod.codigoBarras
    }

    lista() {
        const listagem = this.produtos.map((prod) => (
            `<tr>
            <td>${prod.codigo}</td>
            <td>${prod.nome}</td>
            <td>${prod.precoCusto}</td>
            <td>${prod.lucro}</td>
            <td>${prod.precoVenda}</td>
            <td>${prod.icms}</td>
            <td>${prod.ncm}</td>
            <td>${prod.unMedida}</td>
            <td>${prod.marca}</td>
            <td>${prod.categoria}</td>
            <td>${prod.origem}</td>
            <td>${prod.codigoBarras}</td>
            <td>
                <button id='editar' onClick='prod.edita(${JSON.stringify(prod)})'>✏️</button>
                <button id='apagar' onClick='prod.apaga(${prod.codigo})'>🗑️</button>
            </td>
            </tr>
            `
        ))
        return (`<table border='1' class='paleBlueRows'>
        <caption>Dados cadastrados:</caption>
        <thead>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço de Custo</th>
            <th>Lucro %</th>
            <th>Preço de Venda</th>
            <th>ICMS</th>
            <th>NCM - NFE</th>
            <th>Unidade de medida</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Origem</th>
            <th>Código de barras</th>
            <th>Opções</th>
            </thead>
            <tbody>${listagem}</tbody>
            </table>
        `)
    }
    atualiza() {
        document.getElementById('listagem').innerHTML = prod.lista()
    }
}
//Instanciamos um novo objeto
const prod = new Produto()
//tratando botão salvar
document.getElementById('salvar').onclick = function () {
    const registro = {
        codigo: document.getElementById('codigo').value,
        nome: document.getElementById('nome').value,
        precoCusto: document.getElementById('precoCusto').value,
        lucro: document.getElementById('lucro').value,
        precoVenda: document.getElementById('precoVenda').value,
        icms: document.getElementById('icms').value,
        ncm: document.getElementById('ncm').value,
        unMedida: document.getElementById('unMedida').value,
        marca: document.getElementById('marca').value,
        categoria: document.getElementById('categoria').value,
        origem: document.getElementById('origem').value,
        codigoBarras: document.getElementById('codigoBarras').value,
    }
    prod.salva(registro)
}
window.onload = function() {
    prod.atualiza()
}
//tratamos a alteração do campo "utilizado"
document.getElementById('precoVenda').onchange = function () {
    let pcus = document.getElementById('precoCusto').value
    let pven = document.getElementById('precoVenda').value
    let tarifaIcms = (pven * 18) /100
    let lucroCal = pven - pcus - tarifaIcms
    let lucroReal = (lucroCal / pcus) * 100 
    document.getElementById('lucro').value = lucroReal.toFixed(2)
    //calculo icms
    document.getElementById('icms').value = tarifaIcms.toFixed(1)
}