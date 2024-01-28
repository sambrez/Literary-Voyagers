const searchBook = (event) => {
  event.preventDefault();

  const bookTitle = document.querySelector('#title').value;

  const url = 'https://goodreads-books.p.rapidapi.com/search?q=' + bookTitle + '&page=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '25791fac9bmshc49fee15c7aee58p162e4djsnc53c37fac2f7',
      'X-RapidAPI-Host': 'goodreads-books.p.rapidapi.com'
    }
  };

  const bookSearch = fetch(url, options)
    .then(res => {
      return res.json();
    })
    .then(
      document.querySelector('#list').innerHTML = ""
    )
    .then(data => {
      let arr = 1;

      data.forEach(book => {
        const html =
          `<div id="${arr++}" data-value="${book.title}" class="col-3 card">
                <img class="card-img-top" src="${book.smallImageURL}" alt="book cover">
              <div class="card-body">
              <h5 id="title" class="card-title">${book.title}</h5>
              <p id="author" class="card-text">By: ${book.author}</p>
              <p class="card-text"><small class="text-muted">Published in ${book.publicationYear}</small></p>
              <button type"click" class="card-footer"><small class="text-muted"><a href="/profile/add_book">Select this book</small></button>
              </div>
          </div>`;

        document.querySelector('#list').insertAdjacentHTML('beforeend', html);
      })
    })
    .catch(error => {
      console.log(error);
    })
};

document
  .querySelector('#book-form')
  .addEventListener('submit', searchBook);


  const selectBook = (event) => {
    event.preventDefault();
  
    title = document.getElementById('#title')
    author = document.getElementById('#author')
  
    const html = `<div class="form-group col-md-6">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="${title}">
  </div>
  <div class="form-group col-md-6">
    <label for="author">Author</label>
    <input type="text" class="form-control" id="author" placeholder="${author}">
  </div>`;
  
    document.querySelector('#book-details').insertAdjacentHTML('beforeend', html);
  };

    const element = document.getElementById("1");
    