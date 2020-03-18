
const firebaseConfig = {
  apiKey: 'AIzaSyD6hxwAmFRu0bM38tQfw4_0ihdfh4TfU0o',
  authDomain: 'my-library-681b1.firebaseapp.com',
  databaseURL: 'https://my-library-681b1.firebaseio.com',
  projectId: 'my-library-681b1',
  storageBucket: 'my-library-681b1.appspot.com',
  messagingSenderId: '261869283629',
  appId: '1:261869283629:web:4897de4a2b52dd49100ba4',
  measurementId: 'G-S1W30G7EQH',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
this.database = firebase.database();

function writeData() {
  firebase.database().ref('Books').push({
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value,
    read: document.getElementById('read').checked,
  });
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.deleteBook = () => {
    document.getElementById('book-info-body').addEventListener('click', (e) => {
      if (e.target.classList.contains('delete_book')) {
        const { id } = e.target;
        document.getElementById(id).parentElement.parentElement.remove();
      }
    });
  };
}

function UI() {
  this.render = (parent, child) => {
    document.getElementById(parent).innerHTML = child;
  };

  this.clearInput = () => {
    document.getElementById('book-form').reset();
  };

  this.displayForm = () => {
<<<<<<< HEAD
    let newBook = document.querySelector('#new-book-btn');
    newBook.addEventListener('click', function (e) {
=======
    const new_book = document.querySelector('#new-book-btn');
    new_book.addEventListener('click', (e) => {
>>>>>>> c9727ee70bfbef31701de413b45b07f08bd2457a
      document.querySelector('#book-form-content').style.display = 'block';
      e.preventDefault();
    });
  };

  this.readStatus = () => {
<<<<<<< HEAD
    document.getElementById('book-info-body').addEventListener('click', function (e) {
      if (e.target.classList.contains('readStatus')) {
        let id = e.target.id
        let readContent = document.getElementById(id).textContent;
=======
    document.getElementById('book-info-body').addEventListener('click', (e) => {
      if (e.target.classList.contains('read_status')) {
        const { id } = e.target;
        const read_content = document.getElementById(id).textContent;
>>>>>>> c9727ee70bfbef31701de413b45b07f08bd2457a

        if (readContent === 'Read') {
          document.getElementById(id).innerText = 'Unread';
          document.getElementById(id).parentElement.previousElementSibling.previousElementSibling.innerText = 'Read';
        } else if (readContent === 'Unread') {
          document.getElementById(id).innerText = 'Read';
          document.getElementById(id).parentElement.previousElementSibling.previousElementSibling.innerText = 'Unread';
        }
      }
    });
  };
}

<<<<<<< HEAD
const ui = new UI;
const book = new Book;
let myLibrary = [];
=======
const ui = new UI();
const book = new Book();

const add_button = document.querySelector('#add-book-button');
add_button.addEventListener('click', writeData);
add_button.addEventListener('click', addBookToLibrary);
const myLibrary = [];
>>>>>>> c9727ee70bfbef31701de413b45b07f08bd2457a


function addBookToLibrary(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
<<<<<<< HEAD
=======
  const addBookRef = firebase.database().ref('myLibrary');
  addBookRef.on('value', (snapshot) => {
    console.log(snapshot.val());
  });
>>>>>>> c9727ee70bfbef31701de413b45b07f08bd2457a

  if (title !== '' || author !== '') {
    let bookContent = '';
    myLibrary.forEach((item, index) => {
<<<<<<< HEAD
      let read = item.read ? 'Read' : 'Unread';
      let readStatus = item.read ? 'Unread' : 'Read';
      bookContent += `<tr>
=======
      const read = item.read ? 'Read' : 'Unread';
      const read_status = item.read ? 'Unread' : 'Read';
      book_content += `<tr>
>>>>>>> c9727ee70bfbef31701de413b45b07f08bd2457a
                      <th scope="row">${item.title}</th>
                      <td>${item.author}</td>
                      <td>${item.pages}</td>
                      <td>${read}</td>
                      <td><button type="button" class="btn-danger btn btn-sm delete_book" id="delete_book_${index}">Delete</button></td>
                      <td><button type="button" class="btn-secondary btn btn-sm readStatus" id="readStatus_${index}">${readStatus}</button></td>
                      </tr>`;
    });

<<<<<<< HEAD
    ui.render("book-info-body", bookContent);

    let bookContainer = document.getElementById('all-books');
    bookContainer.style.display = 'block';
=======
    ui.render('book-info-body', book_content);

    const book_container = document.getElementById('all-books');
    book_container.style.display = 'block';
>>>>>>> c9727ee70bfbef31701de413b45b07f08bd2457a


    ui.clearInput();
  } else {
    alert('Please fill all inputs');
  }
  e.preventDefault();
}

const addButton = document.querySelector("#add-book-button")
addButton.addEventListener("click", writeData)
addButton.addEventListener("click", addBookToLibrary)

ui.displayForm();
ui.readStatus();
book.deleteBook();
