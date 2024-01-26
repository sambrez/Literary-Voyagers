document.addEventListener('DOMContentLoaded', function () {
  var wishlistButtons = document.querySelectorAll('.wishlist-button');

  wishlistButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();

      const bookId = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];
      const bookTitle = this.getAttribute('title');
      const author = this.getAttribute('author');
      const genre = this.getAttribute('genre');

      addToWishlist(bookId, genre, author, bookTitle);
    });
  });

  // Function to handle adding to wishlist
  function addToWishlist(bookId, genre, author, bookTitle) {
    fetch('/api/wishlist/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ book_id: bookId, genre, author, bookTitle }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        alert('Book added to wishlist successfully!');
      } else {
        alert('Error adding book to wishlist.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error adding book to wishlist. Please try again later.');
    });
  }
});