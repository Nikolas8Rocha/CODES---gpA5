document.addEventListener('DOMContentLoaded', function(){

    iconeDispensa = document.querySelector('.dispensa');
    iconeDispensa.style.filter = 'invert(0%)';
    
    titulo_item = document.querySelector("#titulo-item");

    clicado = localStorage.getItem("ingrediente");

    titulo_item.innerHTML = "Item: " + clicado;

    dic_imagens = {"Abacate":"/projeto/Imagens/abacates.png", "Abacaxi":"/projeto/Imagens/abacaxi.png",
        "Abóbora":"/projeto/Imagens/abobora.png","Alcatra":"/projeto/Imagens/alcatra.png",
        "Anchova":"/projeto/Imagens/anchova.png","Arroz Branco":"/projeto/Imagens/arroz_branco.png"
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

    //parte que faz o item ser adicionado na dispensa
    //localStorage.setItem("finalizado", "Adicionar");
    listaInformacoes = document.querySelectorAll(".input-item");


    adicionar = document.querySelector(".a-adicionar");
    //console.log(adicionar);
    aux = 1;

    adicionar.addEventListener("click", function(evento){
        //console.log(evento);
        evento.preventDefault();
        if (adicionar.querySelector(".adi").innerHTML === "Adicionar"){
            adicionar.style.backgroundColor = '#98c379';
            adicionar.querySelector(".adi").innerHTML = "Adicionado"
            adicionar.querySelector(".adi").style.color = '#222222';
            localStorage.setItem("finalizado", "Adicionado");
        }
        else{
            adicionar.style.backgroundColor = '#fff6e5';
            adicionar.querySelector(".adi").innerHTML = "Adicionar";
            adicionar.querySelector(".adi").style.color = '#eb8b47';
            //localStorage.setItem("finalizado", "Adicionar");
        }
        
        dadosInputs = {};
        listaInformacoes.forEach(function(input){
            chave = input.placeholder;
            dadosInputs[chave] = input.value;
        })
        if (dadosInputs["0"] === "" || dadosInputs['kg']=== "" || dadosInputs["data"]===""){
            adicionar.style.backgroundColor = '#f5761b';
            adicionar.querySelector(".adi").innerHTML = "Incompleto!";
            adicionar.querySelector(".adi").style.color = '#222222';
            localStorage.setItem("finalizado", "Incompleto");            

        }


    })
    
    
})