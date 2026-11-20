const corpoTabela = document.getElementById('corpoTabela')
const formulario = document.getElementById('formulario')

const lugares = [
    {nome: 'Cristo Redentor', local: 'Rio de Janeiro'},
    {nome: 'Torre Eiffel', local: 'Paris'},
    {nome: 'Coliseu', local: 'Roma'},
    {nome: 'Machu Picchu', local:'Peru'}
]

function exibir(){
    corpoTabela.innerHTML = ''

    for (lugar of lugares){
        corpoTabela.innerHTML +=`
          <tr>
            <td>${lugar.nome}</td>
            <td>${lugar.local}</td>
          </tr>
        `
        
    }
}

exibir()



formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    const valorNome = document.getElementById("campoNome").value 
    const valorLocal = document.getElementById("campoLocal").value

    const x = {nome:valorNome, local:valorLocal}

    lugares.push(x)

    exibir()
    

})
