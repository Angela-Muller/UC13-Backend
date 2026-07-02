const cep = document.getElementById("cep")

const cid = document.getElementById("cid")
const rua = document.getElementById("rua")
const bai = document.getElementById("bai")
const uf = document.getElementById("uf")

cep.addEventListener("change", async () => {
   

    try {

        
        const cepLimpo = cep.value.replace("-", "")

        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)

        const data = await response.json() 
        
        cid.value = data.localidade
        rua.value = data.logradouro
        bai.value = data.bairro
        uf.value = data.estado



    } catch (erro) {
        console.log("Deu ruim, porque: " + erro)        
    }

})

