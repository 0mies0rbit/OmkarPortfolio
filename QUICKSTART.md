# 🚀 Quick Start Guide

## What You Have

Your portfolio website consists of 3 main files:

- **index.html** - Your main website page
- **styles.css** - All the styling and layout
- **script.js** - Interactive features (theme toggle, smooth scrolling)

## Step 1: View Your Website

Just open `index.html` in your web browser to see it live!

## Step 2: Customize Your Details

Open `index.html` in a text editor and find and replace:

| Find This | Replace With |
|-----------|--------------|
| `your.email@example.com` | Your actual email |
| `yourusername` | Your GitHub username |
| `https://linkedin.com/in/yourprofile` | Your LinkedIn URL |

## Step 3: Add Your Projects

In `index.html`, find the "Featured Projects" section and update the 4 project cards:

```html
<h3 class="project-title">YOUR PROJECT NAME</h3>
<p class="project-description">YOUR PROJECT DESCRIPTION</p>
```

Update the GitHub link:
```html
<a href="https://github.com/yourusername/your-repo" class="link-btn github" target="_blank">GitHub</a>
```

Duplicate the cards as many times as you need!

## Step 4: Update About Section

Find "About Me" section and edit:
- Your skills (Languages, Tools, Specializations)
- Your description

## Step 5: Add Research Items

In the "Research & Simulations" section, update the research topics to match your work.

## Step 6: Deploy to GitHub Pages (FREE HOSTING)

### Quick Setup:
1. Go to github.com and create a repo named: `yourusername.github.io`
2. Upload these files to that repository
3. Your site goes live at: `https://yourusername.github.io`

### Using Git:
```bash
# Create/clone repo
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Add your files here (index.html, styles.css, script.js)

# Upload to GitHub
git add .
git commit -m "Portfolio added"
git push
```

## Color Customization (Optional)

Edit `styles.css` to change colors:

```css
:root {
    --primary-color: #00d9ff;      /* Main cyan color */
    --secondary-color: #7c3aed;    /* Purple accent */
    --accent-color: #ff006e;       /* Pink/Red */
}
```

## Dark/Light Mode

Your site automatically has a theme toggle (moon icon) in the top-right. It saves the user's choice!

## Adding Project Pages

1. Copy `project-template.html` and rename it (e.g., `n-body-simulation.html`)
2. Customize it with your project details
3. In `index.html`, update the project card link:
   ```html
   <a href="n-body-simulation.html" class="link-btn">View Project</a>
   ```

## Testing Checklist

- ✅ Website looks good on your phone
- ✅ All links work
- ✅ Theme toggle works (light/dark mode)
- ✅ Navigation smooth scrolls
- ✅ All your projects are listed
- ✅ Contact info is correct

## Common Issues

**Q: How do I add project images?**  
A: Update the project card to include an image:
```html
<div class="project-image">
    <img src="path/to/image.png" alt="Project image" style="width:100%; border-radius: 8px;">
</div>
```

**Q: How do I embed visualizations?**  
A: Use an iframe:
```html
<iframe src="path/to/visualization.html" width="100%" height="600px" style="border: none; border-radius: 12px;"></iframe>
```

**Q: GitHub Pages not showing my site?**  
A: Check:
1. Repository is PUBLIC
2. Repository is named `yourusername.github.io`
3. Files are in the main branch
4. Wait 1-2 minutes for GitHub to deploy

## That's It!

You now have a professional portfolio website! 🎉

For more detailed setup instructions, see `README.md`
