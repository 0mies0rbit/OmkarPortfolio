const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const projectGrid = document.getElementById("projectGrid");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

/* Theme */
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
  });
}

/* Main page projects only
   Later replace demoProjects with backend data */
const demoProjects = [
  {
    label: "Demo",
    title: "Project Placeholder",
    summary: "Project page structure for future work.",
    href: "project.html"
  },
  
];

function renderProjects() {
  if (!projectGrid) return;

  projectGrid.innerHTML = demoProjects
    .map((project) => {
      if (project.muted) {
        return `
          <div class="project-card muted">
            <p class="project-label">${project.label}</p>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
          </div>
        `;
      }

      return `
        <a class="project-card" href="${project.href}">
          <p class="project-label">${project.label}</p>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
        </a>
      `;
    })
    .join("");
}

renderProjects();