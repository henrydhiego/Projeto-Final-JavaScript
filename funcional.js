document.addEventListener('DOMContentLoaded', () => {
    fetch("produtos.json").then(response => {
        response.json().then(dados => {
            dados.forEach(produto => {
                let idProd = `produto${produto.id}`;
                let elemento = document.getElementById(idProd);
                if (elemento) {
                    elemento.innerHTML = `
                        <img src="${produto.imagem1}" alt="${produto.nome}">
                        <p>${produto.nome}</p>
                        <p>${produto.marca}</p>
                        <p>${produto.cor}</p>
                    `;

                    elemento.addEventListener('click', () => {
                        showModal(produto);
                    });
                }
            });

            let produtos = document.querySelectorAll('.produto');
            produtos.forEach(produto => {
                produto.addEventListener('mouseover', () => {
                    produto.style.cursor = "pointer";
                });

                produto.addEventListener('mouseout', () => {
                    produto.style.cursor = "default";
                });
            });
        });
    });

    function showModal(produto) {
        const modal = document.getElementById("modal");
        const carousel = modal.querySelector('.carousel');
        const productName = document.getElementById("product-name");
        const productColor = document.getElementById("product-color");
        const productStock = document.getElementById("product-stock");
        const productSizes = document.getElementById("product-sizes");
        const productDetails = document.getElementById("product-details");

        productName.textContent = produto.nome;
        productColor.textContent = `Cor: ${produto.cor}`;
        productStock.textContent = `Estoque: ${produto.estoque}`;
        productSizes.textContent = `Números disponíveis: ${produto.numeros_disponiveis}`;
        productDetails.textContent = produto.detalhes;

        carousel.innerHTML = '';
        if (produto.imagem1) carousel.innerHTML += `<div><img src="${produto.imagem1}" alt="${produto.nome}"></div>`;
        if (produto.imagem2) carousel.innerHTML += `<div><img src="${produto.imagem2}" alt="${produto.nome}"></div>`;
        if (produto.imagem3) carousel.innerHTML += `<div><img src="${produto.imagem3}" alt="${produto.nome}"></div>`;

        $(carousel).slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<button class="slick-prev">Anterior</button>',
            nextArrow: '<button class="slick-next">Próximo</button>'
        });

        modal.style.display = "block";
    }

    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        $('.carousel').slick('unslick'); 
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            $('.carousel').slick('unslick'); 
        }
    }
});
