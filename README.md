# Isha Singh — Portfolio 🚀

A **React** portfolio with VS Code dark theme, typewriter effect, React Router, and full component structure.

---

## 🗂️ Project Structure

```
isha-portfolio/
├── public/
│   ├── index.html
│   └── Isha_Singh_Resume.pdf     ← PUT YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Navbar.js             ← Fixed top nav with all page links
│   │   ├── Typewriter.js         ← Animated typing effect
│   │   ├── CodeBlock.js          ← VS Code style code renderer
│   │   └── SectionWrapper.js     ← Page layout + scroll reveal
│   ├── pages/
│   │   ├── Home.js               ← Hero: name, photo, social icons only
│   │   ├── About.js              ← About + code block
│   │   ├── Skills.js             ← Tech stack + progress bars
│   │   ├── Projects.js           ← Projects with GitHub + Vercel links
│   │   ├── Certificates.js       ← ITVedant certificate cards
│   │   ├── Resume.js             ← Download + education timeline
│   │   └── Contact.js            ← Contact links + code block
│   ├── App.js                    ← Routes + loading screen
│   ├── index.js                  ← Entry point
│   └── index.css                 ← Global CSS variables
└── package.json
```

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Open http://localhost:3000
```

---

## 📸 Adding Your Photo

In `src/pages/Home.js`, find this comment:
```jsx
{/*
  ✅ ADD YOUR PHOTO:
  Replace this placeholder div with:
  <img src="your-photo.jpg" alt="Isha Singh"
       style={{ width:'100%', height:'100%', objectFit:'cover' }} />
*/}
```
Place `your-photo.jpg` inside the `public/` folder and update the `src`.

---

## 📄 Adding Your Resume

1. Export your CV as a PDF
2. Rename it to `Isha_Singh_Resume.pdf`
3. Place it inside the `public/` folder
4. The Download button on the Resume page will work automatically

---

## 🔗 Updating Links

Search for these placeholders and replace with your real details:

| File | Find | Replace With |
|---|---|---|
| `Home.js` | `isha@email.com` | your real email |
| `Home.js` | `github.com/isha-singh` | your GitHub URL |
| `Home.js` | `linkedin.com/in/isha-singh` | your LinkedIn URL |
| `Projects.js` | `isha-portfolio.vercel.app` | your Vercel demo URLs |
| `Projects.js` | `github.com/isha-singh/portfolio` | your GitHub repo URLs |
| `Contact.js` | all links | your real links |
| `Resume.js` | `Your College Name` etc. | your real education details |

---

## 🌐 Deploy to Vercel (Free)

```bash
# 1. Push code to GitHub first
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/isha-portfolio.git
git push -u origin main

# 2. Go to vercel.com → New Project → Import from GitHub
# 3. Select your repo → Click Deploy
# Done! Your site is live at https://isha-portfolio.vercel.app
```

**Or install Vercel CLI:**
```bash
npm install -g vercel
vercel
# Follow prompts — your site goes live in 60 seconds!
```

---

## ✏️ Personalizing Content

| What to change | Where |
|---|---|
| Certificate names | `src/pages/Certificates.js` → `certs` array |
| Projects details | `src/pages/Projects.js` → `projects` array |
| Skills % levels | `src/pages/Skills.js` → `skills` array |
| Education details | `src/pages/Resume.js` → `education` array |
| Typewriter roles | `src/pages/Home.js` → `typewriterWords` array |
| About me text | `src/pages/About.js` |

---

## 🎨 Theme

Dark VS Code theme (`#0d1117` GitHub dark) with blue accents (`#58a6ff`).
Colors are CSS variables in `src/index.css` — easy to change globally.

---

Built with React · Deployed on Vercel · Made for Isha Singh 💙
