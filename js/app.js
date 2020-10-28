const apiUrl = "http://localhost:3002/books";

const displayBooks = async () => {
  const displayElement = document.getElementById('display')
  const data = await ( await fetch(apiUrl)).json()
  data.books.forEach(book => {
    const displayBookElement = document.createElement('div')
    let html = `<p>The book ${book.title}, is written by ${book.author}.`
    displayBookElement.innerHTML = html
    displayElement.appendChild(displayBookElement)
  });
};

const submitHandler = async (event) => {
  event.preventDefault()
  let author = event.target.author.value
  let title = event.target.title.value
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({title: title, author: author})
  })
  
}

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
  const createBookForm = document.getElementById('create-book')
  createBookForm.addEventListener('submit', submitHandler)
});
