document.addEventListener('DOMContentLoaded', function(){
    vericacaoF = localStorage.getItem("frango_grelhada_selecionada")
    vericacaoT = localStorage.getItem("tilapia_grelhada_selecionada")

    //verifica se já existe, se não existir ele cria
    if (vericacaoF === null){
        localStorage.setItem("frango_grelhada_selecionada", "false");
    }
    if (vericacaoT === null){
        localStorage.setItem("tilapia_grelhada_selecionada", "false");
    }
    iconeRelogio = document.querySelector('.relogio');
    iconeRelogio.style.filter = 'invert(0%)'; 

    lista_historico = document.querySelectorAll(".section-historico");

    for(um_item of lista_historico){
        um_item.addEventListener("click", function(evento){
            item_clicado = evento.currentTarget;
            receita = item_clicado.innerHTML;
            localStorage.setItem("titulo-prato", item_clicado.querySelector("h4").innerHTML);
            localStorage.setItem("prato", receita);
            
            
        })
    }


})