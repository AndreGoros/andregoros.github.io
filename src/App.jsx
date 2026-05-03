import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="site-skip-link" href="#presentation">
          Saltar al contenido
        </a>
        <a className="site-brand" href="#presentation">
          [Nombre o marca corta]
        </a>
      </header>

      <main id="main-content">
        <section
          id="presentation"
          className="page-section section-presentation"
          aria-labelledby="presentation-heading"
        >
          <div className="section-inner presentation-inner">
            <img
              src={heroImg}
              alt="[Breve descripción de tu foto o imagen]"
              className="presentation-avatar"
              width="170"
              height="179"
            />
            <h1 id="presentation-heading">[Tu nombre]</h1>
            <p className="presentation-lede">
              [Frase corta sobre lo que haces o te interesa — una o dos líneas.]
            </p>
            <p className="presentation-cta">
              <a href="#contact">Enlaces de contacto</a>
            </p>
          </div>
        </section>

        <section
          id="about"
          className="page-section"
          aria-labelledby="about-heading"
        >
          <div className="section-inner">
            <h2 id="about-heading">Sobre esta página</h2>
            <p>
              [Párrafo 1: quién eres o qué te gustaría que supiera la gente que
              llegue aquí.]
            </p>
            <p>
              [Párrafo 2 opcional — contexto extra, proyecto favorito,
              música, lo que prefieras.]
            </p>
            <p>
              [Párrafo 3 opcional — detalle cerrado breve antes de destacados
              u oferta de enlaces abajo.]
            </p>
          </div>
        </section>

        <section
          id="highlights"
          className="page-section"
          aria-labelledby="highlights-heading"
        >
          <div className="section-inner">
            <h2 id="highlights-heading">Algo que destacarías</h2>
            <p className="section-intro">
              Tres líneas ejemplo; cambia cada título y descripción por las
              tuyas — o borra puntos hasta dejar sólo uno.
            </p>
            <ul className="highlight-list">
              <li>
                <strong>[Título del highlight]</strong> — Una línea que lo
                explique.
              </li>
              <li>
                <strong>[Segundo highlight]</strong> — Otra idea o proyecto en
                una frase.
              </li>
              <li>
                <strong>[Tercer highlight]</strong> — Puede ser un hobby,
                lectura recomendada, etc.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="page-section section-contact"
          aria-labelledby="contact-heading"
        >
          <div className="section-inner">
            <h2 id="contact-heading">Contacto</h2>
            <p>[Una línea que explique cómo prefieres que te encuentren.]</p>
            <ul className="contact-links">
              <li>
                <a
                  href="https://github.com/andregoros/andregoros.github.io"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Este repositorio (código fuente en GitHub)
                </a>
              </li>
              <li>
                <span className="contact-pending">
                  Perfil público GitHub{' '}
                  <span aria-hidden="true">(</span>enlace próximamente
                  <span aria-hidden="true">)</span>
                </span>
              </li>
              <li>
                <span className="contact-pending">
                  Correo electrónico{' '}
                  <span aria-hidden="true">(</span>añade aquí{' '}
                  <code>mailto:[tu-email]</code> cuando lo tengas
                  <span aria-hidden="true">)</span>
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer
        id="colophon"
        className="page-section section-colophon"
        aria-labelledby="colophon-heading"
      >
        <div className="section-inner">
          <h2 id="colophon-heading" className="sr-only">
            Créditos
          </h2>
          <p className="colophon-text">
            Hecho con <a href="https://vite.dev/">Vite</a> y{' '}
            <a href="https://react.dev/">React</a>. Contenidos en marcadores —
            tu turno para reemplazarlos.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
