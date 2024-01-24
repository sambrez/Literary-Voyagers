module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    get_thumbsUp: () => {
        return `<span for="img" aria-label="thumbs up">👍</span>`;
    },
    get_thumbsDown: () => {
        return `<span for="img" aria-label="thumbs down">👎</span>`;
    },
  };
  