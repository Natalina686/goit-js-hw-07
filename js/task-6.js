function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  // Створення елементів
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  const fragment = document.createDocumentFragment(); 

  // Очищення контейнера перед додаванням нових елементів
  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10; // Розмір кожного наступного
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginBottom = '10px';
    fragment.appendChild(div);
  }

  // Додавання елементів в DOM
  boxesContainer.appendChild(fragment);
}

// Очищення колекції елементів
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищаємо всі елементи
}

// Обробка подій
document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('#controls input');
  const value = Number(input.value);

  if (value >= 1 && value <= 100) {
    createBoxes(value);
    input.value = ''; // Очищуємо значення інпуту після створення
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);