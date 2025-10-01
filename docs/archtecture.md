# 🏗️ Architecture – Portfolio Website

This document describes the architecture and organisation of the **Eduardo45MP.dev – Portfolio** repository.  
The objective is to ensure clarity regarding the structure, technologies used, and future possibilities for evolution.

---

## 📂 Folder Structure

```plaintext
.
├── aboutme.md            # About Me information (English version)
├── css/                  # Site styles (pure, modularised CSS)
├── docs/                 # Project documentation (e.g. this file)
├── imgs/                 # Images and visual assets for the portfolio
├── index.html            # Main portfolio page
├── README.md             # Main documentation (English)
├── README.pt-BR.md       # Documentation in Portuguese
├── ROADMAP.md            # Feature planning and evolution
├── scripts/              # Utility scripts (vanilla JS)
└── sobreMim.md           # Portuguese version of About Me
````

---

## ⚙️ Technologies and Stack

* **Frontend:** HTML5, CSS3, JavaScript (vanilla).
* **Responsive Design:** Flexbox and CSS Grid.
* **Version Control:** Git + GitHub.
* **Current Deployment:** GitHub Pages.
* **Future Deployment (planned):** Vercel or Netlify.

---

## 🔑 Architectural Decisions

1. **Simplicity** – Minimalist structure, without frameworks, for maximum portability.
2. **Separate Documentation** – Use of the `docs/` directory to centralise technical files.
3. **Internationalisation** – Content available in both English and Portuguese (`aboutme.md` / `sobreMim.md`, `README.md` / `README.pt-BR.md`).
4. **Maintainability** – Clear separation between code (HTML/CSS/JS), assets (imgs), and documentation.
5. **Scalability** – Structure prepared to evolve into a SPA or framework (React/Next.js) without breaking the current organisation.

---

✍️ Created and maintained by **Eduardo Peixoto – eduardo45MP.dev**