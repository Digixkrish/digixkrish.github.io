document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('show');
    });

    // toggle 

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Toggle between moon and sun icons
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
    });

    // Example add to cart functionality
    const cart = document.querySelector('.cart a');
    let cartCount = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cart.textContent = `Cart (${cartCount})`;
        });
    });
});
