# 🌌 Computational Astrophysics Portfolio

A professional, modern portfolio website for showcasing astrophysics projects, research, and simulations.

## ✨ Features

- ✅ **Responsive Design** - Looks great on all devices (desktop, tablet, mobile)
- ✅ **Dark/Light Mode** - Theme toggle with localStorage persistence
- ✅ **Smooth Navigation** - Smooth scrolling and active section highlighting
- ✅ **Project Showcase** - Beautiful grid layout for your projects
- ✅ **Research Section** - Dedicated space for your research and simulations
- ✅ **Skills Display** - Organized skill categories
- ✅ **Contact Information** - Links to email, GitHub, LinkedIn
- ✅ **Modern Aesthetics** - Gradient effects, animations, and professional styling
- ✅ **Fast & Lightweight** - Pure HTML/CSS/JS, no heavy frameworks

## 🚀 Quick Start

### 1. Local Testing
Simply open `index.html` in your browser to preview the site locally.

```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

Or use a simple HTTP server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have it)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

### 2. Customize Your Content

Edit `index.html` and replace the following:

#### Personal Information
```html
<!-- Update the title -->
<title>Your Name - Computational Astrophysics Portfolio</title>

<!-- Update hero section -->
<h1 class="hero-title">Your Title/Focus</h1>
<p class="hero-subtitle">Your tagline here</p>

<!-- Update contact section -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://github.com/yourusername">github.com/yourusername</a>
<a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
```

#### Add Your Projects
Edit the project cards in the "Featured Projects" section:

```html
<div class="project-card">
    <div class="project-header">
        <span class="project-category">Your Category</span>
    </div>
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Your project description</p>
    <div class="project-tags">
        <span class="tag">Technology 1</span>
        <span class="tag">Technology 2</span>
    </div>
    <div class="project-links">
        <a href="https://your-project-link.com" class="link-btn" target="_blank">View Project</a>
        <a href="https://github.com/yourusername/project" class="link-btn github" target="_blank">GitHub</a>
    </div>
</div>
```

#### Add Research Items
Update the research section with your research topics:

```html
<div class="research-item">
    <div class="research-number">01</div>
    <div class="research-content">
        <h3>Your Research Topic</h3>
        <p>Description of your research...</p>
        <a href="link-to-simulation" class="research-link">Explore →</a>
    </div>
</div>
```

#### Update Skills
Modify the skills section under "About Me":

```html
<div class="skill-category">
    <h4>Your Category</h4>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with all features
- **Tablet** (≤768px): Adjusted spacing and grids
- **Mobile** (≤480px): Single column layout, hidden brand text

## 🌍 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click "New" to create a new repository
3. Name it: `yourusername.github.io` (or any name you prefer)
4. Select "Public"
5. Click "Create Repository"

### Step 2: Upload Your Files
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. Copy your portfolio files (index.html, styles.css, script.js) to the repository folder

3. Commit and push:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Under "Source", select "main" branch
4. Click "Save"

Your site will be available at: `https://yourusername.github.io`

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #00d9ff;      /* Cyan accent */
    --secondary-color: #7c3aed;    /* Purple */
    --accent-color: #ff006e;       /* Pink/Red */
    --background: #0a0e27;         /* Dark background */
    --surface: #1a1f3a;            /* Card backgrounds */
    /* ... more colors ... */
}
```

### Add Custom Sections
Follow this template to add new sections:

```html
<section id="your-section" class="section">
    <div class="container">
        <h2 class="section-title">Your Section Title</h2>
        <p class="section-subtitle">Optional subtitle</p>
        <!-- Your content here -->
    </div>
</section>
```

## 📊 Adding Interactive Visualizations

To embed interactive simulations or visualizations:

1. **Jupyter Notebooks**: Use [nbconvert](https://nbconvert.readthedocs.io/) to convert to HTML
2. **Plotly**: Create interactive plots and save as HTML
3. **Three.js**: Build 3D visualizations
4. **D3.js**: Create custom data visualizations

Example of embedding:
```html
<div class="visualization">
    <iframe src="path/to/visualization.html" width="100%" height="600px"></iframe>
</div>
```

## 🔧 Browser Compatibility

- Chrome/Brave ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Internet Explorer ❌ (not supported, uses modern CSS)

## 📝 Project Structure

```
OmkarPortfolio/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript interactivity
├── README.md           # This file
└── projects/           # (Optional) Folder for project pages
    ├── project1.html
    └── project2.html
```

## 💡 Tips for Great Content

1. **Project Descriptions**: Be specific about what you did, technologies used, and outcomes
2. **Visualization**: Add images/plots/videos of your projects when possible
3. **Links**: Always link to your GitHub repositories for code transparency
4. **Keep it Updated**: Add new projects and research as you progress
5. **Professional Photos**: Consider adding a headshot in the hero section or about section

## 🐛 Troubleshooting

### Site not showing up on GitHub Pages?
- Make sure repository is public
- Check that files are in the correct branch (usually `main`)
- Wait a few minutes for GitHub Pages to build (check repository "Actions" tab)

### Styles not loading?
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Make sure CSS file path is correct in index.html
- Check browser console for errors (F12)

### Theme not persisting?
- Check that localStorage is enabled in browser
- Try a different browser

## 📚 Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Plotly.js for Visualizations](https://plotly.com/javascript/)
- [Three.js for 3D Graphics](https://threejs.org/)

## 📄 License

Feel free to use this template for your portfolio. No attribution required!

## 🌟 What's Next?

1. ✏️ Customize the content with your projects
2. 🎨 Adjust colors to match your preference
3. 📸 Add project thumbnails/screenshots
4. 🔗 Link to your GitHub repositories
5. 🚀 Deploy to GitHub Pages

---

**Happy building! Make your astrophysics work shine! 🌌✨**
