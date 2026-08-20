const cidade = document.getElementById("cidade");
const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", async () => {

    // Pega a cidade e as coordenadas selecionadas
    const cidadeSelecionada = cidade.options[cidade.selectedIndex].text;
    const coordenadas = cidade.value.split(",");

    const lat = coordenadas[0];
    const lon = coordenadas[1];

    // Monta a URL da API
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    resultado.innerHTML = "🌍 Consultando clima...";

    try {

        // Faz a requisição
        const resposta = await fetch(url);

        // Converte a resposta para JSON
        const data = await resposta.json();

        // Pega a temperatura
        const temperatura = data.current_weather.temperature;

        // Escolhe o ícone de acordo com a temperatura
        let icone;

        if (temperatura < 15) {
            icone = "❄️";
        } else if (temperatura < 25) {
            icone = "🌤️";
        } else {
            icone = "☀️";
        }

        // Muda a cor do fundo de acordo com a temperatura
        if (temperatura < 15) {
            document.body.style.background =
                "linear-gradient(180deg, #2196f3, #90caf9)";
        } else if (temperatura < 25) {
            document.body.style.background =
                "linear-gradient(180deg, #78909c, #cfd8dc)";
        } else {
            document.body.style.background =
                "linear-gradient(180deg, #ff9800, #f44336)";
        }

        // Exibe as informações
        resultado.innerHTML = `
            <h2>${cidadeSelecionada}</h2>
            <div style="font-size: 60px;">${icone}</div>
            <h3>${temperatura} °C</h3>
        `;

    } catch (erro) {

        resultado.innerHTML =
            "❌ Não foi possível consultar os dados do clima.";

    }
});