document.addEventListener('DOMContentLoaded', function(){

    iconeEstrela = document.querySelector('.estrela');
    iconeEstrela.style.filter = 'invert(0%)';

    frango = localStorage.getItem("frango_grelhada_selecionada");
    tilapia = localStorage.getItem("tilapia_grelhada_selecionada");
    main = document.querySelector(".sections_tela_inicial")

    if (frango == "true"){

        a_criado = document.createElement("a");
        section_criada = document.createElement("section");
        img_criada = document.createElement("img");
        p_criada = document.createElement("p");

        img_criada.src = "Imagens/frango_grelhado.png"
        p_criada.innerHTML = "Frango Grelhado"

        a_criado.appendChild(section_criada);
        section_criada.appendChild(img_criada);
        section_criada.appendChild(p_criada);

        main.appendChild(section_criada);
        /*
         <h3  class="titulo-favorito">Receitas Favoritas:</h3>
            <a href="/prato-favorito.html" class="a-section">
                <section class="section-favoritos">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_O8uHG17Gb6b-uZHwBqGs1m4VhDCNWiu3g&s" alt="Tilapia Grelhada" class="prato-favorito">
                    <p>Tilapia Grelhada</p>
                </section>
            </a>
        */
    }
    if (tilapia == "true"){
        a_criado = document.createElement("a");
        section_criada = document.createElement("section");
        img_criada = document.createElement("img");
        p_criada = document.createElement("p");

        img_criada.src = "Imagens/tilapia_grelhada.png"
        p_criada.innerHTML = "Tilapia Grelhado"

        a_criado.appendChild(section_criada);
        section_criada.appendChild(img_criada);
        section_criada.appendChild(p_criada);

        main.appendChild(section_criada);        

    }


})