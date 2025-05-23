document.addEventListener('DOMContentLoaded', function(){
    inputPesquisa = document.getElementById("pesquisa");
    opcoes = document.querySelectorAll(".opcao")
    iconeFiltro = document.querySelector('.livro');
    iconeFiltro.style.filter = 'invert(0%)';

    botoes = document.querySelectorAll(".opcao");

    dic_comidas = {"/projeto/Imagens/icones_pesquisa/arabe.png":"Árabe",
        "/projeto/Imagens/icones_pesquisa/carne.png":"Carnes", 
        "/projeto/Imagens/icones_pesquisa/hamburguer.png":"Hamburguer",
        "/projeto/Imagens/icones_pesquisa/hotdog.png":"Hotdog",
        "/projeto/Imagens/icones_pesquisa/japonesa.png":"Japonesa",
        "/projeto/Imagens/icones_pesquisa/massas.png":"Massas",
        "/projeto/Imagens/icones_pesquisa/mexicana.png":"Mexicana",
        "/projeto/Imagens/icones_pesquisa/peixe.png":"Peixe",
        "/projeto/Imagens/icones_pesquisa/pizza.png":"Pizza",
        "/projeto/Imagens/icones_pesquisa/salada.png":"Salada",
        "/projeto/Imagens/icones_pesquisa/sorvetes.png":"Sorvetes",
        "/projeto/Imagens/icones_pesquisa/vegana.png":"Vegana"
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
            window.location.href = "/projeto/Prato_pesquisa.html";
            //console.log(titulo);
            
        })
    }
    inputPesquisa.addEventListener("input",function(){
        termo = this.value.toLowerCase().trim();
        opcoesmostradas = 0
        if (termo === "") {
            opcoes.forEach(opcao =>{
                opcao.style.display = "flex"
            })
        }
        else {
            opcoes.forEach(opcao=>{
                altTexto = opcao.querySelector("img").alt.toLowerCase();
                if (altTexto.includes (termo)){
                    opcao.style.display = "flex";
                    opcoesmostradas++;
                }
                else{
                    opcao.style.display = "none";
                }
            })
        }
     
        if (opcoesmostradas === 0){
                opcoes.forEach(opcao =>{
                opcao.style.display = "flex"
            })
        }
    })

})