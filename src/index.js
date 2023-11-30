const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = e.target.children[1].value;

    fetch("http://localhost:3000/movies/"+inputValue)
    .then(res => res.json())
    .then(data => {
        const title = document.querySelector("section#movieDetails h4");
        title.textContent = data.title;
        const summary = document.querySelector("section#movieDetails p");
        summary.textContent = data.summary;
    })
  })
}

document.addEventListener('DOMContentLoaded', init);