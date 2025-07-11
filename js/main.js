document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".experience-btn");
  const contents = document.querySelectorAll(".experience-content");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      contents.forEach(c => c.classList.add("hidden"));

      const id = link.getAttribute("data-id");
      document.getElementById(id).classList.remove("hidden");
    });
  });
});
