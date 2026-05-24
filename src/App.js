import "@/App.css";

const Portfolio = () => {
  return (
    <div className="retro-container" data-testid="portfolio-container">
      {/* Animated Background */}
      <div className="retro-bg">
        <div className="grid-overlay"></div>
        <div className="scanlines"></div>
        <div className="glow-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      {/* Header */}
      <header className="retro-header" data-testid="header">
        <div className="glitch-wrapper">
          <h1 className="glitch" data-text="MIGUEL ALFONSO">MIGUEL ALFONSO</h1>
          <h1 className="glitch subtitle-glitch" data-text="LÓPEZ GÓMEZ">LÓPEZ GÓMEZ</h1>
        </div>
        <div className="neon-subtitle">
          <span className="neon-text cyan">INGENIERO EN DESARROLLO Y GESTIÓN DE SOFTWARE</span>
          <span className="separator">▸</span>
          <span className="neon-text pink">ARQUITECTO BACKEND</span>
          <span className="separator">▸</span>
          <span className="neon-text yellow">INTEGRACIONES IoT</span>
        </div>
        <div className="contact-bar" data-testid="contact-info">
          <a href="mailto:8122110007@utchetumal.edu.mx" className="contact-link" data-testid="email-link">
            <span className="icon">✉</span> miguelgomez29117@hotmail.com
          </a>
          <span className="contact-divider">|</span>
          <span className="location">
            <span className="icon">📍</span> Chetumal, Q. Roo
          </span>
          <span className="contact-divider">|</span>
          <a href="https://www.linkedin.com/in/miguel-alfonso-l%C3%B3pez-g%C3%B3mez-875b1a387/" target="_blank" rel="noopener noreferrer" className="contact-link" data-testid="linkedin-link">
            <span className="icon">💼</span> LinkedIn
          </a>
          <span className="contact-divider">|</span>
          <a href="https://github.com/MikeLG90" target="_blank" rel="noopener noreferrer" className="contact-link" data-testid="github-link">
            <span className="icon">🔗</span> GitHub
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="retro-main">
        {/* About Section */}
        <section className="retro-section" data-testid="about-section">
          <h2 className="section-title">
            <span className="title-bracket">[</span>
            <span className="title-text">PERFIL PROFESIONAL</span>
            <span className="title-bracket">]</span>
          </h2>
          <div className="terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">miguel@dev:~$ cat perfil.txt</span>
            </div>
            <div className="terminal-body">
              <p className="typing-text">
                <span className="prompt">&gt;</span> Ingeniero en Desarrollo y Gestión de Software graduado de la <span className="highlight pink">Universidad Tecnológica de Chetumal</span>, con una sólida especialización en la construcción de <span className="highlight cyan">arquitecturas backend escalables</span>, la integración de ecosistemas de hardware y software <span className="highlight yellow">(IoT, Drones)</span> y la implementación de soluciones orientadas a eventos.
              </p>
              <p className="typing-text delay-1">
                <span className="prompt">&gt;</span> Como <span className="highlight pink">líder técnico del equipo de desarrollo "Manatics"</span>, he dirigido el ciclo de vida completo de múltiples productos tecnológicos, desde la concepción de la arquitectura hasta el despliegue en la nube <span className="highlight cyan">(Azure, entornos Linux)</span>.
              </p>
              <p className="typing-text delay-1">
                <span className="prompt">&gt;</span> Mi enfoque radica en resolver problemas operativos y sociales complejos mediante la creación de <span className="highlight yellow">APIs robustas</span>, la automatización de procesos impulsada por <span className="highlight cyan">Inteligencia Artificial</span> y la interoperabilidad de sistemas institucionales, entregando software de <span className="highlight pink">alto impacto, seguro y eficiente</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="retro-section" data-testid="projects-section">
          <h2 className="section-title">
            <span className="title-bracket">[</span>
            <span className="title-text">EXPERIENCIA Y PROYECTOS DESTACADOS</span>
            <span className="title-bracket">]</span>
          </h2>

          <div className="projects-grid">
            {/* Drone Project - Featured */}
            <div className="project-card featured" data-testid="project-drones">
              <div className="project-badge">🏆 $90,000 MXN</div>
              <div className="project-content">
                <h3 className="project-title">
                  <span className="project-icon">🚁</span>
                  Sistema de Asistencia Ciudadana con Drones
                </h3>
                <div className="project-event">iessol QROO 2025 (Ganador) & Hackaton QROO 2025</div>
                <div className="project-contribution">
                  <span className="label">DESCRIPCIÓN:</span>
                  <p>Plataforma integral de respuesta a emergencias diseñada para optimizar los tiempos de llegada de unidades médicas y de seguridad, ofreciendo vistas dedicadas tanto para el centro de mando (C4) como para la red de hospitales.</p>
                </div>
                <div className="project-contribution">
                  <span className="label">DESARROLLO E IMPLEMENTACIÓN:</span>
                  <p>Construí el núcleo web de la plataforma, permitiendo la recepción de transmisiones de video en tiempo real desde drones en vuelo. Desarrollé un prototipo de mapa interactivo donde el operador marca el objetivo mediante la dirección del incidente, llenando dinámicamente un formulario con los datos críticos.</p>
                </div>
                <div className="project-contribution">
                  <span className="label">INNOVACIÓN TÉCNICA:</span>
                  <p>El sistema consume una API gubernamental para calcular en tiempo real el hospital más cercano y despachar la ambulancia ideal. Implementé un Web Service en Azure para orquestar las notificaciones a los paramédicos a través de una app móvil, integrando un motor de IA que depura y mejora los textos de los reportes.</p>
                </div>
                <div className="tech-stack">
                  <span className="tech-label">TECH STACK:</span>
                  <div className="tech-tags">
                    <span className="tech-tag">Laravel</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Azure</span>
                    <span className="tech-tag">IA Generativa</span>
                    <span className="tech-tag">APIs Geolocalización</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RPPC-ISABI Project */}
            <div className="project-card" data-testid="project-rppc-isabi">
              <div className="project-content">
                <h3 className="project-title">
                  <span className="project-icon">🔄</span>
                  Arquitectura de Interoperabilidad RPPC - ISABI Cancún
                </h3>
                <div className="project-event">Web Service Orientado a Eventos</div>
                <div className="project-contribution">
                  <span className="label">DESCRIPCIÓN:</span>
                  <p>Solución de sincronización de datos en tiempo real entre dos sistemas gubernamentales independientes (Registro Público de la Propiedad y del Comercio y sistema ISABI).</p>
                </div>
                <div className="project-contribution">
                  <span className="label">DESARROLLO:</span>
                  <p>Arquitecté y programé un Web Service utilizando Node.js bajo metodología orientada a eventos. Permite que ambos sistemas se comuniquen, validen y actualicen registros de forma asíncrona, garantizando la integridad de los datos institucionales.</p>
                </div>
                <div className="tech-stack">
                  <span className="tech-label">TECH STACK:</span>
                  <div className="tech-tags">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Event-Driven</span>
                    <span className="tech-tag">APIs REST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* IoT Access Control */}
            <div className="project-card" data-testid="project-iot-access">
              <div className="project-content">
                <h3 className="project-title">
                  <span className="project-icon">🔐</span>
                  Ecosistema de Control de Accesos IoT
                </h3>
                <div className="project-event">Universidad Autónoma del Estado de Quintana Roo (UAQROO)</div>
                <div className="project-contribution">
                  <span className="label">DESCRIPCIÓN:</span>
                  <p>Sistema de seguridad e identificación para la validación de entradas a áreas restringidas mediante códigos QR dinámicos.</p>
                </div>
                <div className="project-contribution">
                  <span className="label">DESARROLLO:</span>
                  <p>Diseñé el flujo completo de validación. En el backend, construí una API robusta consumida directamente por dispositivos físicos (escáneres IoT) instalados en los accesos. El sistema procesa la solicitud, valida credenciales y autoriza la apertura.</p>
                </div>
                <div className="tech-stack">
                  <span className="tech-label">TECH STACK:</span>
                  <div className="tech-tags">
                    <span className="tech-tag">Laravel</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">Azure</span>
                    <span className="tech-tag">Hardware IoT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDRPPC */}
            <div className="project-card" data-testid="project-sidrppc">
              <div className="project-content">
                <h3 className="project-title">
                  <span className="project-icon">🏛️</span>
                  Sistema Interno del RPPC (SIDRPPC)
                </h3>
                <div className="project-event">Liderazgo Full-Stack y Migración</div>
                <div className="project-contribution">
                  <span className="label">DESCRIPCIÓN:</span>
                  <p>Desarrollo desde cero de la plataforma operativa interna para la gestión de trámites y procesos del Registro Público de la Propiedad y del Comercio.</p>
                </div>
                <div className="project-contribution">
                  <span className="label">DESARROLLO:</span>
                  <p>Responsable de la primera etapa del proyecto, entregando una versión 100% funcional construida sobre un modelo relacional sólido. Configuré y ejecuté el despliegue en una red LAN bajo entorno de servidores Linux. Inicié la versión 2.0 introduciendo un frontend reactivo con Angular.</p>
                </div>
                <div className="tech-stack">
                  <span className="tech-label">TECH STACK:</span>
                  <div className="tech-tags">
                    <span className="tech-tag">Laravel</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">Angular</span>
                    <span className="tech-tag">Linux Server</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Bot */}
            <div className="project-card" data-testid="project-whatsapp">
              <div className="project-content">
                <h3 className="project-title">
                  <span className="project-icon">🤖</span>
                  Bot de Automatización Conversacional con IA
                </h3>
                <div className="project-event">Proyecto Independiente</div>
                <div className="project-contribution">
                  <span className="label">DESCRIPCIÓN:</span>
                  <p>Agente conversacional diseñado para WhatsApp, capaz de entender el contexto y ofrecer respuestas complejas a los usuarios de forma automatizada.</p>
                </div>
                <div className="project-contribution">
                  <span className="label">DESARROLLO:</span>
                  <p>Realicé la integración directa de la API de OpenAI para dotar al bot de procesamiento de lenguaje natural. Diseñé un esquema de base de datos relacional que almacena el contexto, historiales y variables de sesión de cada usuario en tiempo real.</p>
                </div>
                <div className="tech-stack">
                  <span className="tech-label">TECH STACK:</span>
                  <div className="tech-tags">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">OpenAI API</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">WhatsApp API</span>
                  </div>
                </div>
              </div>
            </div>

           

            {/* Vehicular Control */}
            <div className="project-card" data-testid="project-vehicular">
              <div className="project-content">
                <h3 className="project-title">
                  <span className="project-icon">🚗</span>
                  Plataforma de Control Vehicular Satelital
                </h3>
                <div className="project-event">Proyecto Final TSU</div>
                <div className="project-contribution">
                  <span className="label">DESCRIPCIÓN:</span>
                  <p>Software de logística para la monitorización de flotillas.</p>
                </div>
                <div className="project-contribution">
                  <span className="label">DESARROLLO:</span>
                  <p>Creé un sistema capaz de recibir, interpretar y mostrar en un mapa web las coordenadas emitidas en tiempo real por módulos GPS físicos instalados en vehículos, utilizando protocolos de comunicación IoT para una latencia mínima.</p>
                </div>
                <div className="tech-stack">
                  <span className="tech-label">TECH STACK:</span>
                  <div className="tech-tags">
                    <span className="tech-tag">IoT</span>
                    <span className="tech-tag">GPS Modules</span>
                    <span className="tech-tag">Real-time Maps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="retro-section" data-testid="skills-section">
          <h2 className="section-title">
            <span className="title-bracket">[</span>
            <span className="title-text">HABILIDADES TÉCNICAS Y HERRAMIENTAS</span>
            <span className="title-bracket">]</span>
          </h2>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Lenguajes y Entornos</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Frameworks</h3>
              <div className="skill-tags">
                <span className="skill-tag highlight-tag">Laravel</span>
                <span className="skill-tag highlight-tag">Angular</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">🗄️</div>
              <h3>Bases de Datos</h3>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
              </div>
              <p className="skill-detail">Diseño relacional, optimización de consultas</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">☁️</div>
              <h3>Nube y Despliegue</h3>
              <div className="skill-tags">
                <span className="skill-tag">Microsoft Azure</span>
                <span className="skill-tag">Linux Servers</span>
                <span className="skill-tag">LAN Deploy</span>
                <span className="skill-tag">Web Services</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">⚡</div>
              <h3>Arquitectura y Metodologías</h3>
              <div className="skill-tags">
                <span className="skill-tag">APIs RESTful</span>
                <span className="skill-tag">Event-Driven</span>
                <span className="skill-tag">IoT Integration</span>
                <span className="skill-tag">IA Generativa</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">👥</div>
              <h3>Liderazgo</h3>
              <div className="skill-tags">
                <span className="skill-tag team-tag">Manatics Team Lead</span>
                <span className="skill-tag">Git/GitHub</span>
                <span className="skill-tag">Legacy Refactoring</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="retro-section" data-testid="education-section">
          <h2 className="section-title">
            <span className="title-bracket">[</span>
            <span className="title-text">EDUCACIÓN Y LOGROS</span>
            <span className="title-bracket">]</span>
          </h2>

          <div className="education-grid">
            <div className="education-card">
              <div className="edu-icon">🎓</div>
              <h3>Ingeniería en Desarrollo y Gestión de Software</h3>
              <p>Universidad Tecnológica de Chetumal</p>
              <span className="edu-status">GRADUADO</span>
            </div>
            <div className="education-card">
              <div className="edu-icon">👨‍💻</div>
              <h3>Líder Técnico</h3>
              <p>Equipo de desarrollo de software</p>
              <span className="edu-status highlight-team">MANATICS</span>
            </div>
            <div className="education-card achievement">
              <div className="edu-icon">🏆</div>
              <h3>Eventos Destacados</h3>
              <p>iessol QROO 2025 - Ganador de capital semilla ($90,000 MXN)</p>
              <p>Hackaton QROO 2025</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="retro-footer" data-testid="footer">
        <div className="footer-content">
          <div className="footer-text">
            <span className="footer-year">© 2025</span>
            <span className="footer-name">MIGUEL ALFONSO LÓPEZ GÓMEZ</span>
          </div>
          <div className="footer-tagline">
            <span className="blink">_</span> READY TO BUILD THE FUTURE <span className="blink">_</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return <Portfolio />;
}

export default App;
