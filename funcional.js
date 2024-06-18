//Carregar os objetos em json para o HTML

fetch("produtos.json").then((response) => {
    response.json().then((dados) => {
        dados.map((produto) => {
            let id_prod = (produto.id);
            console.log(id_prod)
            var prod1 = document.getElementById("produto1");
            var prod2 = document.getElementById("produto2");
            var prod3 = document.getElementById("produto3");
            var prod4 = document.getElementById("produto4");
            var prod5 = document.getElementById("produto5");
            var prod6 = document.getElementById("produto6");
            var prod7 = document.getElementById("produto7");
            var prod8 = document.getElementById("produto8");
            if(id_prod == 1){
                prod1.innerHTML += `<img src="${produto.imagem1}" alt="${produto.nome}">
                                    <p>${produto.nome}</p>
                                    <p>${produto.marca}</p>
                                    <p>${produto.cor}</p>`
            }
            if(id_prod == 2){
                prod2.innerHTML += `<img src="${produto.imagem1}" alt="${produto.nome}">
                                    <p>${produto.nome}</p>
                                    <p>${produto.marca}</p>
                                    <p>${produto.cor}</p>`
            }
            if(id_prod == 3){
                prod3.innerHTML += `<img src="${produto.imagem1}" alt="${produto.nome}">
                                    <p>${produto.nome}</p>
                                    <p>${produto.marca}</p>
                                    <p>${produto.cor}</p>`
            }
            if(id_prod == 4){
                prod4.innerHTML += `<img src="${produto.imagem1}" alt="${produto.nome}">
                                    <p>${produto.nome}</p>
                                    <p>${produto.marca}</p>
                                    <p>${produto.cor}</p>`
            }
            if(id_prod == 5){
                prod5.innerHTML += `<img src="${produto.imagem1}" alt="${produto.nome}">
                                    <p>${produto.nome}</p>
                                    <p>${produto.marca}</p>
                                    <p>${produto.cor}</p>`
            }
            if(id_prod == 6){
                prod6.innerHTML += `<img src="${produto.imagem1}" alt="${produto.nome}">
                                    <p>${produto.nome}</p>
                                    <p>${produto.marca}</p>
                                    <p>${produto.cor}</p>`
            }
            if(id_prod == 7){
                prod7.innerHTML += `<img src="${produto.imagem2}" alt="${produto.nome}">
                                    <p>${produto.nome}</p>
                                    <p>${produto.marca}</p>
                                    <p>${produto.cor}</p>`
            }
            if(id_prod == 8){
                prod8.innerHTML += `<img src="${produto.imagem2}" alt="${produto.nome}">
                                    <p>${produto.nome}</p>
                                    <p>${produto.marca}</p>
                                    <p>${produto.cor}</p>`
            }
            
                
        })
    })
})
