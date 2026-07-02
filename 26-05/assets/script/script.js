const btn = document.getElementById("gerar-piada")
const p = document.getElementById("piada")

btn.addEventListener("click", async () => {
    try {
        // TENTE pegar os dados da api
        const response = await fetch("https://api.chucknorris.io/jokes/random")

        const data = await response.json() // converte a resposta para um objeto javascript, assim nosso código pode ler ela

        p.textContent = data.value
    } catch (erro) { // Se der ruim, me diz o pq n deu bom
        console.log("Deu ruim, porque: " + erro)        
    }

})

/* const btn = document.getElementById("buscar-cep")
const inputCep = document.getElementById("cep")

const rua = document.getElementById("rua")
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("cidade")
const estado = document.getElementById("estado")

btn.addEventListener("click", async () => {

    const cep = inputCep.value.replace("-", "")

    try {
        const response = await fetch(https://viacep.com.br/ws/${cep}/json/)

        const data = await response.json()

        if (data.erro) {
            rua.value = "num achou o cep"
            bairro.value = ""
            cidade.value = ""
            estado.value = ""
            return
        }

        rua.value = data.logradouro
        bairro.value = data.bairro
        cidade.value = data.localidade
        estado.value = data.uf

    } catch (erro) {
        console.log("Deu ruim, porque: " + erro)

        rua.value = "num deu pra buscar o CEP"
        bairro.value = ""
        cidade.value = ""
        estado.value = ""
    }

}) */