const API_BASE = "https://admin.omkarmishra.in/api";
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const projectGrid = document.getElementById("projectGrid");
const blogGrid = document.getElementById("blogGrid");
const stackPreview = document.getElementById("stackPreview");
const stackPreviewTitle = document.getElementById("stackPreviewTitle");
const stackPreviewDesc = document.getElementById("stackPreviewDesc");

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

/* theme */
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

function syncThemeToggle() {
  if (!themeToggle) return;
  const isDark = document.body.classList.contains("dark");
  themeToggle.setAttribute("data-theme", isDark ? "dark" : "light");
}

syncThemeToggle();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
    syncThemeToggle();
  });
}

let projectsData = [];
let blogsData = [];
let siteData = null;
let researchLogsData = [];

function renderProjects() {
  if (!projectGrid) return;

  projectGrid.innerHTML = projectsData
    .map(
      (project) => `
        <a class="project-card project-card-premium reveal" href="project.html?slug=${project.slug}">
          <div class="project-card__glow"></div>

          <div class="project-card-top">
            <p class="project-label">${project.label || ""}</p>
            <span class="project-index">${project.index || ""}</span>
          </div>

          <h3>${project.title || ""}</h3>
          <p>${project.summary || ""}</p>

          <div class="project-footer">
            <div class="project-mini-tags">
              ${(project.tags || []).map((tag) => `<span>${tag.name}</span>`).join("")}
            </div>
            <span class="project-arrow">↗</span>
          </div>
        </a>
      `
    )
    .join("");

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function renderBlogs() {
  if (!blogGrid) return;

  blogGrid.innerHTML = blogsData
    .map(
      (blog, index) => `
        <a class="blog-card blog-card--${(index % 3) + 1} reveal" href="blog.html?slug=${blog.slug}">
          <p class="blog-type">${blog.blog_type || ""}</p>
          <h3>${blog.title || ""}</h3>
          <p>${blog.summary || ""}</p>
        </a>
      `
    )
    .join("");

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

async function loadHomeData() {
  try {
    const res = await fetch(`${API_BASE}/home/`);
    const data = await res.json();

    siteData = data.site || null;
    projectsData = data.projects || [];
    blogsData = data.blogs || [];
    researchLogsData = data.research_logs || [];

    renderSiteContent();
    renderProjects();
    renderBlogs();
    renderResearchLog();
    applyStackData();
    applyHeroMetrics();
    applySignalStrip();
    applyNoteCard();
  } catch (error) {
    console.error("Failed to load backend data:", error);
  }
}

function renderSiteContent() {
  if (!siteData) return;

  const eyebrow = document.querySelector(".eyebrow");
  const miniLine = document.querySelector(".hero-mini-line");
  const role = document.querySelector(".role");
  const aboutText = document.querySelector(".about-text");
  const brand = document.querySelector(".brand");
  const contactText = document.querySelector(".contact-text");

  const title = document.querySelector(".hero-title-wrap h1");
  if (title) {
    title.innerHTML = `
      ${siteData.hero_title_prefix || ""}
      <span class="gradient-text">${siteData.hero_title_highlight || ""}</span>
      ${siteData.hero_title_suffix || ""}
    `;
  }

  if (eyebrow) eyebrow.textContent = siteData.hero_eyebrow || "";
  if (miniLine) miniLine.textContent = siteData.hero_mini_line || "";
  if (role) role.textContent = siteData.role || "";
  if (aboutText) aboutText.textContent = siteData.about_text || "";
  if (brand) brand.textContent = siteData.site_title || "Omkar Mishra";
  if (contactText) contactText.textContent = siteData.email || "";

  const githubBtn = document.querySelector(".btn-dark");
  if (githubBtn && siteData.github_url) {
    githubBtn.href = siteData.github_url;
  }
}

function applyHeroMetrics() {
  if (!siteData) return;

  const metricsWrap = document.querySelector(".hero-metrics");
  if (!metricsWrap) return;

  metricsWrap.innerHTML = (siteData.hero_metrics || [])
    .map(
      (item) => `
        <div class="metric-card">
          <span class="metric-label">${item.label || ""}</span>
          <strong>${item.value || ""}</strong>
        </div>
      `
    )
    .join("");
}

function applyStackData() {
  if (!siteData) return;

  const stackGrid = document.getElementById("stackGrid");
  if (!stackGrid) return;

  stackGrid.innerHTML = (siteData.stack_items || [])
    .map(
      (item) => `
        <div class="stack-chip" data-title="${item.name || ""}" data-desc="${item.description || ""}">
          <span>${item.name || ""}</span>
          <i></i>
        </div>
      `
    )
    .join("");

  bindStackChipEffects();
}

function applySignalStrip() {
  if (!siteData) return;

  const strip = document.querySelector(".signal-strip");
  if (!strip) return;

  strip.innerHTML = (siteData.signal_strip || [])
    .map((item) => `<span>${item.text || ""}</span>`)
    .join("");
}

function applyNoteCard() {
  if (!siteData || !siteData.note_cards || !siteData.note_cards.length) return;

  const note = siteData.note_cards[0];
  const noteLabel = document.querySelector(".read-card__label");
  const noteContent = document.querySelector(".notes-orbit__content p");

  if (noteLabel) noteLabel.textContent = note.title || "Notes";
  if (noteContent) noteContent.textContent = note.content || "";
}
function renderResearchLog() {
  const researchLogGrid = document.getElementById("researchLogGrid");
  if (!researchLogGrid) return;

  if (!researchLogsData.length) {
    researchLogGrid.innerHTML = "";
    return;
  }

  researchLogGrid.innerHTML = researchLogsData
    .map(
      (log) => `
        <article class="log-card reveal">
          <a class="log-card__link" href="note.html?slug=${log.slug}">
            <div class="log-card__meta">
              <span>${log.meta_one || ""}</span>
              <span>${log.meta_two || ""}</span>
            </div>
            <h3>${log.title || ""}</h3>
            <p>${log.content || ""}</p>
          </a>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
/* stack chip interactions */
function bindStackChipEffects() {
  const stackChips = document.querySelectorAll(".stack-chip");

  stackChips.forEach((chip) => {
    chip.addEventListener("mouseenter", () => {
      const title = chip.dataset.title || "Stack Item";
      const desc = chip.dataset.desc || "Details coming soon.";
      if (stackPreviewTitle) stackPreviewTitle.textContent = title;
      if (stackPreviewDesc) stackPreviewDesc.textContent = desc;
      if (stackPreview) stackPreview.classList.add("active");
    });

    chip.addEventListener("mousemove", (e) => {
      const rect = chip.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      chip.style.setProperty("--x", `${x}px`);
      chip.style.setProperty("--y", `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 10;

      chip.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.04)`;
    });

    chip.addEventListener("mouseleave", () => {
      chip.style.transform = "";
      if (stackPreview) stackPreview.classList.remove("active");
    });
  });
}

/* reveal */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

loadHomeData();