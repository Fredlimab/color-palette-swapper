//Adiciona evento ao botão
document.getElementById("button").addEventListener("click",

//cria uma function para:
function mudarPaleta(){

    //pegar uma paleta de cor através do id de forma aleatória
    const pegaPaleta = document.getElementById('a'+`${Math.floor(Math.random() * 100 )}`);

    //armazenar o código Hexadecimal
    const hexCode = pegaPaleta.children[0].getElementsByTagName('span');

    //exibir código Hexadecimal em forma de texto
    document.getElementById("main-text").innerText = hexCode[0].innerText;

    document.getElementById("head-text").innerText = hexCode[1].innerText;

    document.getElementById("side-text").innerText = hexCode[2].innerText;

    document.getElementById("foot-text").innerText = hexCode[3].innerText;

    //alterar o fundo da div main com a primeira cor da paleta
    document.getElementById("main").style = hexCode[0].parentElement.getAttribute('style');

    //alterar o fundo da div header com a segunda cor da paleta
    document.getElementById("header").style = hexCode[1].parentElement.getAttribute('style');

    //alterar o fundo da div side bar com a terceira cor da paleta
    document.getElementById("sidebar").style = hexCode[2].parentElement.getAttribute('style');

    //alterar o fundo da div footer com a quarta cor da paleta
    document.getElementById("footer").style = hexCode[3].parentElement.getAttribute('style');

    //console.log da funçao
    console.log(hexCode);
});

//criar uma function para rotacionar as cores entre as áreas