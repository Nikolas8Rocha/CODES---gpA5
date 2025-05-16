document.addEventListener('DOMContentLoaded', function () {

    iconeEstrela = document.querySelector('.estrela');
    iconeEstrela.style.filter = 'invert(0%)';

    frango = localStorage.getItem("frango_grelhada_selecionada");
    tilapia = localStorage.getItem("tilapia_grelhada_selecionada");
    main = document.querySelector(".sections_tela_inicial")

    if (frango == "true") {

        a_criado = document.createElement("a");
        a_criado.classList.add("a-section");
        section_criada = document.createElement("section");
        section_criada.classList.add("section-favoritos");
        img_criada = document.createElement("img");
        img_criada.classList.add("img-menor");
        img_criada.alt = "batata";
        p_criada = document.createElement("p");

        img_criada.src = "Imagens/frango_grelhado.png"

        p_criada.innerHTML = "Frango Grelhado"

        a_criado.appendChild(section_criada);
        section_criada.appendChild(img_criada);
        section_criada.appendChild(p_criada);

        main.appendChild(section_criada);
    }
    if (tilapia == "true") {
        a_criado = document.createElement("a");
        a_criado.classList.add("a-section");

        section_criada = document.createElement("section");
        section_criada.classList.add("section-favoritos");

        img_criada = document.createElement("img");
        img_criada.classList.add("img-menor");
        img_criada.alt = "batata2";
        p_criada = document.createElement("p");

        img_criada.src = "Imagens/tilapia_grelhada.png"
        p_criada.innerHTML = "Tilapia Grelhado"

        a_criado.appendChild(section_criada);
        section_criada.appendChild(img_criada);
        section_criada.appendChild(p_criada);

        main.appendChild(section_criada);

    }


})