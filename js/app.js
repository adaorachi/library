function Book(title,author, pages, read) {
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read= read;
}

const add_button=  document.querySelector("#add-book-button")
add_button.addEventListener("click", addBookToLibrary )
let myLibrary = [];


function addBookToLibrary(e) {   
  const title= document.getElementById("title").value;
  const author= document.getElementById("author").value;
  const pages= document.getElementById("pages").value;
  const read= document.getElementById("read").checked;
  const book= new Book(title,author,pages,read);
  myLibrary.push(book);
  let info= document.createElement("tr")
  let book_content= `
                    <th scope="row">${book.title}</th>
                    <td>${book.author}</td>
                    <td>${book.pages}</td>
                    <td>${book.read}</td>`
  render("book-info-body",info, book_content)
  clearInput()
  e.preventDefault();
}

function render(parent, child, contents) {
  child.innerHTML= contents
  document.getElementById(parent).append(child)

}

function clearInput() {
  document.getElementById("book-form").reset();
  

}

