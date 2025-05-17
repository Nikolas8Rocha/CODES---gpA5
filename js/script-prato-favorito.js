document.addEventListener('DOMContentLoaded', function(){
    EstrelaImg = document.querySelector(".fav")

    frango = localStorage.getItem("frango_grelhada_selecionada");
    tilapia = localStorage.getItem("tilapia_grelhada_selecionada");
    //titulo_prato = localStorage

    //colocar um and com titulo prato dentro do if

    EstrelaImg.addEventListener("click", function(event){
        if (EstrelaImg.src.includes("estrela_laranja.png")){
            EstrelaImg.src = "Imagens/estrela_cinza.png"
        }
        else{
            EstrelaImg.src = "Imagens/estrela_laranja.png"
        }

    })
    iconeEstrela = document.querySelector('.estrela');
    iconeEstrela.style.filter = 'invert(0%)'; 


    body = document.querySelector("body");
    body.style.backgroundColor = "transparent"; 
    body.style.backgroundImage = "url(Imagens/parede_branca.png)";
    body.style.backgroundPosition = "center";

})