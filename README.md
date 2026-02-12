# Mohanapriya S - Personal Portfolio Website

A modern, interactive, and fully responsive personal portfolio website built with HTML, CSS, and JavaScript. Designed with a clean, professional aesthetic similar to the reference portfolio.

## 📁 Project Structure

```
Portfolio/
├── index.html                 # Main HTML file with all sections
├── assets/
│   ├── css/
│   │   └── styles.css        # Main stylesheet with responsive design
│   ├── js/
│   │   └── script.js         # JavaScript for interactions and animations
│   └── img/
│       └── profile-placeholder.jpg  # Replace with your profile photo
└── README.md                  # This file
```

## 🚀 Features

- ✅ **Fixed Navigation Bar** - Smooth scrolling with active section highlighting
- ✅ **Hero Section** - Eye-catching introduction with CTA buttons
- ✅ **About Section** - Professional background information
- ✅ **Skills Section** - Organized skills by category
- ✅ **Technology Section** - Interactive technology cards
- ✅ **Projects Section** - Professional project showcase with GitHub links
- ✅ **Contact Section** - Direct contact options with clickable icons
- ✅ **Smooth Animations** - Fade-in, slide-up, and hover effects
- ✅ **Fully Responsive** - Beautiful on desktop, tablet, and mobile devices
- ✅ **Mobile Menu** - Hamburger menu for mobile navigation
- ✅ **Modern Design** - Clean, recruiter-friendly UI with gradient accents

## 🎨 Customization Guide

### 1. **Replace Profile Image**
   - Add your profile photo to `assets/img/` folder
   - Update the image path in `index.html` line 31:
     ```html
     <img src="assets/img/your-photo.jpg" alt="Mohanapriya S" class="profile-img">
     ```
   - Supported formats: JPG, PNG, GIF, WebP

### 2. **Update Contact Information**
   - Phone number: Line 338 in `index.html`
   - Email: Line 335 (already set to mohanapriyas172005@gmail.com)
   - GitHub & LinkedIn: Already linked

### 3. **Add Resume Download**
   - Place your resume PDF in `assets/` folder (e.g., `resume.pdf`)
   - Uncomment line 69 in `assets/js/script.js`:
     ```javascript
     window.location.href = 'assets/resume.pdf';
     ```

### 4. **Add More Projects**
   - Duplicate the project card HTML (lines 254-275 in `index.html`)
   - Update project title, description, tech stack, and GitHub link

### 5. **Customize Colors**
   - Edit CSS variables in `assets/css/styles.css` (lines 8-18):
     ```css
     --primary-color: #2c3e50;       /* Main color */
     --secondary-color: #3498db;     /* Accent color */
     --accent-color: #e74c3c;        /* Highlight color */
     ```

### 6. **Modify Skills & Technologies**
   - Update skill tags in the Skills section (lines 145-190)
   - Modify technology cards in the Technology section (lines 214-291)
   - Add/remove categories as needed

## 🔧 Installation & Setup

1. **Extract/Download the files** to your desired location
2. **Open in browser** by double-clicking `index.html`
3. **Or** use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js http-server
   npx http-server
   ```
4. Open `http://localhost:8000` in your browser

## 📝 Content Updates

### About Section Edit
- Edit `index.html` lines 84-98
- Keep professional and concise writing

### Skills Update
- Add new skills in the Skills section (lines 145-190)
- Update skill categories as needed

### Add New Project
- Duplicate project card structure
- Update title, description, and tech stack
- Add GitHub link

## 🎯 Navigation Sections

The portfolio includes these sections, all linked in the fixed navigation:

1. **Home** - Hero section with introduction
2. **About** - Professional background
3. **Skills** - Categorized skills overview
4. **Technology** - Interactive tech stack cards
5. **Projects** - Featured projects with links
6. **Contact** - Contact information and social links

## 💻 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

## 🎨 Design Features

- **Smooth Scrolling**: Automatic smooth scroll to sections
- **Active Link Highlighting**: Navigation highlights current section
- **Hover Effects**: Interactive buttons and cards
- **Animations**: Fade-in, slide-up, and float animations on page load
- **Mobile Menu**: Hamburger menu for easy mobile navigation
- **Color Gradient**: Modern gradient backgrounds throughout

## 📦 Dependencies

None! This is a vanilla HTML, CSS, and JavaScript project. No external libraries or frameworks required.

## 🚀 Deployment Options

### GitHub Pages (Free & Recommended)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access at: `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Drag and drop the Portfolio folder
2. Automatic deployment
3. Get custom domain (optional)

### Vercel (Free)
1. Import project from GitHub
2. Automatic deployment on push
3. Free SSL certificate included

### Traditional Hosting
- Upload files via FTP to your web hosting provider
- Access via your domain name

## ✨ Features to Enhance (Optional)

- Add a dark mode toggle
- Implement contact form with email integration
- Add blog section
- Integrate with GitHub API for live project data
- Add scroll-to-top button
- Implement PWA (Progressive Web App)

## 📄 License

This portfolio template is free to use and modify for personal purposes.

## 💡 Tips

1. **SEO Optimization**: Add meta descriptions and keywords in `<head>` tags
2. **Performance**: Optimize images before uploading
3. **Accessibility**: Ensure all links are keyboard navigable
4. **Testing**: Test on multiple devices before deployment
5. **Analytics**: Add Google Analytics for tracking

## 🆘 Troubleshooting

### Images not showing
- Ensure image files are in `assets/img/` folder
- Check file path is correct in HTML
- Verify image format is supported

### Styles not applying
- Clear browser cache (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
- Verify CSS file path is correct
- Check for CSS syntax errors

### JavaScript not working
- Ensure script.js file is in correct location
- Check browser console for errors (F12)
- Verify all HTML IDs match JavaScript selectors

---

**Designed & Built with ❤️ for Mohanapriya S**

For questions or improvements, refer to the code comments in each file.

Last Updated: February 12, 2026
