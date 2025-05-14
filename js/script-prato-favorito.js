document.addEventListener('DOMContentLoaded', function(){
    EstrelaImg = document.querySelector(".fav")
    EstrelaImg.addEventListener("click", function(event){
        if (EstrelaImg.src.includes("estrela_cinza.png")){
            EstrelaImg.src = "Imagens/estrela_laranja.png"
        }
        else{
            EstrelaImg.src = "Imagens/estrela_cinza.png"
        }

    })




})