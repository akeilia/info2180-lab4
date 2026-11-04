document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("search-btn");
  const input = document.getElementById("search-input");
  const result = document.getElementById("result");

  function search() {
    const query = input.value.trim();
    fetch("superheroes.php?query=" + encodeURIComponent(query))
      .then(res => {
        if (!res.ok) throw new Error("Request failed");
        return res.text();
      })
      .then(html => { result.innerHTML = html; })
      .catch(() => { result.innerHTML = '<p class="error">Something went wrong.</p>'; });
  }

  btn.addEventListener("click", search);
  input.addEventListener("keydown", e => { if (e.key === "Enter") search(); });
});
