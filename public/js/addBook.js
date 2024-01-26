const addBook = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
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
  };

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

document
  .querySelector('#book-form')
  .addEventListener('submit', addBook);
