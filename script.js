
    async function buscarcidade() {
      const cidade = document.getElementById("cidade").value.trim();
      const resultado = document.getElementById("resultado");
      const botao = document.getElementById("btnBuscar")
    
      if (!cidade) {
        resultado.innerText = "Digite uma cidade!";
        return;
      }
    
      try {
        resultado.innerText = "Carregando...";
        botao.disabled = true;
    
        const res = await fetch(`https://wttr.in/${cidade}?format=j1`);
    
        if (!res.ok) {
          throw new Error("Erro na API");
        }
    
        const data = await res.json();
    
        let temp = data.current_condition[0].temp_C;
        let clima = data.current_condition[0].weatherDesc[0].value;
    
        resultado.innerText = `Clima em ${cidade}: ${temp}°C, ${clima}`;
    
      } catch (error) {
        resultado.innerText = "Erro: " + error.message;
    
      } finally {
        botao.disabled = false;
      }
    }