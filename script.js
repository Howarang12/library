const addButton = document.querySelector('.add-button')
const closeModalButton = document.getElementById('close');
const modalContainer = document.getElementById('modal-container')
const submitButton = document.getElementById('submit');

let myLibrary = [];

//placeholder book
const baseBook = new Book ("Javascript the Definitive Guide", "David Flanagan", 706, "Not Read")
myLibrary.push(baseBook);

function Book(title, author, pages, status){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;

}

//clear input fields on submission
function clearInputs(){
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('pages').value = "";
}

//create new Book object and push it to myLibrary array
function addBookToLibrary(){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').value;


  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);

  clearInputs();
  modalContainer.classList.remove('show');
  displayBooks();
}

//display books on page by looping through the myLibrary array
function displayBooks(){
  const list = document.getElementById('book-list');
  const card = document.createElement('div');
  card.classList.add('book-card')
  for (const book of myLibrary){
    card.innerHTML = `

      <div>${book.title}</div>
      <div>by ${book.author}</div>
      <div>${book.pages} pages</div>
      <div>${book.status}</div>
      <button class = 'status'> Change Read Status </button>
      <button class = 'delete'> Delete </button>
   
    `
  }
  list.append(card);
}

//toggle read status
function toggleStatus(book){
  
}


//delete book
function deleteBook(book){
  if(book.classList.contains('delete')){
      book.parentElement.remove();
  }
}

//Event: open modal
addButton.addEventListener('click', () =>{
  modalContainer.classList.add('show');
});

//Event: close modal 
closeModalButton.addEventListener('click', () =>{
  modalContainer.classList.remove('show');
});

//Event: submit new book to myLibrary button
submitButton.addEventListener('click', addBookToLibrary)





//Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) =>{
  deleteBook(e.target)
})

//Event: toggle status


displayBooks();
