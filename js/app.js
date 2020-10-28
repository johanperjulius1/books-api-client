const apiUrl = "http://localhost:3002/books";

const displayBooks = async () => {
  const displayElement = document.getElementById('display')
  const data = await ( await fetch(apiUrl)).json()
  data.books.forEach(book => {
    const displayBookElement = document.createElement('div')
    let html = `<p>The book ${book.title}, is written by ${book.auth}.`
    displayBookElement.innerHTML = html
    displayElement.appendChild(displayBookElement)
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
});
