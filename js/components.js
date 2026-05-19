/* ============================================
   Shared Components: Navbar & Footer
   Injected into every page via JS
   ============================================ */

/* Determines which page is active based on current URL */
function getActivePage() {
  const path = window.location.pathname;
  if (path.includes('about')) return 'about';
  if (path.includes('services')) return 'services';
  if (path.includes('partners')) return 'partners';
  if (path.includes('loan-calculator')) return 'calculator';
  if (path.includes('contact')) return 'contact';
  return 'home';
}

/* Renders navbar HTML and attaches to #navbar-container */
function renderNavbar() {
  const active = getActivePage();
  const isActive = (page) => active === page ? 'text-indigo-600 font-semibold' : 'text-slate-700';

  const navHTML = `
    <!-- Page Loader -->
    <div class="page-loader" id="pageLoader">
      <div class="loader-spinner"></div>
    </div>

    <!-- Navbar -->
    <nav class="navbar fixed top-0 left-0 right-0 z-[1000] bg-white/80 backdrop-blur-lg border-b border-slate-100/50" id="mainNav">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo -->
          <a href="index.html" class="flex items-center space-x-3 flex-shrink-0">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">V</span>
            </div>
            <div class="hidden sm:block">
              <span class="text-lg font-bold text-slate-800 leading-tight block">Viradiya Associates</span>
              <span class="text-[10px] text-slate-500 tracking-wider uppercase">Private Limited</span>
            </div>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden lg:flex items-center space-x-1">
            
            <a href="index.html" class="nav-link px-4 py-2 rounded-lg text-sm font-medium ${isActive('home')} hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">Home</a>
            
            <!-- About Dropdown -->
            <div class="nav-item relative">
              <a href="about.html" class="nav-link px-4 py-2 rounded-lg text-sm font-medium ${isActive('about')} hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex items-center gap-1">
                About Us
                <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </a>
              <div class="nav-dropdown absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-[1001]">
                <a href="about.html#overview" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all group">
                  <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  </div>
                  <div>
                    <span class="text-sm font-semibold text-slate-800 block">Company Overview</span>
                    <span class="text-xs text-slate-500">Our story & journey</span>
                  </div>
                </a>
                <a href="about.html#vision-mission" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all group">
                  <div class="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                    <svg class="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </div>
                  <div>
                    <span class="text-sm font-semibold text-slate-800 block">Vision & Mission</span>
                    <span class="text-xs text-slate-500">What drives us forward</span>
                  </div>
                </a>
                <a href="about.html#team" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all group">
                  <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <span class="text-sm font-semibold text-slate-800 block">Management Team</span>
                    <span class="text-xs text-slate-500">Meet our directors</span>
                  </div>
                </a>
              </div>
            </div>

            <!-- Services Dropdown -->
            <div class="nav-item relative">
              <a href="services.html" class="nav-link px-4 py-2 rounded-lg text-sm font-medium ${isActive('services')} hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex items-center gap-1">
                Services
                <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </a>
              <div class="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-[1001]">
                <div class="grid grid-cols-2 gap-2">
                  <a href="services.html#home-loans" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all group">
                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                    </div>
                    <div>
                      <span class="text-sm font-semibold text-slate-800 block">Home & Plot Loans</span>
                      <span class="text-xs text-slate-500">Your dream home awaits</span>
                    </div>
                  </a>
                  <a href="services.html#lap" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all group">
                    <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>
                    </div>
                    <div>
                      <span class="text-sm font-semibold text-slate-800 block">Loan Against Property</span>
                      <span class="text-xs text-slate-500">Leverage your assets</span>
                    </div>
                  </a>
                  <a href="services.html#business-loans" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all group">
                    <div class="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <span class="text-sm font-semibold text-slate-800 block">Business & MSME Loans</span>
                      <span class="text-xs text-slate-500">Fuel your growth</span>
                    </div>
                  </a>
                  <a href="services.html#cc-od" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all group">
                    <div class="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                      <svg class="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                    </div>
                    <div>
                      <span class="text-sm font-semibold text-slate-800 block">CC & OD Facilities</span>
                      <span class="text-xs text-slate-500">Working capital solutions</span>
                    </div>
                  </a>
                  <a href="services.html#personal-loans" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all group">
                    <div class="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                      <svg class="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    </div>
                    <div>
                      <span class="text-sm font-semibold text-slate-800 block">Personal Loans</span>
                      <span class="text-xs text-slate-500">Quick personal finance</span>
                    </div>
                  </a>
                  <a href="services.html#balance-transfer" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all group">
                    <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                      <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                    </div>
                    <div>
                      <span class="text-sm font-semibold text-slate-800 block">Balance Transfer</span>
                      <span class="text-xs text-slate-500">Better rates, lower EMI</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a href="partners.html" class="nav-link px-4 py-2 rounded-lg text-sm font-medium ${isActive('partners')} hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">Partners</a>
            
            <a href="loan-calculator.html" class="nav-link px-4 py-2 rounded-lg text-sm font-medium ${isActive('calculator')} hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">Loan Calculator</a>
          </div>

          <!-- CTA + Hamburger -->
          <div class="flex items-center gap-3">
            <a href="contact.html" class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              Contact Us
            </a>
            
            <!-- Hamburger -->
            <button class="lg:hidden p-2 rounded-lg hover:bg-indigo-50 transition-colors" id="menuToggle" aria-label="Toggle menu">
              <svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="menuIcon">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg class="w-6 h-6 text-slate-700 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="closeIcon">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu fixed top-20 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-[999] overflow-y-auto" id="mobileMenu">
        <div class="p-6 space-y-2">
          <a href="index.html" class="block px-4 py-3 rounded-xl text-base font-medium ${active === 'home' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'} transition-all">Home</a>
          
          <!-- About Mobile -->
          <div>
            <button class="mobile-dropdown-toggle w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${active === 'about' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'} transition-all">
              About Us
              <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mobile-submenu ml-4 space-y-1">
              <a href="about.html#overview" class="block px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">Company Overview</a>
              <a href="about.html#vision-mission" class="block px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">Vision & Mission</a>
              <a href="about.html#team" class="block px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">Management Team</a>
            </div>
          </div>
          
          <!-- Services Mobile -->
          <div>
            <button class="mobile-dropdown-toggle w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${active === 'services' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'} transition-all">
              Services
              <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mobile-submenu ml-4 space-y-1">
              <a href="services.html#home-loans" class="block px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">Home & Plot Loans</a>
              <a href="services.html#lap" class="block px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">Loan Against Property</a>
              <a href="services.html#business-loans" class="block px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">Business & MSME Loans</a>
              <a href="services.html#cc-od" class="block px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">CC & OD Facilities</a>
              <a href="services.html#personal-loans" class="block px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">Personal Loans</a>
              <a href="services.html#balance-transfer" class="block px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">Balance Transfer</a>
            </div>
          </div>

          <a href="partners.html" class="block px-4 py-3 rounded-xl text-base font-medium ${active === 'partners' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'} transition-all">Partners</a>
          <a href="loan-calculator.html" class="block px-4 py-3 rounded-xl text-base font-medium ${active === 'calculator' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'} transition-all">Loan Calculator</a>
          
          <div class="pt-4 border-t border-slate-100">
            <a href="contact.html" class="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              Contact Us
            </a>
          </div>

          <div class="pt-4 border-t border-slate-100">
            <div class="flex items-center gap-3 px-4 py-2">
              <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:+919998354191" class="text-sm text-slate-600 hover:text-indigo-600">+91 99983 54191</a>
            </div>
            <div class="flex items-center gap-3 px-4 py-2">
              <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:info@viradiyaassociates.co.in" class="text-sm text-slate-600 hover:text-indigo-600">info@viradiyaassociates.co.in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="h-20"></div>
  `;

  const container = document.getElementById('navbar-container');
  if (container) container.innerHTML = navHTML;

  initNavbarEvents();
}

/* Navbar scroll effect, mobile toggle, dropdown interactions */
function initNavbarEvents() {
  const nav = document.getElementById('mainNav');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Mobile dropdown toggles
  document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const submenu = btn.nextElementSibling;
      const arrow = btn.querySelector('svg');
      submenu.classList.toggle('active');
      arrow.style.transform = submenu.classList.contains('active') ? 'rotate(180deg)' : '';
    });
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });
}

/* Renders footer HTML */
function renderFooter() {
  const footerHTML = `
    <!-- Back to Top -->
    <button class="back-to-top" id="backToTop" aria-label="Back to top">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
    </button>

    <footer class="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
      <!-- Decorative blobs -->
      <div class="gradient-blob blob-2 top-0 right-0 opacity-10"></div>
      <div class="gradient-blob blob-3 bottom-0 left-0 opacity-10"></div>
      
      <!-- Top gradient line -->
      <div class="h-1 bg-gradient-to-r from-indigo-600 via-cyan-500 to-purple-600"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <!-- Company Info -->
          <div class="lg:col-span-1">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span class="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <span class="text-lg font-bold text-white block">Viradiya Associates</span>
                <span class="text-xs text-indigo-300 tracking-wider uppercase">Private Limited</span>
              </div>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">Simplifying Business, Amplifying Growth. Your trusted partner for transparent, reliable, and customized financial solutions across India.</p>
            <div class="flex items-center gap-3">
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 group" aria-label="Facebook">
                <svg class="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 group" aria-label="Instagram">
                <svg class="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 group" aria-label="LinkedIn">
                <svg class="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 group" aria-label="YouTube">
                <svg class="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-semibold text-lg mb-6 relative">
              Quick Links
              <span class="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 -mb-2"></span>
            </h3>
            <ul class="space-y-3">
              <li><a href="index.html" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Home</a></li>
              <li><a href="about.html" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>About Us</a></li>
              <li><a href="services.html" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Services</a></li>
              <li><a href="partners.html" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Partners</a></li>
              <li><a href="loan-calculator.html" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Loan Calculator</a></li>
              <li><a href="contact.html" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Contact Us</a></li>
            </ul>
          </div>

          <!-- Our Services -->
          <div>
            <h3 class="text-white font-semibold text-lg mb-6 relative">
              Our Services
              <span class="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 -mb-2"></span>
            </h3>
            <ul class="space-y-3">
              <li><a href="services.html#home-loans" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Home & Plot Loans</a></li>
              <li><a href="services.html#lap" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Loan Against Property</a></li>
              <li><a href="services.html#business-loans" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Business & MSME Loans</a></li>
              <li><a href="services.html#cc-od" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>CC & OD Facilities</a></li>
              <li><a href="services.html#personal-loans" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Personal Loans</a></li>
              <li><a href="services.html#balance-transfer" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Balance Transfer</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-white font-semibold text-lg mb-6 relative">
              Get in Touch
              <span class="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 -mb-2"></span>
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <span class="text-slate-400 text-sm leading-relaxed">Shop No Ff-6, First Floor, Sahaj Prime, Sola, Ahmedabad, Gujarat, India - 380060</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <a href="tel:+919998354191" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors">+91 99983 54191</a>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <a href="mailto:info@viradiyaassociates.co.in" class="text-slate-400 hover:text-indigo-400 text-sm transition-colors">info@viradiyaassociates.co.in</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-white/10 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-slate-500 text-sm">&copy; ${new Date().getFullYear()} Viradiya Associates Private Limited. All rights reserved.</p>
            <div class="flex items-center gap-6">
              <a href="#" class="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" class="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" class="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  const container = document.getElementById('footer-container');
  if (container) container.innerHTML = footerHTML;

  // Back to top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
