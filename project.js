const API_BASE = "https://admin.omkarmishra.in/api";

function getSlugFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug");
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
}

async function loadProject() {
  const slug = getSlugFromUrl();

const projectDescription = document.getElementById("projectDescription");
const projectDetails = document.getElementById("projectDetails");
const projectTags = document.getElementById("projectTags");
const projectLinks = document.getElementById("projectLinks");
const projectMedia = document.getElementById("projectMedia");

  if (!slug) {
    if (projectTitle) projectTitle.textContent = "Project not found";
    if (projectSummary) projectSummary.textContent = "No slug was provided in the URL.";
    return;
  }

  try {
    const url = `${API_BASE}/projects/${slug}/`;
    console.log("Fetching project from:", url);

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const project = await res.json();
    console.log("Loaded project:", project);

    if (projectMeta) {
      projectMeta.innerHTML = `
        <span>${project.label || ""}</span>
        <span>${project.index || ""}</span>
      `;
    }

    if (projectTitle) projectTitle.textContent = project.title || "";
    if (projectSummary) projectSummary.textContent = project.summary || "";

    if (projectTopStats) {
      projectTopStats.innerHTML = `
        <div class="metric-card">
          <span class="metric-label">Category</span>
          <strong>${project.category || ""}</strong>
        </div>
        <div class="metric-card">
          <span class="metric-label">Status</span>
          <strong>${project.status || ""}</strong>
        </div>
        <div class="metric-card">
          <span class="metric-label">Focus</span>
          <strong>${project.focus || ""}</strong>
        </div>
      `;
    }

    if (projectDescription) projectDescription.textContent = project.description || "";
    if (projectDetails) projectDetails.textContent = project.details || "";

    if (projectTags) {
      projectTags.innerHTML = (project.tags || [])
        .map((tag) => `<span>${tag.name}</span>`)
        .join("");
    }

    if (projectMedia) {
  projectMedia.innerHTML = (project.media || [])
    .map((item) => {
      if (item.media_type === "image" && item.image_url) {
        return `
          <figure class="project-media-card project-media-card--${item.size || "small"}">
            <img src="${item.image_url}" alt="${item.title || ""}" class="project-media-image" />
            <figcaption>${item.title || ""}</figcaption>
          </figure>
        `;
      }

      if (item.media_type === "video" && item.video_url) {
        return `
          <figure class="project-media-card project-media-card--${item.size || "small"}">
            <video controls class="project-media-video">
              <source src="${item.video_url}" />
            </video>
            <figcaption>${item.title || ""}</figcaption>
          </figure>
        `;
      }

      return `
        <div class="project-media-card project-media-card--${item.size || "small"}">
          <div class="project-media-placeholder">${item.placeholder_text || item.title || "Media block"}</div>
        </div>
      `;
    })
    .join("");
  }
  } catch (error) {
    console.error("Failed to load project:", error);
    if (projectTitle) projectTitle.textContent = "Failed to load project";
    if (projectSummary) {
      projectSummary.textContent =
        "The project could not be fetched. Check the slug, backend route, and browser console.";
    }
  }
}

applySavedTheme();
loadProject();