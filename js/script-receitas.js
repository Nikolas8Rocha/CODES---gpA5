document.addEventListener('DOMContentLoaded', function(){

    iconeFiltro = document.querySelector('.livro');
    iconeFiltro.style.filter = 'invert(0%)';

    botoes = document.querySelectorAll(".opcao");

    dic_comidas = {"/Imagens/icones_pesquisa/arabe.png":"Árabe",
        "/Imagens/icones_pesquisa/carne.png":"Carnes", 
        "/Imagens/icones_pesquisa/hamburguer.png":"Hamburguer",
        "/Imagens/icones_pesquisa/hotdog.png":"Hotdog",
        "/Imagens/icones_pesquisa/japonesa.png":"Japonesa",
        "/Imagens/icones_pesquisa/massas.png":"Massas",
        "/Imagens/icones_pesquisa/mexicana.png":"Mexicana",
        "/Imagens/icones_pesquisa/peixe.png":"Peixe",
        "/Imagens/icones_pesquisa/pizza.png":"Pizza",
        "/Imagens/icones_pesquisa/salada.png":"Salada",
        "/Imagens/icones_pesquisa/sorvetes.png":"Sorvetes",
        "/Imagens/icones_pesquisa/vegana.png":"Vegana"
    }

    for (link of botoes){
        link.addEventListener("click", function(evento){
            evento.preventDefault();
            link_clicado = evento.currentTarget;
            imagemClicada = link_clicado.querySelector(".imagem-opcao");
            caminhoImagem = imagemClicada.src;
            //console.log(caminhoImagem);
            
            tiraCaminho = caminhoImagem.indexOf('/Imagens/');
            caminhoRelativo = caminhoImagem.slice(tiraCaminho);

            titulo = dic_comidas[caminhoRelativo];
            localStorage.setItem("tipo", titulo);
            window.location.href = "/Prato_pesquisa.html";
            //console.log(titulo);
            
        })
    }
    

})