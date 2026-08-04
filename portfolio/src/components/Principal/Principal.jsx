import { useState } from "react";
import "./Principal.css";

const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contacto", label: "Contacto" },
];

const SKILL_GROUPS = [
  {
    title: "Core — Web",
    status: "domino",
    statusClass: "core",
    barClass: "",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Cloud & DevOps",
    status: "em progressão",
    statusClass: "progress",
    barClass: "alt",
    items: [
      { name: "Docker", level: 45 },
      { name: "CI/CD", level: 35 },
      { name: "AWS / Azure", level: 30 },
    ],
  },
  {
    title: "Linguagens",
    status: "a explorar",
    statusClass: "core",
    barClass: "",
    items: [
      { name: "Go", level: 40 },
      { name: "Git / GitHub", level: 75 },
      { name: "Linux / CLI", level: 55 },
    ],
  },
];

const PROJECTS = [
  {
    title: "Redesign Frontend — Coruja Academy",
    badge: "LIVE",
    badgeClass: "badge-prod",
    description: (
      <>
        <strong>Desafio:</strong> a plataforma original tinha uma estrutura
        pouco escalável e inconsistente entre páginas. Reconstrui o frontend com
        HTML e CSS nativos, priorizando hierarquia visual clara, performance de
        carregamento e uma base de código sem dependências desnecessárias.
      </>
    ),
    stack: ["HTML5", "CSS3", "responsive"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

// NOTA: falta um segundo projeto (ex. Cloud/Pipeline) para sustentar a
// narrativa de transição de carreira — ver placeholder abaixo.

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: ligar a um serviço real (ex. Formspree, EmailJS, ou endpoint próprio)
    console.log("Formulário de contacto:", form);
  }

  return (
    <div className="portfolio">
      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#" className="nav-logo">
            tiago<span>.</span>dev
          </a>

          <ul className={`nav-links${navOpen ? " open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setNavOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a href="#contacto" className="btn btn-primary">
              Contactar
            </a>
            <button
              type="button"
              className="nav-burger"
              aria-label="Abrir menu"
              onClick={() => setNavOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="status-tag">
              <span className="status-dot"></span>status: disponível para novas
              oportunidades
            </span>
            <h1>
              Engenheiro Informático a construir para a{" "}
              <span>web e a cloud</span>.
            </h1>
            <p className="lede">
              Desenvolvo interfaces sólidas com HTML5, CSS3 e JavaScript, e
              estou a aprofundar Cloud &amp; DevOps para ligar o que construo no
              browser ao que o suporta em produção.
            </p>
            <div className="hero-ctas">
              <a href="#projetos" className="btn btn-primary">
                Ver projetos
              </a>
              <a href="#" className="btn btn-ghost">
                ↓ Descarregar CV
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-head">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="line">
              <span className="comment">// perfil.json</span>
            </div>
            <div className="line">
              <span className="key">"foco"</span>:{" "}
              <span className="val">"web development"</span>,
            </div>
            <div className="line">
              <span className="key">"a_aprender"</span>:{" "}
              <span className="val">["cloud", "devops", "go"]</span>,
            </div>
            <div className="line">
              <span className="key">"localizacao"</span>:{" "}
              <span className="val">"Castelo Branco, PT"</span>,
            </div>
            <div className="line">
              <span className="key">"disponivel"</span>:{" "}
              <span className="val">true</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">// stack</span>
            <h2>Competências</h2>
          </div>

          <div className="skills-grid">
            {SKILL_GROUPS.map((group) => (
              <div className="skill-block" key={group.title}>
                <div className="skill-block-head">
                  <span className="skill-block-title">{group.title}</span>
                  <span className={`skill-status ${group.statusClass}`}>
                    {group.status}
                  </span>
                </div>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li className="skill-item" key={item.name}>
                      {item.name}
                      <span className="skill-bar">
                        <span
                          className={`skill-bar-fill ${group.barClass}`}
                          style={{ width: `${item.level}%` }}
                        ></span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projetos" id="projetos">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">// projetos</span>
            <h2>Trabalho recente</h2>
          </div>

          <div className="projetos-grid">
            {PROJECTS.map((project) => (
              <article className="card" key={project.title}>
                <div className="card-top">
                  <span className="card-title">{project.title}</span>
                  <span className={`badge ${project.badgeClass}`}>
                    {project.badge}
                  </span>
                </div>
                <p className="card-desc">{project.description}</p>
                <div className="stack-row">
                  {project.stack.map((tech) => (
                    <span className="stack-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-ctas">
                  <a href={project.githubUrl} className="btn btn-ghost">
                    GitHub
                  </a>
                  <a href={project.liveUrl} className="btn btn-primary">
                    Ver live
                  </a>
                </div>
              </article>
            ))}

            <article className="card card-placeholder">
              <span
                className="card-title"
                style={{ color: "var(--text-muted)" }}
              >
                Próximo projeto — Cloud / Pipeline
              </span>
              <p className="card-desc">
                Espaço reservado para um segundo case study que demonstre
                trabalho em Cloud &amp; DevOps ou automação — o contraponto
                técnico que falta para sustentar a narrativa de transição de
                carreira.
              </p>
              <span className="badge badge-wip">WIP</span>
            </article>
          </div>
        </div>
      </section>

      <section className="sobre" id="sobre">
        <div className="wrap sobre-grid">
          <div className="sobre-portrait">foto / avatar</div>

          <div>
            <span className="section-eyebrow">// sobre</span>
            <h2 className="sobre-title">Percurso</h2>

            <div className="sobre-text">
              <p>
                Terminei recentemente o meu percurso académico em Engenharia
                Informática e estou agora focado em transformar conhecimento
                técnico em produtos reais.{" "}
                <strong>Organizo a minha aprendizagem por ciclos</strong>:
                defino um objetivo técnico concreto, construo algo que o prove,
                e só avanço quando tenho um resultado tangível — não apenas um
                tutorial concluído.
              </p>
              <p>
                Esta abordagem aplica-se tanto ao desenvolvimento frontend como
                às áreas que estou agora a explorar em maior profundidade, como
                Cloud, DevOps e automação.
              </p>
            </div>

            <div className="sobre-meta">
              <div className="sobre-meta-item">
                <span>localização</span>Castelo Branco, PT
              </div>
              <div className="sobre-meta-item">
                <span>foco atual</span>Web Development
              </div>
              <div className="sobre-meta-item">
                <span>disponibilidade</span>Imediata
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contacto" id="contacto">
        <div className="wrap contacto-grid">
          <div>
            <span className="section-eyebrow">// contacto</span>
            <h2 className="contacto-title">Vamos falar</h2>
            <p className="contacto-intro">
              Aberto a oportunidades de entrada no mercado de trabalho. Envia
              uma mensagem ou usa um dos canais abaixo.
            </p>

            <div className="contacto-links">
              <a href="#" className="contacto-link">
                ↓ Descarregar Currículo (PDF) <span className="arrow">→</span>
              </a>
              <a href="#" className="contacto-link">
                LinkedIn <span className="arrow">→</span>
              </a>
              <a href="#" className="contacto-link">
                GitHub <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="O teu nome"
                value={form.nome}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@empresa.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Sobre o que queres falar?"
                value={form.mensagem}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© 2026 Tiago — Engenheiro Informático</span>
          <span>Castelo Branco, Portugal</span>
        </div>
      </footer>
    </div>
  );
}
