
 var firebaseConfig = {
  apiKey: "AIzaSyD6hxwAmFRu0bM38tQfw4_0ihdfh4TfU0o",
  authDomain: "my-library-681b1.firebaseapp.com",
  databaseURL: "https://my-library-681b1.firebaseio.com",
  projectId: "my-library-681b1",
  storageBucket: "my-library-681b1.appspot.com",
  messagingSenderId: "261869283629",
  appId: "1:261869283629:web:4897de4a2b52dd49100ba4",
  measurementId: "G-S1W30G7EQH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
this.database = firebase.database();
 
function writeData() {
  firebase.database().ref("Books").push({
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    pages: document.getElementById("pages").value,
    read: document.getElementById("read").checked
  })

  addBookToLibrary;
 
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const add_button = document.querySelector("#add-book-button")
add_button.addEventListener("click", writeData)
add_button.addEventListener("click", addBookToLibrary)
let myLibrary = [];


function addBookToLibrary(e) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  var addBookRef = firebase.database().ref("myLibrary");
  addBookRef.on('value', function(snapshot) {
  console.log(snapshot.val());
  });

  let book_content = '';
  myLibrary.forEach((item, index) => {
    let read = item.read ? 'Read' : 'Unread';
    let read_status = item.read ? 'Unread' : 'Read';
    book_content += `<tr>
                    <th scope="row">${item.title}</th>
                    <td>${item.author}</td>
                    <td>${item.pages}</td>
                    <td>${read}</td>
                    <td><button type="button" class="btn-danger btn btn-sm delete_book" id="delete_book_${index}">Delete</button></td>
                    <td><button type="button" class="btn-secondary btn btn-sm read_status" id="read_status_${index}">${read_status}</button></td>
                    </tr>`;
  })

  
  render("book-info-body", book_content);

  let book_container = document.getElementById('all-books');
  book_container.style.display = 'block';

  clearInput();
  e.preventDefault();
}

function deleteBook() {
  document.getElementById('book-info-body').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete_book')) {
      let id = e.target.id
      document.getElementById(id).parentElement.parentElement.remove()
    }
  })
}

function readStatus() {
  document.getElementById('book-info-body').addEventListener('click', function (e) {
    if (e.target.classList.contains('read_status')) {
      let id = e.target.id
      let read_content = document.getElementById(id).textContent;

      if (read_content == 'Read') {
        document.getElementById(id).innerText = 'Unread';
        document.getElementById(id).parentElement.previousElementSibling.previousElementSibling.innerText = 'Read';
      } else if (read_content == 'Unread') {
        document.getElementById(id).innerText = 'Read';
        document.getElementById(id).parentElement.previousElementSibling.previousElementSibling.innerText = 'Unread';
      }
    }
  })
}

function render(parent, child) {
  document.getElementById(parent).innerHTML = child
}

function clearInput() {
  document.getElementById("book-form").reset();
}

function displayForm() {
  let new_book = document.querySelector('#new-book-btn');
  new_book.addEventListener('click', function (e) {
    document.querySelector('#book-form-content').style.display = 'block';
    e.preventDefault()
  });
}

displayForm();
deleteBook();
readStatus();