const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

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

const SUPABASE_URL = "sb_publishable_kBNG-nig0ROdWofVk1bvYw_1soqZWnu";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrc3RldmZwdGJ5cm1sb2ZoY29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4NDg1MjIsImV4cCI6MjA4ODQyNDUyMn0.YTU04AepLP1ifOSdWczeqH8ZFCGdl0z-viyj7wQV6o8";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadProjects() {
  const container = document.querySelector(".project-grid");
  if (!container) return;

  const { data, error } = await db
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error);
    container.innerHTML = `
      <div class="project-card muted">
        <p class="project-label">Error</p>
        <h3>Projects could not be loaded</h3>
        <p>Check your Supabase URL, key, table, and policy.</p>
      </div>
    `;
    return;
  }

  if (!data || data.length === 0) {
    container.innerHTML = `
      <div class="project-card muted">
        <p class="project-label">Future</p>
        <h3>No projects yet</h3>
        <p>Projects added from the backend will appear here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = data.map(project => `
    <a class="project-card" href="project.html?slug=${encodeURIComponent(project.slug)}">
      <p class="project-label">Project</p>
      <h3>${project.title}</h3>
      <p>${project.summary || ""}</p>
    </a>
  `).join("");
}

loadProjects();
