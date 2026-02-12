<!-- 
    CUSTOMIZATION REFERENCE GUIDE
    This file maps all editable content in your portfolio
    Use Ctrl+F (Find) to locate each section in the files mentioned
-->

========================================
IMPORTANT EDITABLE SECTIONS
========================================

📄 FILE: index.html
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🖼️ PROFILE IMAGE (Line 31)
   SECTION: Hero Section
   CURRENT: <img src="assets/img/profile-placeholder.jpg" alt="Mohanapriya S" class="profile-img">
   ACTION: Replace "profile-placeholder.jpg" with your image filename
   EXAMPLE: <img src="assets/img/my-photo.jpg" alt="Mohanapriya S" class="profile-img">

👋 ABOUT SECTION (Lines 84-98)
   SECTION: About Me
   ACTION: Replace the 3 paragraphs with your personal story
   CURRENT: Generic placeholder text
   WRITING TIPS:
   - Keep it 2-3 paragraphs
   - Professional but personable tone
   - Mention your interests and career goals
   - Highlight what makes you unique

🎯 SKILLS SECTION (Lines 145-190)
   SECTION: Skills Categories
   ACTION: Update or add skill categories
   CATEGORIES:
   - Languages (Line 152-158)
   - Databases (Line 160-165)
   - Frontend (Line 167-172)
   - Backend (Line 174-179)
   - Tools (Line 181-187)
   - Advanced Technologies (Line 189-195)

🔧 TECHNOLOGY CARDS (Lines 214-291)
   SECTION: Interactive Technology Section
   ACTION: Modify descriptions or replace technologies
   STRUCTURE: 
   - Icon emoji (can change)
   - Tech name (update if needed)
   - Description (update description)

📱 PROJECTS SECTION (Lines 254-275)
   SECTION: Projects Showcase
   ACTION: Add more projects by duplicating the project card
   CURRENT PROJECT: Blockchain Event Ledger (Already complete)
   TO ADD MORE:
   1. Duplicate the entire <div class="project-card">...</div> block
   2. Update project title
   3. Update project description
   4. Update tech badges (add/remove technologies)
   5. Update GitHub link (line 272)

📞 CONTACT SECTION (Lines 334-377)
   SECTION: Contact Information

   Phone (Lines 334-339):
   CURRENT: +91-XXXXXXXXXX
   CHANGE: Replace with your actual phone number
   EXAMPLE: +91-9876543210

   Email (Lines 346-351):
   STATUS: Already set correctly ✅
   EMAIL: mohanapriyas172005@gmail.com

   GitHub (Lines 358-363):
   STATUS: Already set correctly ✅
   LINK: https://github.com/priyak-2004

   LinkedIn (Lines 370-375):
   STATUS: Already set correctly ✅
   LINK: https://www.linkedin.com/in/mohanapriya-s


🎨 FILE: assets/css/styles.css
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌈 COLOR SCHEME (Lines 10-16)
   CURRENT COLORS:
   --primary-color: #2c3e50;       (Dark blue - main text)
   --secondary-color: #3498db;     (Light blue - accents)
   --accent-color: #e74c3c;        (Red - highlights)
   --background-color: #f8f9fa;    (Light gray - page background)

   TO CHANGE:
   Find the :root { section at top
   Replace hex color codes with your colors
   EXAMPLE: #ff6b6b (bright red), #667eea (purple), #4facfe (cyan)

📏 SPACING VALUES (Lines 18-24)
   CURRENT: Standard spacing used throughout
   TO ADJUST: Modify --spacing-sm, --spacing-md, --spacing-lg values

🔤 TYPOGRAPHY (Lines 26-34)
   FONT: Default is 'Segoe UI' / Tahoma / Geneva
   TO CHANGE: 
   Find "font-family: " in body section
   Replace with: font-family: 'Your Font', fallback;
   POPULAR OPTIONS: 'Poppins', 'Inter', 'Playfair Display'

⏱️ ANIMATION DELAYS (Throughout file)
   CURRENT: 0.3s to 0.8s transitions
   TO ADJUST: Look for "transition: " and change timing values


⚙️ FILE: assets/js/script.js
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📥 RESUME DOWNLOAD (Line 69)
   CURRENT: COMMENTED OUT
   TO ENABLE:
   1. Save your resume as "resume.pdf" in assets/ folder
   2. Uncomment line 69: Remove // at start
   3. OR change filename to match your resume name
   
   CURRENT LINE:
   // window.location.href = 'assets/resume.pdf';
   
   AFTER EDIT:
   window.location.href = 'assets/Mohanapriya_Resume.pdf';

🔤 CONSOLE MESSAGE (Lines 233-237)
   CURRENT: Welcome message in browser console
   TO CUSTOMIZE: Edit text in console.log() lines
   VISIBLE: Press F12 → Console tab when visiting portfolio

💬 FORM VALIDATION (Lines 196-208)
   CURRENT: Functions for future form use
   STATUS: Available but not active
   USE: When adding contact form in future


========================================
STEP-BY-STEP CUSTOMIZATION CHECKLIST
========================================

CRITICAL CHANGES (Must Do):
☐ Add profile photo to assets/img/ folder
☐ Update phone number in index.html line 335
☐ Verify GitHub link (already set)
☐ Verify LinkedIn link (already set)
☐ Verify email (already set)

RECOMMENDED CHANGES (Should Do):
☐ Update About section (3 paragraphs)
☐ Review and adjust Skills if needed
☐ Add resume PDF to assets/ folder
☐ Uncomment resume download in script.js line 69
☐ Add additional projects if you have them

OPTIONAL ENHANCEMENTS (Can Do):
☐ Change color scheme in styles.css
☐ Add more technologies to Technology section
☐ Update animation speeds
☐ Add custom fonts
☐ Enable dark mode toggle
☐ Add scroll-to-top button


========================================
FILE TO USE FOR DIFFERENT TASKS
========================================

Task                          File & Lines
─────────────────────────────────────────
Change colors                 styles.css (10-16)
Add profile photo             index.html (31)
Update about me               index.html (84-98)
Add skills                    index.html (145-190)
Modify tech stack             index.html (214-291)
Add new project               index.html (254-275)
Update contact info           index.html (334-377)
Enable resume download        script.js (69)
Change fonts/spacing          styles.css (entire :root section)
Adjust animations             styles.css (@keyframes sections)


========================================
QUICK REPLACE GUIDE - Find & Replace
========================================

Use Ctrl+H (Find & Replace) in VS Code:

FIND                          REPLACE WITH
─────────────────────────────────────────
profile-placeholder.jpg       your-image.jpg
+91-XXXXXXXXXX               +91-9876543210
mohanapriyas172005@gmail.com  your-email@gmail.com
#3498db                       your-accent-color
"Mohanapriya S"              your-name


========================================
FREQUENTLY CHANGED SECTIONS
========================================

1. HERO SECTION
   Location: Lines 46-77 (index.html)
   Already set correctly - No changes needed
   The tagline and job title are predefined

2. ABOUT SECTION  
   Location: Lines 84-98 (index.html)
   Status: NEEDS YOUR INPUT
   Replace 3 paragraphs with your story

3. CONTACT INFORMATION
   Phone: Line 335
   Email: Line 335 (correct)
   GitHub: Line 367 (correct)
   LinkedIn: Line 376 (correct)

4. PROJECTS
   Location: Lines 254-291 (index.html)
   Status: ONE PROJECT ADDED (Blockchain)
   To add more: Duplicate the project-card div


========================================
BEFORE YOU DEPLOY
========================================

Testing Checklist:
☐ Test on desktop (Chrome, Firefox, Safari, Edge)
☐ Test on mobile (iPhone, Android)
☐ Test on tablet
☐ All links work
☐ Images display correctly
☐ Navigation highlights current section
☐ Mobile menu opens/closes properly
☐ Download resume button works
☐ Animations are smooth
☐ No console errors (F12 → Console)


========================================
DEPLOYMENT URLS
========================================

GitHub Pages:        https://github.com
Netlify:            https://netlify.com
Vercel:             https://vercel.com
1&1:                https://www.1and1.com
Hostinger:          https://www.hostinger.com


========================================
HELPFUL RESOURCES
========================================

Color Pickers:
- Color Hunt: colorhunt.co
- Coolors: coolors.co
- Adobe Color: color.adobe.com

Fonts:
- Google Fonts: fonts.google.com
- Font Awesome: fontawesome.com

Icons & Emojis:
- Unicode: unicode.org
- Emojipedia: emojipedia.org
- Tabler Icons: tabler-icons.io

Learning:
- MDN Docs: developer.mozilla.org
- CSS-Tricks: css-tricks.com
- JavaScript.info: javascript.info


========================================
SUPPORT & TROUBLESHOOTING
========================================

Refer to:
1. README.md - Full documentation
2. QUICK_START.md - Getting started guide
3. Browser Console (F12) - Error messages
4. VS Code - Code validation and suggestions

Search files using:
- Ctrl+F (Find)
- Ctrl+H (Find & Replace)
- Ctrl+Shift+F (Find in all files)


========================================
VERSION INFORMATION
========================================

Portfolio Version: 1.0
Created: February 12, 2026
Technology: HTML5, CSS3, JavaScript (Vanilla)
Browser Support: All modern browsers
Mobile Optimized: Yes (Responsive design)
Dependencies: None (Pure HTML/CSS/JS)


========================================
README FILES
========================================

3 Documentation Files Included:

1. README.md
   - Complete feature documentation
   - Installation & setup guide
   - Deployment options
   - Browser compatibility
   - Troubleshooting guide

2. QUICK_START.md
   - 3-step quick start
   - Essential updates
   - Testing locally
   - Pre-deployment checklist

3. CUSTOMIZATION_GUIDE.md (This file)
   - Location of all editable content
   - Line numbers for quick reference
   - Customization checklist
   - Helpful resources


Start with QUICK_START.md → Then use this guide for detailed customization!
