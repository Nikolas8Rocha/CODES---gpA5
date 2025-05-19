document.addEventListener('DOMContentLoaded', function () {

    iconeEstrela = document.querySelector('.estrela');
    iconeEstrela.style.filter = 'invert(0%)';

    frango = localStorage.getItem("frango_grelhada_selecionada");
    tilapia = localStorage.getItem("tilapia_grelhada_selecionada");
    main = document.querySelector(".sections_tela_inicial")

    if (frango == "true") {

        a_criado = document.createElement("a");
        a_criado.classList.add("a-section");
        a_criado.id = "frango";
        
        //arrumar a lógica de levar até a tela de histórico
        a_criado.href = "/Prato_histórico.html";
            
        
        
        
        section_criada = document.createElement("section");
        section_criada.classList.add("section-favoritos");
        
        p_criada = document.createElement("p");
        p_criada.innerHTML = "Frango Grelhado"

        img_criada = document.createElement("img");
        img_criada.classList.add("img-menor");
        img_criada.alt = "Frango grelhado";
        img_criada.src = "Imagens/frango_grelhado.png"

        img_estrela = document.createElement("img");
        img_estrela.classList.add("img-estrela");
        img_estrela.src= "Imagens/estrela_laranja.png";
        img_estrela.alt = "Favoritada";
        

        a_criado.appendChild(section_criada);
        section_criada.appendChild(img_criada);
        section_criada.appendChild(p_criada);
        section_criada.appendChild(img_estrela);

        //main.appendChild(section_criada);
        main.appendChild(a_criado);


    }
    if (tilapia == "true") {
        a_criado = document.createElement("a");
        a_criado.classList.add("a-section");
        a_criado.id = "tilapia";

        section_criada2 = document.createElement("section");
        section_criada2.classList.add("section-favoritos2");

        p_criada = document.createElement("p");
        p_criada.innerHTML = "Tilapia Grelhado"
        
        img_criada2 = document.createElement("img");
        img_criada2.classList.add("img-menor2");
        img_criada2.alt = "Tilapia Grelhada";
        img_criada2.src = "Imagens/tilapia_grelhada.png";

        img_estrela2 = document.createElement("img");
        img_estrela2.classList.add("img-estrela2");
        img_estrela2.src= "Imagens/estrela_laranja.png";
        img_estrela2.alt = "Favoritada";

        

        a_criado.appendChild(section_criada2);
        section_criada2.appendChild(img_criada2);
        section_criada2.appendChild(p_criada);
        section_criada2.appendChild(img_estrela2);

        //main.appendChild(section_criada);
        main.appendChild(a_criado);     

    }



})