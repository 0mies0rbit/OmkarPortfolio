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

async function loadBlog() {
  const slug = getSlugFromUrl();

  const blogMeta = document.getElementById("blogMeta");
  const blogTitle = document.getElementById("blogTitle");
  const blogType = document.getElementById("blogType");
  const blogSummary = document.getElementById("blogSummary");
  const blogContent = document.getElementById("blogContent");

  if (!slug) {
    if (blogTitle) blogTitle.textContent = "Blog not found";
    if (blogSummary) blogSummary.textContent = "No slug was provided in the URL.";
    return;
  }

  try {
    const url = `${API_BASE}/blogs/${slug}/`;
    console.log("Fetching blog from:", url);

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const blog = await res.json();
    console.log("Loaded blog:", blog);

    if (blogMeta) {
      blogMeta.innerHTML = `<span>${blog.blog_type || ""}</span>`;
    }

    if (blogTitle) blogTitle.textContent = blog.title || "";
    if (blogType) blogType.textContent = blog.blog_type || "";
    if (blogSummary) blogSummary.textContent = blog.summary || "";
    if (blogContent) blogContent.textContent = blog.content || "";
  } catch (error) {
    console.error("Failed to load blog:", error);
    if (blogTitle) blogTitle.textContent = "Failed to load blog";
    if (blogSummary) {
      blogSummary.textContent =
        "The blog could not be fetched. Check the slug, backend route, and browser console.";
    }
  }
}

applySavedTheme();
loadBlog();