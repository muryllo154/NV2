// js/receitas.js
document.addEventListener('DOMContentLoaded', function () {
    const receitas = [
        {
            titulo: 'Arroz de Couve-Flor',
            imagem: 'img/IMG-ARRZ.jpg',
            preparo: 'Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.',
            ingredientes: ['Arroz', 'Couve-Flor', 'Cebola Média', 'Azeite']
        },
        {
            titulo: 'Bolo de Café',
            imagem: 'img/IMG-BOLO.jpg',
            preparo: 'Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bate as claras e junte a mistura.',
            ingredientes: ['Farinha de Trigo', 'Açúcar', 'Café Coado', 'Chocolate em Pó', 'Ovos']
        },
        {
            titulo: 'Coxinha de Brigadeiro',
            imagem: 'img/IMG-COX.jpg',
            preparo: 'Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.',
            ingredientes: ['Leite Condensado', 'Chocolate em Pó', 'Manteiga', 'Morango', 'Chocolate Granulado']
        }
    ];

    function getListaIngredientes(receita) {
        const lista = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('');
        return `<ul>${lista}</ul>`;
    }

    function getCard(receita) {
        return `
        <div class="card" style="width: 18rem;">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                ${getListaIngredientes(receita)}
                <hr>
                <p class="card-text">${receita.preparo}</p>
            </div>
        </div>
        `;
    }

    function preencheCatalogo() {
        const pnlCatalogo = document.getElementById('pnlCatalogo');
        const htmlReceitas = receitas.map(receita => getCard(receita)).join('');
        pnlCatalogo.innerHTML = htmlReceitas;
    }

    preencheCatalogo();
});
