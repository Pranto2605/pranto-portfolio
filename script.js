function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Close mobile menu after clicking a link
const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.remove("active");
  });
});