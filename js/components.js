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
      <div class="loader-container">
        <div class="loader-ring loader-ring-2"></div>
        <div class="loader-ring loader-ring-1"></div>
      </div>
      <div class="loader-text">Loading<span class="loader-dots"><span></span><span></span><span></span></span></div>
    </div>

    <!-- Navbar -->
    <nav class="navbar fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-slate-200" id="mainNav">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo -->
          <a href="index.html" class="flex items-center space-x-3 flex-shrink-0">
            <img src="images/company_logo.jpeg" alt="Viradiya Associates" class="h-12 w-auto object-contain">
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
              <div class="nav-dropdown absolute top-full left-0 pt-2 w-72 z-[1001]"><div class="bg-white rounded-2xl shadow-2xl border border-slate-100 p-3">
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
              </div></div>
            </div>

            <!-- Services Dropdown -->
            <div class="nav-item relative">
              <a href="services.html" class="nav-link px-4 py-2 rounded-lg text-sm font-medium ${isActive('services')} hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex items-center gap-1">
                Services
                <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </a>
              <div class="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[560px] z-[1001]"><div class="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4">
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
              </div></div>
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
      <div class="mobile-menu fixed top-20 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-b from-white via-indigo-50/30 to-white shadow-2xl z-[999] overflow-y-auto" id="mobileMenu">
        <div class="p-5 space-y-1.5 bg-white">
          
          <a href="index.html" class="mobile-nav-item flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[15px] font-semibold ${active === 'home' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-200' : 'text-slate-700 hover:bg-white hover:shadow-md'} transition-all duration-300">
            <div class="w-9 h-9 rounded-xl ${active === 'home' ? 'bg-white/20' : 'bg-indigo-100'} flex items-center justify-center flex-shrink-0">
              <svg class="w-[18px] h-[18px] ${active === 'home' ? 'text-white' : 'text-indigo-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </div>
            Home
          </a>
          
          <!-- About Mobile -->
          <div>
            <button class="mobile-dropdown-toggle w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[15px] font-semibold ${active === 'about' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-200' : 'text-slate-700 hover:bg-white hover:shadow-md'} transition-all duration-300">
              <div class="w-9 h-9 rounded-xl ${active === 'about' ? 'bg-white/20' : 'bg-cyan-100'} flex items-center justify-center flex-shrink-0">
                <svg class="w-[18px] h-[18px] ${active === 'about' ? 'text-white' : 'text-cyan-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <span class="flex-1 text-left">About Us</span>
              <svg class="w-4 h-4 transition-transform duration-300 ${active === 'about' ? 'text-white/70' : 'text-slate-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mobile-submenu ml-12 mt-1 space-y-1 border-l-2 border-indigo-200 pl-4">
              <a href="about.html#overview" class="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>Company Overview
              </a>
              <a href="about.html#vision-mission" class="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Vision & Mission
              </a>
              <a href="about.html#team" class="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
                <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>Management Team
              </a>
            </div>
          </div>
          
          <!-- Services Mobile -->
          <div>
            <button class="mobile-dropdown-toggle w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[15px] font-semibold ${active === 'services' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-200' : 'text-slate-700 hover:bg-white hover:shadow-md'} transition-all duration-300">
              <div class="w-9 h-9 rounded-xl ${active === 'services' ? 'bg-white/20' : 'bg-amber-100'} flex items-center justify-center flex-shrink-0">
                <svg class="w-[18px] h-[18px] ${active === 'services' ? 'text-white' : 'text-amber-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <span class="flex-1 text-left">Services</span>
              <svg class="w-4 h-4 transition-transform duration-300 ${active === 'services' ? 'text-white/70' : 'text-slate-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mobile-submenu ml-12 mt-1 space-y-1 border-l-2 border-indigo-200 pl-4">
              <a href="services.html#home-loans" class="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Home & Plot Loans
              </a>
              <a href="services.html#lap" class="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Loan Against Property
              </a>
              <a href="services.html#business-loans" class="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>Business & MSME Loans
              </a>
              <a href="services.html#cc-od" class="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
                <span class="w-1.5 h-1.5 rounded-full bg-rose-400"></span>CC & OD Facilities
              </a>
              <a href="services.html#personal-loans" class="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
                <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>Personal Loans
              </a>
              <a href="services.html#balance-transfer" class="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
                <span class="w-1.5 h-1.5 rounded-full bg-teal-400"></span>Balance Transfer
              </a>
            </div>
          </div>

          <a href="partners.html" class="mobile-nav-item flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[15px] font-semibold ${active === 'partners' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-200' : 'text-slate-700 hover:bg-white hover:shadow-md'} transition-all duration-300">
            <div class="w-9 h-9 rounded-xl ${active === 'partners' ? 'bg-white/20' : 'bg-purple-100'} flex items-center justify-center flex-shrink-0">
              <svg class="w-[18px] h-[18px] ${active === 'partners' ? 'text-white' : 'text-purple-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            Partners
          </a>
          <a href="loan-calculator.html" class="mobile-nav-item flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[15px] font-semibold ${active === 'calculator' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-200' : 'text-slate-700 hover:bg-white hover:shadow-md'} transition-all duration-300">
            <div class="w-9 h-9 rounded-xl ${active === 'calculator' ? 'bg-white/20' : 'bg-emerald-100'} flex items-center justify-center flex-shrink-0">
              <svg class="w-[18px] h-[18px] ${active === 'calculator' ? 'text-white' : 'text-emerald-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            </div>
            Loan Calculator
          </a>
          
          <div class="pt-4 mt-2 border-t border-slate-200/60">
            <div class="grid grid-cols-2 gap-3">
              <a href="contact.html" class="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg transition-all text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Contact
              </a>
              <a href="https://wa.me/919998354191?text=Hi%2C%20I%20need%20help%20with%20a%20loan." class="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-2xl hover:shadow-lg transition-all text-sm" target="_blank">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-200/60">
            <div class="glass-card p-4 space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <a href="tel:+919998354191" class="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">+91 99983 54191</a>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <a href="mailto:info@viradiyaassociates.co.in" class="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors truncate">info@viradiyaassociates.co.in</a>
              </div>
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
      const arrows = btn.querySelectorAll('svg');
      const arrow = arrows[arrows.length - 1];
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
    <!-- Book Consultant Button - Left -->
    <button class="book-consult-float" id="bookConsultBtn" aria-label="Book a Free Consultation">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
      <span class="consult-tooltip">Book Free Consultation</span>
    </button>

    <!-- WhatsApp Float - Right -->
    <a href="https://wa.me/919998354191?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20loan%20services." class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <span class="whatsapp-tooltip">Chat with us</span>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.336 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.324-5.656-1.216-4.748-1.97-7.806-6.78-8.04-7.094-.226-.314-1.892-2.522-1.892-4.81s1.196-3.412 1.62-3.878c.39-.428 1.03-.642 1.642-.642.198 0 .376.01.536.018.424.018.636.042.916.712.35.836 1.2 2.924 1.304 3.138.106.214.214.498.078.792-.126.3-.236.432-.45.674-.214.242-.418.428-.632.69-.196.228-.416.474-.178.898.238.418 1.058 1.746 2.272 2.83 1.562 1.394 2.878 1.826 3.288 2.028.324.16.712.134.958-.134.312-.342.698-.908 1.09-1.468.28-.398.632-.448.988-.306.36.134 2.276 1.074 2.666 1.27.39.196.648.292.744.456.094.164.094.946-.296 2.046z"/></svg>
    </a>

    <!-- Book Consultant Modal -->
    <div class="service-modal-overlay" id="consultModalOverlay" onclick="if(event.target===this)closeConsultModal()">
      <div class="service-modal">
        <div class="service-modal-header">
          <div>
            <h3 class="text-xl font-extrabold text-slate-900">Book a Free Consultation</h3>
            <p class="text-sm text-slate-500 mt-1">Our expert will call you within 24 hours</p>
          </div>
          <button class="service-modal-close" onclick="closeConsultModal()">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="service-modal-body">
          <form id="consultForm" class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Full Name <span class="text-red-500">*</span></label>
                <input type="text" id="consultName" class="form-input" placeholder="Your full name" required>
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Phone Number <span class="text-red-500">*</span></label>
                <div class="phone-input-group">
                  <select class="country-code-select" id="consultCountryCode">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+971">+971</option>
                    <option value="+65">+65</option>
                    <option value="+92">+92</option>
                    <option value="+977">+977</option>
                    <option value="+880">+880</option>
                    <option value="+94">+94</option>
                  </select>
                  <input type="tel" id="consultPhone" class="form-input" placeholder="9876543210" required maxlength="10" oninput="this.value=this.value.replace(/[^0-9]/g,'')">
                </div>
              </div>
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Service Interested In <span class="text-red-500">*</span></label>
              <select id="consultService" class="form-input" required>
                <option value="">Select a service</option>
                <option value="Home Loans & Plot Loans">Home Loans & Plot Loans</option>
                <option value="Loan Against Property (LAP)">Loan Against Property (LAP)</option>
                <option value="Business Loans & MSME/SME Financing">Business Loans & MSME/SME Financing</option>
                <option value="Cash Credit (CC) & Overdraft (OD)">Cash Credit (CC) & Overdraft (OD)</option>
                <option value="Personal Loans">Personal Loans</option>
                <option value="Balance Transfer & Takeover">Balance Transfer & Takeover</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Message <span class="text-red-500">*</span></label>
              <textarea id="consultMessage" rows="3" class="form-input" placeholder="Briefly describe your requirement..." required></textarea>
            </div>
            <button type="submit" class="btn-primary w-full flex items-center justify-center gap-2 text-center border-none cursor-pointer">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              Book Consultation
            </button>
            <div id="consultFormStatus" style="display:none;"></div>
          </form>
        </div>
      </div>
    </div>

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
            <div class="flex justify-start space-x-3 mb-6 bg-[#ffffff] rounded-lg p-2 mr-[40px]">
              <img src="images/company_logo.jpeg" alt="Viradiya Associates" class="mx-auto h-12 w-auto object-contain rounded">
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

  // Book Consultant button
  const bookConsultBtn = document.getElementById('bookConsultBtn');
  if (bookConsultBtn) {
    window.addEventListener('scroll', () => {
      bookConsultBtn.classList.toggle('visible', window.scrollY > 300);
    });
    bookConsultBtn.addEventListener('click', openConsultModal);
  }

  // Consult modal logic
  const consultForm = document.getElementById('consultForm');
  if (consultForm) {
    consultForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const name = document.getElementById('consultName').value.trim();
      const phone = document.getElementById('consultPhone').value.trim();
      const countryCode = document.getElementById('consultCountryCode').value;
      const service = document.getElementById('consultService').value;
      const message = document.getElementById('consultMessage').value.trim();

      if (!name || !phone || !service || !message) {
        showConsultStatus('Please fill all required fields.', 'error');
        return;
      }
      if (!/^\d{10}$/.test(phone)) {
        showConsultStatus('Please enter a valid 10-digit phone number.', 'error');
        return;
      }

      const submitBtn = consultForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Sending...';

      try {
        const resp = await fetch('https://piwebtechnology.com/send-form-mail?company=viradiyaassociates', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: 'info@viradiyaassociates.co.in',
            subject: 'Book Consultation - ' + service,
            fields: {
              'Name': name,
              'Phone': countryCode + ' ' + phone,
              'Service': service,
              'Message': message
            }
          })
        });
        if (resp.ok) {
          showConsultStatus('Thank you! Our expert will contact you soon.', 'success');
          consultForm.reset();
        } else {
          showConsultStatus('Failed to send. Please try again.', 'error');
        }
      } catch (err) {
        showConsultStatus('Network error. Please try again later.', 'error');
      }
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg> Book Consultation';
    });
  }
}

function openConsultModal() {
  const modal = document.getElementById('consultModalOverlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeConsultModal() {
  const modal = document.getElementById('consultModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeConsultModal();
});

function showConsultStatus(msg, type) {
  const el = document.getElementById('consultFormStatus');
  if (!el) return;
  el.style.display = 'block';
  el.className = 'mt-3 p-3 rounded-lg text-sm font-medium text-center ' +
    (type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200');
  el.textContent = msg;
  if (type === 'success') setTimeout(() => { el.style.display = 'none'; closeConsultModal(); }, 3000);
}
