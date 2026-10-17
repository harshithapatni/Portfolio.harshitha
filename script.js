/**
 * =========================================================
 * HARSHITHA PATNI — PORTFOLIO JAVASCRIPT
 * Plain JavaScript (ES6+) for interactive features:
 * 1. Mobile navigation menu toggle (with accessibility)
 * 2. Dark/Light mode toggle (persisted via localStorage in try/catch)
 * 3. Project technology filter (All / JS / HTML-CSS / Java-SQL)
 * 4. Email copy to clipboard helper
 * 5. Active section navigation scroll spy & current year
 * =========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules once the DOM is fully loaded
  initThemeToggle();
  initMobileNavigation();
  initProjectFilter();
  initEmailClipboard();
  initScrollSpy();
  updateCurrentYear();
});

/**
 * ---------------------------------------------------------
 * 1. THEME TOGGLE MODULE (Light / Dark Mode)
 * Uses CSS data-theme attribute on <html> and saves user preference
 * in browser localStorage safely wrapped in a try/catch block.
 * ---------------------------------------------------------
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;

  if (!themeToggleBtn) return;

  /**
   * Helper function to safely read saved theme from localStorage
   * Wrapped in try/catch to prevent errors if cookies/storage are disabled
   */
  function getSavedTheme() {
    try {
      return localStorage.getItem('harshitha_theme');
    } catch (error) {
      console.warn('localStorage is unavailable. Using default theme.', error);
      return null;
    }
  }

  /**
   * Helper function to safely persist theme to localStorage
   */
  function saveTheme(theme) {
    try {
      localStorage.setItem('harshitha_theme', theme);
    } catch (error) {
      console.warn('Unable to persist theme to localStorage.', error);
    }
  }

  /**
   * Applies the theme to the DOM and updates accessible aria-label
   */
  function applyTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggleBtn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // Determine starting theme:
  // 1. Saved theme in localStorage
  // 2. Otherwise system preference via matchMedia
  // 3. Fallback to 'dark'
  const savedTheme = getSavedTheme();
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Click event listener to toggle theme
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });
}

/**
 * ---------------------------------------------------------
 * 2. MOBILE NAVIGATION TOGGLE MODULE
 * Handles opening and closing of the mobile drawer menu,
 * updates aria-expanded for screen readers, and closes menu
 * on outside click, link click, or Escape key.
 * ---------------------------------------------------------
 */
function initMobileNavigation() {
  const navToggleBtn = document.getElementById('nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!navToggleBtn || !mainNav) return;

  function openMenu() {
    navToggleBtn.setAttribute('aria-expanded', 'true');
    mainNav.classList.add('nav-open');
  }

  function closeMenu() {
    navToggleBtn.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('nav-open');
  }

  function toggleMenu() {
    const isExpanded = navToggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Toggle button click
  navToggleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  // Close when clicking any navigation link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking outside of the open menu
  document.addEventListener('click', (event) => {
    const isClickInside = mainNav.contains(event.target) || navToggleBtn.contains(event.target);
    if (!isClickInside && mainNav.classList.contains('nav-open')) {
      closeMenu();
    }
  });

  // Close with Escape key for keyboard accessibility
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mainNav.classList.contains('nav-open')) {
      closeMenu();
      navToggleBtn.focus();
    }
  });
}

/**
 * ---------------------------------------------------------
 * 3. PROJECT FILTER MODULE
 * Filters projects dynamically based on tech category:
 * "all", "javascript", "html-css", "java-sql".
 * Updates aria-pressed on filter buttons for accessibility.
 * ---------------------------------------------------------
 */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.project-filters .filter-btn');
  const projectCards = document.querySelectorAll('.projects-grid .project-card');

  if (filterButtons.length === 0 || projectCards.length === 0) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.getAttribute('data-filter');

      // Update active states on buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      // Show/Hide project cards
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');

        if (selectedFilter === 'all' || cardCategory === selectedFilter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/**
 * ---------------------------------------------------------
 * 4. COPY EMAIL TO CLIPBOARD MODULE
 * Provides one-click copying of Harshitha's email address
 * with temporary visual feedback and screen-reader status update.
 * ---------------------------------------------------------
 */
function initEmailClipboard() {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-btn-text');
  const statusRegion = document.getElementById('copy-status');
  const emailToCopy = 'harshithapatni@gmail.com';

  if (!copyBtn || !copyText) return;

  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback for older browsers
        const tempInput = document.createElement('textarea');
        tempInput.value = emailToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      // Visual feedback
      const originalText = copyText.textContent;
      copyText.textContent = 'Copied to Clipboard!';
      copyBtn.classList.add('btn-copied');

      if (statusRegion) {
        statusRegion.textContent = 'Email copied to clipboard successfully.';
      }

      // Revert feedback after 2.5 seconds
      setTimeout(() => {
        copyText.textContent = originalText;
        copyBtn.classList.remove('btn-copied');
        if (statusRegion) {
          statusRegion.textContent = '';
        }
      }, 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
      copyText.textContent = 'Copy failed';
      setTimeout(() => {
        copyText.textContent = 'Copy Email';
      }, 2000);
    }
  });
}

/**
 * ---------------------------------------------------------
 * 5. SCROLL SPY MODULE
 * Highlights the active section nav link as the user scrolls.
 * ---------------------------------------------------------
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  function handleScroll() {
    const scrollPosition = window.scrollY + 120; // Offset for fixed header

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  // Throttle scroll listener using requestAnimationFrame for smooth performance
  let isTicking = false;
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });
}

/**
 * ---------------------------------------------------------
 * 6. DYNAMIC COPYRIGHT YEAR
 * Keeps the copyright year in the footer perpetually current.
 * ---------------------------------------------------------
 */
function updateCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
