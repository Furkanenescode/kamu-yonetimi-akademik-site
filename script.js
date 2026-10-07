/* Reset and Base */
:root {
  --bg: #f4f7fb;
  --bg-strong: #ebf0f7;
  --card: #ffffff;
  --text: #1d2a36;
  --muted: #5f7282;
  --primary: #123d5c;
  --primary-soft: #e8f1fa;
  --accent: #2f8f9d;
  --accent-soft: #dff7f7;
  --border: rgba(18, 61, 92, 0.12);
  --shadow: 0 18px 40px rgba(18, 61, 92, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

main {
  overflow: hidden;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.narrow {
  width: min(820px, calc(100% - 32px));
}

.section {
  padding: 96px 0;
}

.muted-section {
  background: var(--bg-strong);
}

.section-tag {
  display: inline-block;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 16px;
}

.section-heading {
  margin-bottom: 42px;
}

h1,
h2,
h3 {
  margin-top: 0;
  line-height: 1.2;
}

h1 {
  font-size: clamp(2.5rem, 4vw, 4.2rem);
  margin-bottom: 24px;
}

h2 {
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 18px;
}

h3 {
  font-size: 1.35rem;
  margin-bottom: 10px;
}

p {
  margin-top: 0;
  color: var(--muted);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(244, 247, 251, 0.85);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 74px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #fff;
  font-weight: 800;
}

.brand strong {
  display: block;
  font-size: 1rem;
}

.brand small {
  display: block;
  color: var(--muted);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
  font-size: 0.96rem;
}

.main-nav a {
  position: relative;
}

.main-nav a.active::after,
.main-nav a:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background: var(--accent);
  border-radius: 999px;
}

.mobile-nav-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--border);
  background: #fff;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
}

.mobile-nav-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
  margin: 5px 0;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 600;
  transition: 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #fff;
  box-shadow: var(--shadow);
}

.button-secondary {
  background: transparent;
  color: var(--primary);
  border-color: var(--border);
}

.hero {
  padding: 72px 0 42px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 42px;
}

.eyebrow {
  display: inline-block;
  background: var(--primary-soft);
  color: var(--primary);
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  margin-bottom: 18px;
}

.hero-copy p {
  font-size: 1.08rem;
  max-width: 610px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 30px 0 30px;
}

.hero-metrics {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

.hero-metrics li {
  min-width: 120px;
}

.hero-metrics strong {
  display: block;
  font-size: 1.8rem;
  color: var(--primary);
  line-height: 1.1;
}

.hero-metrics span {
  color: var(--muted);
  font-size: 0.92rem;
}

.hero-panel {
  display: grid;
  gap: 18px;
}

.panel-card {
  background: linear-gradient(180deg, #fff, #eef6fb);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.panel-main h2 {
  font-size: clamp(1.8rem, 2vw, 2.4rem);
}

.panel-main ul {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: grid;
  gap: 12px;
}

.panel-main li {
  position: relative;
  padding-left: 18px;
  color: var(--text);
}

.panel-main li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.panel-label {
  margin-bottom: 12px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  font-weight: 700;
}

.panel-mini {
  display: grid;
  gap: 8px;
  max-width: 320px;
}

.badge {
  display: inline-flex;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 700;
}

.two-col {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: start;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.four-col {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.info-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 14px 28px rgba(18, 61, 92, 0.04);
}

.icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-soft);
  color: var(--primary);
  font-weight: 800;
  margin-bottom: 16px;
}

.research-grid,
.team-grid,
.news-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.research-panel,
.news-card,
.team-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 24px;
  box-shadow: 0 12px 24px rgba(18, 61, 92, 0.04);
}

.avatar {
  display: inline-flex;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-soft), var(--accent-soft));
  color: var(--primary);
  align-items: center;
  justify-content: center;
  font-weight: 800;
  margin-bottom: 16px;
}

.publication-list {
  display: grid;
  gap: 20px;
}

.large-list {
  gap: 28px;
}

.publication-item {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 26px 24px;
  box-shadow: 0 10px 20px rgba(18, 61, 92, 0.03);
}

.date,
.news-date {
  display: inline-block;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 0.82rem;
}

.contact-wrap {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 28px;
  align-items: start;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 22px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text);
}

.contact-form {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 24px;
  box-shadow: var(--shadow);
  display: grid;
  gap: 18px;
}

.contact-form label {
  display: grid;
  gap: 8px;
  color: var(--text);
  font-weight: 600;
}

.contact-form input,
.contact-form textarea {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #f9fbfd;
  padding: 12px 14px;
  color: var(--text);
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid rgba(47, 143, 157, 0.2);
  border-color: rgba(47, 143, 157, 0.5);
}

.site-footer {
  border-top: 1px solid var(--border);
  background: #f0f4f8;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
  gap: 16px;
}

.footer-wrap p {
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 18px;
  color: var(--muted);
}

.page-hero {
  padding: 96px 0 32px;
  background: linear-gradient(180deg, rgba(232, 241, 250, 0.8), rgba(244, 247, 251, 0));
}

@media (max-width: 920px) {
  .hero-grid,
  .two-col,
  .contact-wrap {
    grid-template-columns: 1fr;
  }

  .cards-grid,
  .research-grid,
  .team-grid,
  .news-grid,
  .four-col {
    grid-template-columns: 1fr 1fr;
  }

  .desktop-only {
    display: none;
  }

  .mobile-nav-toggle {
    display: inline-block;
  }

  .main-nav {
    position: absolute;
    top: calc(100% + 8px);
    left: 16px;
    right: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 18px 20px;
    box-shadow: var(--shadow);
  }

  .main-nav.is-open {
    display: flex;
  }
}

@media (max-width: 560px) {
  .cards-grid,
  .research-grid,
  .team-grid,
  .news-grid,
  .four-col {
    grid-template-columns: 1fr;
  }

  .nav-wrap {
    flex-wrap: wrap;
    padding: 12px 0;
  }

  .button {
    width: 100%;
  }

  .hero {
    padding-top: 42px;
  }

  .section {
    padding: 72px 0;
  }

  .footer-wrap {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 18px 0;
  }
}
