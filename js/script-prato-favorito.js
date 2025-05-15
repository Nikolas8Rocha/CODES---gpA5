document.addEventListener('DOMContentLoaded', function(){
    EstrelaImg = document.querySelector(".fav")
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




})