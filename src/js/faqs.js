document.addEventListener('DOMContentLoaded', function() {
    const faqContainer = document.querySelector('.faq-container');

    faqContainer.addEventListener('click', function(e) {
        const clickedItem = e.target.closest('.faq-item');
        if (clickedItem) {
            const isActive = clickedItem.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.botao-toggle').textContent = '+';
            });
            if (!isActive) {
                clickedItem.classList.add('active');
                clickedItem.querySelector('.botao-toggle').textContent = '-';
            }
        }
    });
});

