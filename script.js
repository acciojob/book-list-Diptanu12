//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');
    const submitButton = document.getElementById('submit');
    const bookList = document.getElementById('book-list');

    submitButton.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const isbn = isbnInput.value.trim();

        if (title && author && isbn) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="delete">Clear</button></td>
            `;

            bookList.appendChild(row);

            titleInput.value = '';
            authorInput.value = '';
            isbnInput.value = '';

            row.querySelector('.delete').addEventListener('click', () => {
                bookList.removeChild(row);
            });
        }
    });
});
