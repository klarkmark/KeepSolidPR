
    // Отримання елементів форми та контейнера для виведення
    const form = document.getElementById('inputForm');
    const outputContainer = document.getElementById('outputContainer');

    // Додавання слухача подій для форми
    form.addEventListener('submit', function (event) {
        // Запобігання стандартній дії відправлення форми
        event.preventDefault();

        // Отримання введеного тексту
        const inputText = document.getElementById('userInput').value;

        // Створення нового елемента <p>
        const newParagraph = document.createElement('p');

        // Встановлення тексту в новий <p>
        newParagraph.textContent = inputText;

        // Додавання нового <p> до контейнера для виведення
        outputContainer.appendChild(newParagraph);

        // Очищення поля вводу після виведення тексту
        document.getElementById('userInput').value = '';
    });