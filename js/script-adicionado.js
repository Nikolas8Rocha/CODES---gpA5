document.addEventListener('DOMContentLoaded', function(){

    iconeDispensa = document.querySelector('.dispensa');
    iconeDispensa.style.filter = 'invert(0%)';
    
    titulo_item = document.querySelector("#titulo-item");

    clicado = localStorage.getItem("ingrediente");

    titulo_item.innerHTML = "Item: " + clicado;

    dic_imagens = {"Abacate":"/Imagens/abacates.png", "Abacaxi":"/Imagens/abacaxi.png",
        "Abóbora":"/Imagens/abobora.png","Alcatra":"/Imagens/alcatra.png",
        "Anchova":"/Imagens/anchova.png","Arroz Branco":"Imagens/arroz_branco.png"
    }


    body = document.querySelector("body");
    body.style.backgroundImage = "transparent"
    body.style.backgroundImage = `url("${dic_imagens[clicado]}")`;
    body.style.backgroundSize = "cover"; 
    body.style.backgroundRepeat = "no-repeat"; 
    body.style.backgroundPosition = "center";

    seta = document.querySelector(".a-seta");
    seta.style.filter = 'invert(100%)';

    adicionar = document.querySelector(".a-adicionar");
    adicionar.addEventListener("click", function(evento){
        evento.preventDefault();
        adicionar.backgroundColor = '#98c379';

    })
    
    
})