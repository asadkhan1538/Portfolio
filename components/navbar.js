class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }
        nav {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #3B82F6, #10B981, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-family: 'Space Mono', monospace;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          position: relative;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2), rgba(236, 72, 153, 0.2));
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .nav-links a:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.4), rgba(16, 185, 129, 0.4), rgba(236, 72, 153, 0.4));
        }
        .nav-links a.active {
          background: linear-gradient(90deg, #3B82F6, #10B981, #EC4899);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.5);
          transform: scale(1.1);
        }
.mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @keyframes underline-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            flex-direction: column;
            background: rgba(10, 10, 10, 0.95);
            padding: 1rem;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            border-bottom: 1px solid rgba(59, 130, 246, 0.1);
          }
          .nav-links.show {
            max-height: 500px;
          }
          .nav-links li {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="#" class="logo">CYBERASAD</a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul class="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Plans</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    `;

    // Initialize mobile menu toggle
    const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      feather.replace();
    });

    // Close mobile menu when clicking a link
    this.shadowRoot.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });

    feather.replace();
  }
}

customElements.define('custom-navbar', CustomNavbar);