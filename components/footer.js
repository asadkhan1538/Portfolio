class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(to top, rgba(10, 10, 10, 1), rgba(0, 0, 0, 0.9));
          color: rgba(255, 255, 255, 0.7);
          padding: 3rem 2rem;
          text-align: center;
          border-top: 1px solid rgba(59, 130, 246, 0.1);
          position: relative;
          overflow: hidden;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #3B82F6, #10B981, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-family: 'Space Mono', monospace;
          margin-bottom: 1.5rem;
          display: inline-block;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: white;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .social-links a {
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .social-links a:hover {
          color: white;
          transform: translateY(-3px);
        }
        .copyright {
          font-size: 0.9rem;
          margin-bottom: 0;
        }
        .footer-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      </style>
      <footer>
        <div class="footer-bg"></div>
        <div class="footer-content">
          <div class="footer-logo">CYBERASAD</div>
          <div class="footer-links">
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#pricing">Plans</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="social-links">
            <a href="#" aria-label="GitHub"><i data-feather="github"></i></a>
            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
          </div>
          <p class="copyright">&copy; ${new Date().getFullYear()} CyberAsad. All systems operational.</p>
        </div>
      </footer>
    `;

    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);