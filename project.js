/*
  Backend-ready project detail page.
  Later your backend can return:
  GET /projects/:slug

  Example shape:
  {
    title,
    subtitle,
    githubUrl,
    externalUrl,
    description,
    details,
    tags: [],
    media: [{ type, title, url }]
  }
*/

const API_BASE_URL = "";

const demoProjects = {
  "chimera-demo": {
    title: "Project Chimera",
    subtitle: "Energy-constrained orbital learning architecture",
    githubUrl: "https://github.com/0mies0rbit",
    externalUrl: "#",
    description:
      "Project Chimera is structured as a computational astrophysics case study around long-timescale orbital evolution, numerical drift, and surrogate modeling constrained by physical conservation laws.",
    details:
      "The architecture is organized around the problem of energy drift in long-horizon integration. It is designed to document the physics problem, the computational pipeline, and the learning strategy in one place. Future versions of this page can be filled from a backend with full project text, screenshots, graphs, simulation videos, and embedded interactive outputs.",
    tags: ["PyTorch", "REBOUND", "NumPy", "C", "Hamiltonian Mechanics", "N-body"],
    media: [
      { type: "placeholder", title: "Simulation screenshot slot" },
      { type: "placeholder", title: "Interactive graph slot" },
      { type: "placeholder", title: "Video or animation slot" },
      { type: "placeholder", title: "Additional output slot" }
    ]
  }
};

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug") || "chimera-demo";
}

async function getProject(slug) {
  if (!API_BASE_URL) return demoProjects[slug] || demoProjects["chimera-demo"];

  try {
    const res = await fetch(`${API_BASE_URL}/projects/${slug}`);
    if (!res.ok) throw new Error("Failed to fetch project");
    return await res.json();
  } catch (error) {
    console.error(error);
    return demoProjects[slug] || demoProjects["chimera-demo"];
  }
}

function renderProject(project) {
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectSubtitle").textContent = project.subtitle;
  document.getElementById("projectDescription").textContent = project.description;
  document.getElementById("projectDetails").textContent = project.details;

  const tags = document.getElementById("projectTags");
  tags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");

  const links = document.getElementById("projectLinks");
  links.innerHTML = `
    <a href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub Repository</a>
    <a href="${project.externalUrl}" target="_blank" rel="noreferrer">Additional Project Link</a>
  `;

  const media = document.getElementById("projectMedia");
  media.innerHTML = project.media.map(item => `
    <div class="media-placeholder">${item.title}</div>
  `).join("");
}

(async function initProjectPage() {
  const slug = getSlug();
  const project = await getProject(slug);
  renderProject(project);
})();

// Array of video sources (replace with your actual video paths)
const videoSources = [
    'movie.mp4'
];

const container = document.getElementById('video-container');

// Loop through the sources and create video elements
videoSources.forEach(videoSrc => {
    // 1. Create a new div for each video (optional, for layout control)
    const videoWrapper = document.createElement('div');
    videoWrapper.style.width = '100%';
    videoWrapper.style.height = '100%';

    // 2. Create the video element
    const videoElement = document.createElement('video');

    // 3. Set the attributes for GIF-like behavior
    videoElement.setAttribute('autoplay', ''); // Autoplays the video
    videoElement.setAttribute('loop', '');     // Repeats the video indefinitely
    videoElement.setAttribute('muted', '');     // Mutes the video (required for autoplay in most browsers)
    videoElement.setAttribute('playsinline', ''); // Plays inline on iOS devices, not fullscreen
    videoElement.setAttribute('src', videoSrc); // Set the video source

    // Optional: Add a fallback for older browsers or set width/height
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.objectFit = 'cover';
    // You could also add multiple <source> elements for compatibility (e.g., mp4 and webm)

    // 4. Append the video element to the wrapper div, and the wrapper to the container
    videoWrapper.appendChild(videoElement);
    container.appendChild(videoWrapper);
});
