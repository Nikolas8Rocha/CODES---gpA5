document.addEventListener('DOMContentLoaded', function(){

    iconeDispensa = document.querySelector('.dispensa');
    iconeDispensa.style.filter = 'invert(0%)';

    botao_a = document.querySelectorAll(".a-lista")
    //console.log(botao_a[0])
    
    for (item of botao_a){
        item.addEventListener("click", function(evento){
            evento.preventDefault();

            
            item_clicado = evento.currentTarget;
            //console.log(item_clicado);
            localStorage.setItem("ingrediente", item_clicado.querySelector(".texto-lista").innerHTML);
            window.location.href = "/projeto/Item_a_ser_adicionado.html";
        })
    
        
    }
})