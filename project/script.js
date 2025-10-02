const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.getElementById("downloadResume").addEventListener("click", function() {
  // Replace with your actual resume file path
  const resumeUrl = "index_assets/Dow_Averie_Resume_2025.pdf"

  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Dow_Averie_Resume_2025.pdf"; // file name for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

