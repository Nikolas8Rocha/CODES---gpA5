document.addEventListener('DOMContentLoaded', function(){

    iconeDispensa = document.querySelector('.dispensa');
    iconeDispensa.style.filter = 'invert(0%)';
    
    dados = localStorage.getItem('dadosFormulario')
    if (dados === null){
        localStorage.setItem('dadosFormulario', JSON.stringify({}))
    }   
    ingrediente = localStorage.getItem("ingrediente");

    dados= localStorage.getItem('dadosFormulario');
    dados = JSON.parse(dados);
    situacao = localStorage.getItem('finalizado');
    ul = document.querySelector(".lista-pai");

    if (situacao === "Adicionado"){
        li = document.createElement("li");
        li.classList.add("listra-filho");

        section = document.createElement("section");
        section.classList.add("section-lista");

        p1 = document.createElement("p");
        p1.classList.add("opcoes1");
        p1.innerHTML = ingrediente;

        p2 = document.createElement("p");
        p2.classList.add("opcoes2");
        p2.innerHTML = dados["0"] + " " + dados.kg;

        p3 = document.createElement("p");
        p3.classList.add("opcoes3");
        partesData = dados.data.split('-');
        mes = partesData[1]; 
        ano = partesData[0]; 
        dataFormatada = `${mes}/${ano}`;

        p3.innerHTML = dataFormatada;

        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);

        li.appendChild(section);
        ul.appendChild(li);
    }

    adicionados = document.querySelectorAll(".listra-filho")
    mudacorTela = document.querySelectorAll(".section-lista")
    console.log(adicionados)
    for (i of adicionados){
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
    }


})