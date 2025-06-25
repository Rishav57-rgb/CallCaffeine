
// CallCaffeine JS
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const message = form.elements["message"].value.trim();
      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        e.preventDefault();
      }
    });
  }
});
