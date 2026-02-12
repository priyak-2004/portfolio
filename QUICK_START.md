# 🎯 Quick Start Guide - Mohanapriya S Portfolio

## ⚡ Get Started in 3 Steps

### Step 1: Add Your Profile Photo
1. Go to `assets/img/` folder
2. Place your profile photo there
3. Name it `profile-placeholder.jpg` or update the filename in `index.html` line 31

**Recommended photo specs:**
- Resolution: 400x500px or larger
- Format: JPG, PNG, or WebP
- Size: Less than 500KB
- Aspect ratio: Portrait (1:1.25)

### Step 2: Update Your Contact Info
Edit these lines in `index.html`:
- **Line 338**: Phone number (currently +91-XXXXXXXXXX)
- **Line 335**: Email (already set to your email)
- **Line 367**: GitHub link (already set to your GitHub)
- **Line 376**: LinkedIn link (already set to your LinkedIn)

### Step 3: Add Your Resume
1. Save your resume as `resume.pdf` in `assets/` folder
2. Open `assets/js/script.js`
3. Find line 69 (search for "window.location.href")
4. Uncomment it by removing `//` at the beginning
5. Update the filename if different from `resume.pdf`

## 📝 What to Customize

### Essential Updates (Must Do)
- [ ] Add profile photo to `assets/img/`
- [ ] Update phone number in Contact section
- [ ] Add resume PDF to project
- [ ] Test all social media links

### Content Updates (Recommended)
- [ ] Update "About Me" section with your story
- [ ] Verify all skills are accurate
- [ ] Add your blockchain/distributed systems project details
- [ ] Review technology stack matches your experience

### Optional Enhancements
- [ ] Change color scheme (update CSS variables)
- [ ] Add more projects
- [ ] Add dark mode
- [ ] Implement contact form

## 🎨 Color Customization

To change the website colors, edit `assets/css/styles.css` (lines 10-12):

```css
--primary-color: #2c3e50;       /* Dark blue - main text */
--secondary-color: #3498db;     /* Light blue - accents & buttons */
--accent-color: #e74c3c;        /* Red - highlights */
```

## 📁 Folder Structure Reference

```
Portfolio/
├── index.html                    ← Main portfolio page
├── assets/
│   ├── css/
│   │   └── styles.css           ← All styling & animations
│   ├── js/
│   │   └── script.js            ← Interactions & smooth scroll
│   └── img/
│       └── profile-placeholder.jpg  ← YOUR PHOTO HERE
└── README.md                     ← Full documentation
```

## 🚀 Testing Locally

### Option 1: Direct Browser (Simplest)
1. Locate `index.html`
2. Right-click → "Open with" → Your browser
3. Or drag & drop into browser window

### Option 2: Local Server (Recommended)

**Windows PowerShell:**
```powershell
python -m http.server 8000
```

**macOS/Linux Terminal:**
```bash
python3 -m http.server 8000
```

Then visit: `http://localhost:8000`

## ✅ Pre-Deployment Checklist

Before sharing your portfolio:
- [ ] Profile photo displays correctly
- [ ] All links work (GitHub, LinkedIn, Email)
- [ ] Phone number is correct
- [ ] Resume downloads properly
- [ ] Website is responsive (test on mobile)
- [ ] No broken images or styling
- [ ] Grammar/spelling is correct
- [ ] All sections include relevant content

## 🌐 Deployment (Pick One)

### GitHub Pages (Recommended - Free)
1. Create GitHub repo: `username.github.io`
2. Push files to repo
3. Enable Pages in Settings
4. Access at: `https://username.github.io`

### Netlify (Free - Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub repo
4. Deploy!

### Your Own Domain
- Buy domain from GoDaddy, Namecheap, etc.
- Point to GitHub Pages or Netlify
- Enable HTTPS in settings

## 💬 Section-by-Section Guide

### Hero Section
- Headline: "Hi, I'm Mohanapriya S" ✅ (Already set)
- Subtitle: "Web Developer" ✅ (Already set)
- Tagline: Professional description ✅ (Already set)
- Modify: Add your actual/realistic tagline if needed

### About Section (Edit)
1. Open `index.html`
2. Find line 84 (<!-- About Section -->)
3. Update the 3 paragraphs with your story
4. Keep it 2-3 paragraphs, professional tone

### Skills Section (Ready to Use)
All your skills are already listed! Update if needed:
- Languages: Java, Python, JavaScript, HTML, CSS ✅
- Databases: MySQL, MongoDB ✅
- Frontend: React, Tailwind, Bootstrap ✅
- Backend: Node.js, Express.js ✅
- Tools: VS Code, GitHub, IntelliJ, Excel, Power BI ✅

### Technology Section
Interactive cards showing your tech stack - pre-configured ✅

### Projects Section (Edit)
Your blockchain project is already added! Add more:
1. Duplicate the project card HTML
2. Update title, description
3. Update tech badges
4. Add GitHub link

### Contact Section (Ready to Use)
Phone, Email, GitHub, LinkedIn all configured ✅

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Photo not showing | Check filename matches in HTML, verify in assets/img/ folder |
| Styles look wrong | Clear cache (Ctrl+Shift+R), check CSS file path |
| Links not working | Right-click → Inspect → Check console for errors |
| Mobile menu broken | Check JavaScript file is linked correctly |
| Colors look different | Different browser? Check CSS variables |

## 📞 Quick Links

- **GitHub**: https://github.com/priyak-2004
- **LinkedIn**: https://www.linkedin.com/in/mohanapriya-s
- **Email**: mohanapriyas172005@gmail.com

## 🎓 Learning Resources

To further enhance this portfolio:
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
- [Responsive Design](https://web.dev/responsive-web-design-basics)

---

**Ready to go live?** Follow the deployment section above! 🚀

Need help? Check the README.md for detailed documentation.

Last Updated: February 12, 2026
