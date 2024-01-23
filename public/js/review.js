const newReview = async (event) => {
    event.preventDefault();
  
    const header = document.querySelector('#review-header').value.trim();
    const body = document.querySelector('#review-body').value.trim();
    const recommendation = document.querySelector('#boolean').value.trim();
  
    if (header && body && recommendation) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        // recommendation is boolean value
        body: JSON.stringify({ header, body, recommendation }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add book');
      }
    }
  };
  
  const deleteReview = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete review');
      }
    }
  };

  document
  .querySelector('.new-review')
  .addEventListener('submit', newReview);

  document
  .querySelector('.delete-review')
  .addEventListener('click', deleteReview);