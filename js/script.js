// Получаем элементы
const modal = document.getElementById('bookingModal');
const bookButtons = document.querySelectorAll('.book-btn');
const closeModal = document.querySelector('.close-modal');
const bookingForm = document.getElementById('bookingForm');
const destinationInput = document.getElementById('destination');
const priceInput = document.getElementById('packagePrice');

// Открытие модального окна при клике на кнопку "Book Now"
bookButtons.forEach(button => {
    button.addEventListener('click', function() {
        const destination = this.getAttribute('data-destination');
        const price = this.getAttribute('data-price');
        
        // Заполняем поля формы
        destinationInput.value = destination;
        priceInput.value = price;
        
        // Показываем модальное окно
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
    });
});

// Закрытие модального окна при клике на крестик
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Возвращаем прокрутку
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Закрытие модального окна при нажатии Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Обработка отправки формы
bookingForm.addEventListener('submit', function(e) {
    // Форма отправится автоматически через Formspree
    // Можно добавить дополнительную обработку здесь
    console.log('Form submitted!');
});