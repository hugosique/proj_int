class Cliente {
    constructor() {
        this.clientes = localStorage.getItem('tbClientes') === null
        ? []
        : JSON.parse(localStorage.getItem('tbClientes'))
    }

    salva(cliente) {
        //registro esta sendo editado?
        if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
            this.apaga(cliente.codigo)
        }

        this.clientes.push(cliente) //adiciona um novo elemento ao array(matriz)
        localStorage.setItem('tbClientes', JSON.stringify(this.clientes))
        alert('Dados salvos!')
    }

    apaga(codigo) {
        let index = this.clientes.findIndex(cliente => cliente.codigo == codigo)
        this.clientes.splice(index, 1)

        localStorage.setItem('tbCliente', JSON.stringify(this.clientes))
        cliente.atualiza()
    }

    edita(cliente) {
        document.getElementById('codigo').setAttribute('disabled', 'disabled')
        document.getElementById('codigo').value = cliente.codigo
        document.getElementById('nomeRazao').value = cliente.nomeRazao
        document.getElementById('rgie').value = cliente.rgie
        document.getElementById('endereco').value = cliente.endereco
        document.getElementById('bairro').value = cliente.bairro
        document.getElementById('cidade').value = cliente.cidade
        document.getElementById('cep').value = cliente.cep
        document.getElementById('uf').value = cliente.uf
        document.getElementById('telefone').value= cliente.telefone
        document.getElementById('celular').value = cliente.celular
        document.getElementById('cpf').value = cliente.cpf
        document.getElementById('nomeFantasia').value = cliente.nomeFantasia
        document.getElementById('contact').value = cliente.contact
        document.getElementById('email').value = cliente.email
        document.getElementById('nascimento').value = cliente.nascimento
        document.getElementById('obs').value = cliente.obs
    }

    lista() {
        const listagem = this.clientes.map((cliente) => (
            `<tr>
            <td>${cliente.codigo}</td>
            <td>${cliente.nomeRazao}</td>
            <td>${cliente.rgie}</td>
            <td>${cliente.endereco}</td>
            <td>${cliente.bairro}</td>
            <td>${cliente.cidade}</td>
            <td>${cliente.cep}</td>
            <td>${cliente.uf}</td>
            <td>${cliente.telefone}</td>
            <td>${cliente.celular}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.nomeFantasia}</td>
            <td>${cliente.contact}</td>
            <td>${cliente.email}</td>
            <td>${cliente.nascimento}</td>
            <td>${cliente.obs}</td>
            <td>
                <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>✏️</button>
                <button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>🗑️</button>
            </td>
            </tr>
            `
        ))
        return (`<table border='1' class='paleBlueRows'>
        <caption>Dados cadastrados:</caption>
        <thead>
            <th>Código</th>
            <th>Nome/Razão Social</th>
            <th>RG/IE</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>CEP</th>
            <th>UF</th>
            <th>Telefone</th>
            <th>Celular</th>
            <th>CPF/CNPJ</th>
            <th>Nome fantasia</th>
            <th>Contato</th>
            <th>E-mail pessoal</th>
            <th>Nascimento</th>
            <th>Observações</th>
            <th>Opções</th>
            </thead>
            <tbody>${listagem}</tbody>
            </table>
        `)
    }
    atualiza() {
        document.getElementById('listagem').innerHTML = cliente.lista()
    }
}
//Instanciamos um novo objeto
const cliente = new Cliente()
//tratando botão salvar
document.getElementById('salvar').onclick = function () {
    const registro = {
        codigo: document.getElementById('codigo').value,
        nomeRazao: document.getElementById('nomeRazao').value,
        rgie: document.getElementById('rgie').value,
        endereco: document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        cep: document.getElementById('cep').value,
        uf: document.getElementById('uf').value,
        telefone: document.getElementById('telefone').value,
        celular: document.getElementById('celular').value,
        cpf: document.getElementById('cpf').value,
        nomeFantasia: document.getElementById('nomeFantasia').value,
        contact: document.getElementById('contact').value,
        email: document.getElementById('email').value,
        nascimento: document.getElementById('nascimento').value,
        obs: document.getElementById('obs').value,
    }
    cliente.salva(registro)
}
window.onload = function() {
    cliente.atualiza()
}
//tratamos a alteração do campo "utilizado"
/*document.getElementById('utilizado').onchange = function () {
    let limite = document.getElementById('limite').value
    let utilizado = document.getElementById('utilizado').value
    let saldo = limite - utilizado
    document.getElementById('saldo').value = saldo.toFixed(2)
}*/