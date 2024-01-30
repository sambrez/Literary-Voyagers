// POST adding books to user's wishlist
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

  async function addToWishlist(bookId, genre, author, bookTitle) {
    try {
      const response = await fetch("/api/wishlist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          book_id: bookId,
          genre: genre,
          author: author,
          bookTitle: bookTitle,
        }),
      });

      const data = await response.json();
      const modalMessageElement = document.getElementById("wishlistModalMessage");

      if (response.ok) {
        modalMessageElement.textContent = "Book added to wishlist successfully!";
      } else {
        modalMessageElement.textContent = "Error adding book to wishlist. Please try again.";
      }

      $("#wishlistModal").modal("show");
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  }
});
