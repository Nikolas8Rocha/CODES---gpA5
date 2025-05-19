document.addEventListener('DOMContentLoaded', function(){
    adicionados = document.querySelectorAll(".listra-filho")
    mudacorTela = document.querySelectorAll(".section-lista")
    //console.log(adicionados)
    adicionados[0].addEventListener("mouseover", function(event){
        mudacorTela[0].style.backgroundColor = "#98c379"
    })
    adicionados[0].addEventListener("mouseout", function(event){
        mudacorTela[0].style.backgroundColor = "#fff6e5"
    })
    adicionados[1].addEventListener("mouseover", function(event){
        mudacorTela[1].style.backgroundColor = "#98c379"
    })
    adicionados[1].addEventListener("mouseout", function(event){
        mudacorTela[1].style.backgroundColor = "#fff6e5"
    })            
    adicionados[2].addEventListener("mouseover", function(event){
        mudacorTela[2].style.backgroundColor = "#98c379"
    })
    adicionados[2].addEventListener("mouseout", function(event){
        mudacorTela[2].style.backgroundColor = "#fff6e5"
    })
    iconeDispensa = document.querySelector('.dispensa');
    iconeDispensa.style.filter = 'invert(0%)';
    
    dados = localStorage.getItem('dadosFormulario')
    if (dados === null){
        localStorage.setItem('dadosFormulario', JSON.stringify({}))
    }   
    ingrediente = localStorage.getItem("ingrediente");


})