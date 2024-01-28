const containerOne = document.getElementById('1');
console.log(containerOne);

one.addEventListener("click", function(event) {
  const element = event.target;

  if (element.matches("h5")) {
    const title = element.innerHTML;
    console.log(title);
  }
});

<a href="/profile/add_book"></a>