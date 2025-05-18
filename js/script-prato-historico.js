document.addEventListener('DOMContentLoaded', function(){
    titulo_pagina = document.querySelector(".titulo-historico");
    titulo_pagina.innerHTML = localStorage.getItem("titulo-prato");
    //console.log(titulo_pagina)
    
    tilapia = localStorage.getItem("tilapia_grelhada_selecionada");
    frango = localStorage.getItem("frango_grelhada_selecionada")

    //icone preto no footer
    iconeRelogio = document.querySelector('.relogio');
    iconeRelogio.style.filter = 'invert(0%)';

    lista_historico = document.querySelectorAll(".section-historico");
    estrela = document.querySelector(".fav")

    //tilapia = document.querySelector("#Tilapia_grelhada")
    //frango = document.querySelector("#Frango_grelhado")






    estrela.addEventListener("click", function(evento){

        
        
        if (estrela.src.includes("estrela_cinza.png")){
            estrela.src = "Imagens/estrela_laranja.png"
            if (titulo_pagina.innerHTML == "Filé de Tilápia Grelhada"){
                localStorage.setItem("tilapia_grelhada_selecionada", "true");
            }
            else if (titulo_pagina.innerHTML == "Filé de Frango Grelhado"){
                localStorage.setItem("frango_grelhada_selecionada", "true");
            }


        }
        else{
            estrela.src = "Imagens/estrela_cinza.png"
            if (titulo_pagina.innerHTML == "Filé de Tilápia Grelhada"){
                localStorage.setItem("tilapia_grelhada_selecionada", "false");
            }
            else if (titulo_pagina.innerHTML == "Filé de Frango Grelhado"){
                localStorage.setItem("frango_grelhada_selecionada", "false");
            }
        }


    })

   
    

})