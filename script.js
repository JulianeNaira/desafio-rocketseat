const addButton = document.getElementById('add-button');
const newItemInput = document.getElementById('new-item');
const shoppingList = document.getElementById('shopping-list');
const message = document.getElementById('message');

// Adicionar item
addButton.addEventListener('click', () => {
  const itemText = newItemInput.value.trim();

  if (itemText) {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
      <div class="checkbox-container">
        <input type="checkbox" />
        <span>${itemText}</span>
      </div>
      <button class="delete-button">&times;</button>
    `;

    // Remover item
    listItem.querySelector('.delete-button').addEventListener('click', () => {
      shoppingList.removeChild(listItem);
      showMessage('O item foi removido da lista');
    });

    shoppingList.appendChild(listItem);
    newItemInput.value = '';
  }
});

// Mostrar mensagem
function showMessage(text) {
  message.textContent = text;
  message.style.display = 'block';

  setTimeout(() => {
    message.style.display = 'none';
  }, 2000);
}

