document.addEventListener('DOMContentLoaded', function(){

    //icone preto no footer
    iconeRelogio = document.querySelector('.livro');
    iconeRelogio.style.filter = 'invert(0%)';

    dic_comidas = {"Árabe":["Homus", "Tabule", "Quibe Assado", "Falafel"],
        "Japonesa":["Sushi", "Sopa de Missô", "Yakisoba", "Tempurá"],
        "Pizza":["Pizza de Margherita","Pizza de Calabresa", "Pizza Quatro Queijos", "Pizza Portuguesa"],
        "Carnes": ["Bife à Parmediana", "Carne de Panela", "Escondidinho de carne", "Picadinho"],
        "Massas":["Espaguete à Bolonhesa", "Macarrão ao Alho e Óleo", "Lasanha de Berinjela", "Penne ao Molho Branco"],
        "Salada":["Salada Grega","Salada Caesar", "Salada de Grão-de-Bico", "Salada Colorida"],
        "Hamburguer":["Hamburguer Clássico","Hambúrguer de Frango","Hambúrguer Vegetariano","Hambúrguer de Costela"],
        "Mexicana":["Tacos","Guacamole","Quesadilla","Chili com Carne"],
        "Vegana":["Estrogonofe de Grão-de-Bico", "Moqueca Vegana", "Hambúrguer de Lentilha","Curry de Legumes"],
        "Hotdog":["Hot Dog Tradicional", "Hot Dog à Moda Chicago", "Hot Dog de Chili", "Hot Dog Vegano"],
        "Peixe":["Filé de Peixe Grelhado", "Moqueca de Peixe", "Salmão Assado", "Ceviche de Peixe Branco"],
        "Sorvetes":["Sorvete de Morango","Sorvete de Banana", "Sorvete de Chocolate", "Sorvete de Manga"]
    }

    tipo = localStorage.getItem("tipo");

    lista_comida = dic_comidas[tipo];

    t1 = document.querySelector("#t1")
    t2 = document.querySelector("#t2")
    t3 = document.querySelector("#t3")
    t4 = document.querySelector("#t4")
    

    t1.innerHTML = lista_comida[0]
    t2.innerHTML = lista_comida[1]
    t3.innerHTML = lista_comida[2]
    t4.innerHTML = lista_comida[3]

    titulo = document.querySelector(".titulo-historico")

    if (tipo === "Árabe" || tipo === "Japonesa" || tipo === "Mexicana"){
        titulo.innerHTML = "Comida " + tipo
    }
    else{
        titulo.innerHTML = "Receitas de " + tipo
    }



   
    

})