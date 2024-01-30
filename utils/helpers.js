// helper function for displaying date (wasn't used but for future development)
// helper functions for recommendation emojis

module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    get_thumbsUp: () => {
        return `👍`;
    },
    get_thumbsDown: () => {
        return `👎`;
    },
  };
  