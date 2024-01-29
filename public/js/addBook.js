const searchBook = (event) => {
  event.preventDefault();

  const bookTitle = document.querySelector('#title').value;

  const url = 'https://goodreads-books.p.rapidapi.com/search?q=' + bookTitle + '&page=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '811d01c47cmshfe978824f72c1b8p14fe08jsn9ea88cc80866',
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
          `<div class="col-5 card small" style="justify-content-center">
                <img class="card-img-top" src="${book.smallImageURL}" alt="book cover">
              <div id="${arr++}" class="card-body">
              <h5 data-value="${book.title}/ ${book.author}" class="btn btn-info card-title">${book.title}</h5>
              <h6 class="card-text">By: ${book.author}</h6>
              <p class="card-text"><small class="text-muted">Published in ${book.publicationYear}</small></p>
              </div>
          </div>`;

        document.querySelector('#list').insertAdjacentHTML('beforeend', html);
      });

      const one = document.getElementById('1');
      
    
      one.addEventListener("click", function(event) {
        const element = event.target;
        const details= element.getAttribute("data-value");
        const array = details.split("/");
        const title = array[0];  
        const author = array[1];  
        console.log(title);   

        document.querySelector('#bookTitle').setAttribute("value", title);
        document.querySelector('#bookTitle').setAttribute("placeholder", title);

        document.querySelector('#author').setAttribute("value", author);
        document.querySelector('#author').setAttribute("placeholder", author);
      });

      const two = document.getElementById('2');
      
    
      two.addEventListener("click", function(event) {
        const element = event.target;
        const details= element.getAttribute("data-value");
        const array = details.split("/");
        const title = array[0];  
        const author = array[1];  
        console.log(title);   

        document.querySelector('#bookTitle').setAttribute("value", title);
        document.querySelector('#bookTitle').setAttribute("placeholder", title);

        document.querySelector('#author').setAttribute("value", author);
        document.querySelector('#author').setAttribute("placeholder", author);
      });

      const three = document.getElementById('3');
      
    
      three.addEventListener("click", function(event) {
        const element = event.target;
        const details= element.getAttribute("data-value");
        const array = details.split("/");
        const title = array[0];  
        const author = array[1];  
        console.log(title);   

        document.querySelector('#bookTitle').setAttribute("value", title);
        document.querySelector('#bookTitle').setAttribute("placeholder", title);

        document.querySelector('#author').setAttribute("value", author);
        document.querySelector('#author').setAttribute("placeholder", author);
      });

      const four = document.getElementById('4');
      
    
      four.addEventListener("click", function(event) {
        const element = event.target;
        const details= element.getAttribute("data-value");
        const array = details.split("/");
        const title = array[0];  
        const author = array[1];  
        console.log(title);   

        document.querySelector('#bookTitle').setAttribute("value", title);
        document.querySelector('#bookTitle').setAttribute("placeholder", title);

        document.querySelector('#author').setAttribute("value", author);
        document.querySelector('#author').setAttribute("placeholder", author);
      });

      const five = document.getElementById('5');
      
    
      five.addEventListener("click", function(event) {
        const element = event.target;
        const details= element.getAttribute("data-value");
        const array = details.split("/");
        const title = array[0];  
        const author = array[1];  
        console.log(title);   

        document.querySelector('#bookTitle').setAttribute("value", title);
        document.querySelector('#bookTitle').setAttribute("placeholder", title);

        document.querySelector('#author').setAttribute("value", author);
        document.querySelector('#author').setAttribute("placeholder", author);
      });

      const six = document.getElementById('6');
      
    
      six.addEventListener("click", function(event) {
        const element = event.target;
        const details= element.getAttribute("data-value");
        const array = details.split("/");
        const title = array[0];  
        const author = array[1];  
        console.log(title);   

        document.querySelector('#bookTitle').setAttribute("value", title);
        document.querySelector('#bookTitle').setAttribute("placeholder", title);

        document.querySelector('#author').setAttribute("value", author);
        document.querySelector('#author').setAttribute("placeholder", author);
      });

      const seven = document.getElementById('7');
      
    
      seven.addEventListener("click", function(event) {
        const element = event.target;
        const details= element.getAttribute("data-value");
        const array = details.split("/");
        const title = array[0];  
        const author = array[1];  
        console.log(title);   

        document.querySelector('#bookTitle').setAttribute("value", title);
        document.querySelector('#bookTitle').setAttribute("placeholder", title);

        document.querySelector('#author').setAttribute("value", author);
        document.querySelector('#author').setAttribute("placeholder", author);
      });

      const eight = document.getElementById('8');
      
    
      eight.addEventListener("click", function(event) {
        const element = event.target;
        const details= element.getAttribute("data-value");
        const array = details.split("/");
        const title = array[0];  
        const author = array[1];  
        console.log(title);   

        document.querySelector('#bookTitle').setAttribute("value", title);
        document.querySelector('#bookTitle').setAttribute("placeholder", title);

        document.querySelector('#author').setAttribute("value", author);
        document.querySelector('#author').setAttribute("placeholder", author);
      });

      const nine = document.getElementById('9');
      
    
      nine.addEventListener("click", function(event) {
        const element = event.target;
        const details= element.getAttribute("data-value");
        const array = details.split("/");
        const title = array[0];  
        const author = array[1];  
        console.log(title);   

        document.querySelector('#bookTitle').setAttribute("value", title);
        document.querySelector('#bookTitle').setAttribute("placeholder", title);

        document.querySelector('#author').setAttribute("value", author);
        document.querySelector('#author').setAttribute("placeholder", author);
      });

      const ten = document.getElementById('10');
      
    
      ten.addEventListener("click", function(event) {
        const element = event.target;
        const details= element.getAttribute("data-value");
        const array = details.split("/");
        const title = array[0];  
        const author = array[1];  
        console.log(title);   

        document.querySelector('#bookTitle').setAttribute("value", title);
        document.querySelector('#bookTitle').setAttribute("placeholder", title);

        document.querySelector('#author').setAttribute("value", author);
        document.querySelector('#author').setAttribute("placeholder", author);
      });
    })
    .catch(error => {
      console.log(error);
    })
};



const addBook = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#bookTitle').value;
  const author = document.querySelector('#author').value;
  const genre = document.querySelector('#genre').value;
  const recommendation = document.querySelector('#rec').value;
  const review = document.querySelector('#review').value;

  const data = {
    title: title,
    author: author,
    genre: genre,
    recommendation: recommendation,
    review: review
  }; // issue area

  try {
    const response = await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to add book');
    }

    const newBook = await response.json();
    console.log('Book added successfully:', newBook);

    document.location.replace('/profile');
  } catch (error) {
    console.error('Error adding book:', error.message);
  }
};

document.querySelector('#book-form').addEventListener('submit', searchBook);

document.querySelector('#book').addEventListener('submit', addBook);



