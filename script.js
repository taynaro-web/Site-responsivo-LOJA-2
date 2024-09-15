// Carrossel de imagens para a seção de destaque
let currentImageIndex = 0;
const images = ['img/banner1.jpg', 'img/banner2.jpg', 'img/banner3.jpg']; // Substitua pelos nomes das imagens que você usar
const heroSection = document.querySelector('.hero');

function changeHeroImage() {
    heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length; // Passa para a próxima imagem
}

setInterval(changeHeroImage, 5000); // Troca a cada 5 segundos

// Mensagem ao adicionar um produto ao carrinho
const addToCartButtons = document.querySelectorAll('.product-card button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});

// Scroll suave ao clicar nos links do menu
const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        const sectionId = this.getAttribute('href'); // Obtém o ID da seção
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        }); // Faz o scroll suave até a seção
    });
});

document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão
    document.querySelector('#produtos').scrollIntoView({
        behavior: 'smooth' // Faz o scroll suave até a seção
    });
});
