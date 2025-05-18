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

    if (clicado != "Arroz Branco" && clicado != "Abacate"){
        seta = document.querySelector(".a-seta");
        seta.style.filter = 'invert(100%)';
    }

    adicionar = document.querySelector(".a-adicionar");
    console.log(adicionar);
    adicionar.addEventListener("click", function(evento){
        //console.log(evento);
        evento.preventDefault();
        if (adicionar.style.backgroundColor === 'rgb(255, 246, 229)'){
            adicionar.style.backgroundColor = '#98c379';
            adicionar.querySelector(".adi").innerHTML = "Adicionado"
            adicionar.querySelector(".adi").style.color = '#222222';
        }
        else{
            adicionar.style.backgroundColor = '#fff6e5';
            adicionar.querySelector(".adi").innerHTML = "Adicionar"
            adicionar.querySelector(".adi").style.color = '#eb8b47';
        }
        

    })
    
    
})