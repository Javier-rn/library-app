const button = document.querySelector('button');
const form = document.querySelector('.form');
const addBtn = document.querySelector('#add-btn');

const container = document.querySelector('.container');

const titleInput = document.getElementById('input-title');
const authorInput = document.getElementById('input-author');
const pagesInput = document.getElementById('input-nPages');

button.addEventListener('click', function () {
  form.classList.toggle('invisible');
});

let myLibrary = [];

function Book(title, author, nPages, read) {
  this.title = title;
  this.author = author;
  this.nPages = nPages;
  this.read = read;
}

// const book1 = new Book('Game of Thrones', 'George RR Martin', 800, true);

addBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const readStatus = document.querySelector('input[name="read-status"]:checked').value;

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readStatus
  );
  myLibrary.push(newBook);

  createCards(myLibrary);

  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
});

function createCards(booksArr) {
  container.innerHTML = '';
  booksArr.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTop = document.createElement('div');
    cardTop.classList.add('card-top');

    const titleP = document.createElement('p');
    titleP.setAttribute('id', 'title');
    titleP.textContent = book.title;

    const authorP = document.createElement('p');
    authorP.setAttribute('id', 'author');
    authorP.textContent = book.author;

    const cardBottom = document.createElement('div');
    cardBottom.classList.add('card-bottom');

    const pagesP = document.createElement('p');
    pagesP.setAttribute('id', 'pages');
    pagesP.textContent = book.nPages;

    const readP = document.createElement('p');
    readP.setAttribute('id', 'read-status');

    book.read == 'true' ? (readP.textContent = 'Read') : (readP.textContent = 'Not read');

    readP.addEventListener('click', function (e) {
      if (e.target.textContent === 'Not read') {
        e.target.textContent = 'Read';
      } else if (e.target.textContent === 'Read') {
        e.target.textContent = 'Not read';
      }
    });

    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('material-symbols-outlined');
    deleteIcon.textContent = 'close';

    deleteIcon.addEventListener('click', function (e) {
      e.target.parentElement.remove();
    });

    cardTop.appendChild(titleP);
    cardTop.appendChild(authorP);

    cardBottom.appendChild(pagesP);
    cardBottom.appendChild(readP);

    card.appendChild(deleteIcon);
    card.appendChild(cardTop);
    card.appendChild(cardBottom);

    container.appendChild(card);
  });
}

{
  /*   <div class="card">
        <div class="card-top">
          <p id="title">Game of Thrones</p>
          <p id="author">George RR Martin</p>
        </div>
        <div class="card-bottom">
          <p>800 pages</p>
          <p>Read</p>
        </div>
      </div> */
}
