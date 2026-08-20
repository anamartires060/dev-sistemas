const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", async () => {

    const cep = document.getElementById("cep").value.replace(/\D/g, "");

    if (cep.length !== 8) {
        resultado.innerHTML = "❌ CEP inválido. Digite um CEP com 8 números.";
        return;
    }

    resultado.innerHTML = "🔎 Consultando CEP...";

    try {

        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        const dados = await resposta.json();

        if (dados.erro) {
            resultado.innerHTML = "❌ CEP não encontrado ou não localizado.";
            return;
        }

        resultado.innerHTML = `
            <h2>📍 Endereço encontrado</h2>

            <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.localidade}</p>
            <p><strong>UF:</strong> ${dados.uf}</p>
        `;

    } catch (erro) {

        resultado.innerHTML =
            "⚠️ Não foi possível realizar a consulta. Tente novamente.";

    }
});