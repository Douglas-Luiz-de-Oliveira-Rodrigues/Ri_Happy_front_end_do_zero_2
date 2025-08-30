// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

// Capturando os nomes dos brinquedos
let brinquedo1 = gets("Boneca", "Carrinho", "Lego");
let brinquedo2 = gets("Bola", "Lego", "Pipa");
let brinquedo3 = gets("Dinossauro", "Patinete","Ursinho");

// Imprimindo a lista
print("<ul>");
print(`<li>${brinquedo1}</li>`);
// TODO: Preencha o código abaixo com as variáveis que representam os nomes dos brinquedos
print(`<li>${brinquedo2}</li>`);
print(`<li>${brinquedo3}</li>`);
print("</ul>");