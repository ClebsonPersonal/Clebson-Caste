document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os elementos que devem aparecer ao rolar
    const reveals = document.querySelectorAll(".reveal");

    // Configura o observador de interseção
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Para de observar após animar uma vez (deixa o scroll mais leve)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível na tela
    });

    // Ativa o observador em cada bloco
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});