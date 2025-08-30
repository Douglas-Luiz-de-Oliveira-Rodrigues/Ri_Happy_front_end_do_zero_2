// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

const cor = gets("red", "pink", "green");
const tamanhoFonte = gets("16px", "20px", "18px");
const nomeBrinquedo = gets("Carrinho de Controle Remoto", "Boneca", "Lego");

// TODO: Construa a tag <h1> com o estilo CSS, completando com as variáveis representando cada estilização
const resultado = `<h1 style="color: ${cor}; font-size: ${tamanhoFonte};">${nomeBrinquedo}</h1>`;

// Exibindo o resultado no console
print(resultado);