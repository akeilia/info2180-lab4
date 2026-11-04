document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search-btn").addEventListener("click", () => {
    fetch("superheroes.php")
      .then(res => res.text())
      .then(data => alert(data))
      .catch(err => alert("Error: " + err));
  });
});
