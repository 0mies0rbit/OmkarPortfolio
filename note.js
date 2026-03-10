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

async function loadNote() {
  const slug = getSlugFromUrl();

  const noteMeta = document.getElementById("noteMeta");
  const noteTitle = document.getElementById("noteTitle");
  const noteContent = document.getElementById("noteContent");

  if (!slug) {
    if (noteTitle) noteTitle.textContent = "Note not found";
    if (noteContent) noteContent.textContent = "No slug was provided in the URL.";
    return;
  }

  try {
    const url = `${API_BASE}/research-logs/${slug}/`;
    console.log("Fetching note from:", url);

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const note = await res.json();
    console.log("Loaded note:", note);

    if (noteMeta) {
      noteMeta.innerHTML = `
        <span>${note.meta_one || ""}</span>
        <span>${note.meta_two || ""}</span>
      `;
    }

    if (noteTitle) noteTitle.textContent = note.title || "";
    if (noteContent) noteContent.textContent = note.content || "";
  } catch (error) {
    console.error("Failed to load note:", error);
    if (noteTitle) noteTitle.textContent = "Failed to load note";
    if (noteContent) {
      noteContent.textContent =
        "The note could not be fetched. Check the slug, backend route, and browser console.";
    }
  }
}

applySavedTheme();
loadNote();