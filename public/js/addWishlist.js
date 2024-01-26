document.addEventListener('DOMContentLoaded', function () {

    var wishlistButtons = document.querySelectorAll('.wishlist-button');
  
    wishlistButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
  
        var bookId = this.getAttribute('book-id');
  
        addToWishlist(bookId);
      });
    });
  
 // Function to handle adding to wishlist
 function addToWishlist(bookId) {
    fetch('/wishlist/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookId: bookId }),
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
