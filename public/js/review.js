const newReview = async (event) => {
    event.preventDefault();
  
    const recommendation = document.querySelector('#recommendation').value.trim();
    const review = document.querySelector('#review').value.trim();
    const book_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    
  
    if (recommendation && review) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({recommendation, review, book_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add review');
      }
    }
  };
  
  // const deleteReview = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/reviews/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/');
  //     } else {
  //       alert('Failed to delete review');
  //     }
  //   }
  // };

  document
  .querySelector('.new-review')
  .addEventListener('submit', newReview);

  // document
  // .querySelector('.delete-review')
  // .addEventListener('click', deleteReview);