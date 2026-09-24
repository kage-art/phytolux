/**
 * Phytolux Bio Science - Main Application Controller
 * Handles Multi-Page Navigation, Mobile Drawer, Dynamic Product Details, Filters, and Resources
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initProductDetailPage();
  renderProductsCatalog();
  renderResources();
  renderFaqs();
  initLegalModalLinks();
  initInteractiveControls();
});

/* ==========================================================================
   Mobile Navigation Drawer Controller
   ========================================================================== */
function initMobileDrawer() {
  const hamburgerBtns = document.querySelectorAll('.hamburger-pill-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('btn-close-drawer');

  if (!drawer) return;

  hamburgerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      drawer.classList.add('open');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
      drawer.classList.remove('open');
    }
  });
}

/* ==========================================================================
   Dedicated Product Detail Page (product-detail.html?id=...)
   ========================================================================== */
function initProductDetailPage() {
  const detailContainer = document.getElementById('product-detail-view');
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'psb';

  const product = PHYTOLUX_DATA.products.find(p => p.id === productId) || PHYTOLUX_DATA.products[0];
  if (!product) return;

  // Set document title
  document.title = `${product.name} | Phytolux Bio Science`;

  // Render Breadcrumb
  const breadcrumbCurrent = document.getElementById('detail-breadcrumb-current');
  const breadcrumbCat = document.getElementById('detail-breadcrumb-cat');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;
  if (breadcrumbCat) breadcrumbCat.textContent = product.categoryName;

  // Render Hero
  const titleEl = document.getElementById('detail-product-title');
  const catEl = document.getElementById('detail-product-cat');
  const formEl = document.getElementById('detail-product-form');
  const taglineEl = document.getElementById('detail-product-tagline');
  const compSnippet = document.getElementById('detail-comp-snippet');
  const packagingEl = document.getElementById('detail-packaging');

  if (titleEl) titleEl.textContent = product.name;
  if (catEl) catEl.textContent = product.categoryName;
  if (formEl) formEl.textContent = `Form: ${product.form}`;
  if (taglineEl) taglineEl.textContent = product.tagline;
  if (compSnippet) compSnippet.textContent = product.composition;
  if (packagingEl) packagingEl.textContent = product.packaging;

  // Render Overview Tab
  const overviewEl = document.getElementById('tab-overview-content');
  if (overviewEl) {
    overviewEl.innerHTML = `
      <p style="font-size: 1.05rem; line-height: 1.7; color: var(--slate-800); margin-bottom: 24px;">
        ${product.overview}
      </p>
      <div style="background: var(--green-50); border: 1px solid var(--green-200); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 24px;">
        <h4 style="color: var(--green-950); margin-bottom: 8px;">FCO 1985 Compliance & Biological Stability</h4>
        <p style="font-size: 13px; color: var(--slate-700); margin: 0; line-height: 1.6;">
          Phytolux ${product.name} is produced using closed, automated bioreactors maintaining strict strain viability (min 1 × 10⁸ CFU/ml) with zero antagonistic contaminants. Formulated to adhere strictly to the Government of India Fertilizer Control Order standards.
        </p>
      </div>
    `;
  }

  // Render Benefits Tab
  const benefitsEl = document.getElementById('tab-benefits-content');
  if (benefitsEl) {
    benefitsEl.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
        ${product.benefits.map((b, i) => `
          <div style="background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 18px; display: flex; gap: 12px; align-items: flex-start;">
            <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--lime-500); color: var(--green-950); display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">✓</div>
            <div>
              <h5 style="font-size: 14px; color: var(--green-950); margin: 0 0 4px;">Advantage 0${i + 1}</h5>
              <p style="font-size: 13px; color: var(--slate-700); margin: 0; line-height: 1.5;">${b}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Render Crops & Dosage Tab
  const dosageEl = document.getElementById('tab-dosage-content');
  if (dosageEl) {
    let appMethods = '';
    for (const [key, val] of Object.entries(product.application)) {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      appMethods += `
        <div style="background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 12px;">
          <strong style="color: var(--green-950); font-size: 14px;">${formattedKey} Method:</strong>
          <p style="font-size: 13px; color: var(--slate-700); margin: 4px 0 0; line-height: 1.5;">${val}</p>
        </div>
      `;
    }

    dosageEl.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 14px; text-transform: uppercase; color: var(--slate-500); margin-bottom: 12px;">Suitable Crops</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${product.suitableCrops.map(c => `<span class="pill-tag pill-tag-green">${c}</span>`).join('')}
        </div>
      </div>
      <div>
        <h4 style="font-size: 14px; text-transform: uppercase; color: var(--slate-500); margin-bottom: 12px;">Verified Field Application Schedule</h4>
        ${appMethods}
      </div>
    `;
  }

  // Hook TDS Printable Sheet
  const downloadTdsBtn = document.getElementById('btn-download-detail-tds');
  if (downloadTdsBtn) {
    downloadTdsBtn.addEventListener('click', () => {
      window.PhytoluxModal.openProductModal(product.id);
    });
  }

  // Pre-fill enquiry link
  const orderWaBtn = document.getElementById('btn-order-wa');
  if (orderWaBtn) {
    orderWaBtn.addEventListener('click', () => {
      const text = encodeURIComponent(`Hello Phytolux Bio Science, I am interested in purchasing ${product.name} (${product.form}). Please connect me with my nearest authorized dealer.`);
      window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
    });
  }

  // Pre-fill enquiry form button
  const formEnquireBtn = document.getElementById('btn-enquire-this-product');
  if (formEnquireBtn) {
    formEnquireBtn.addEventListener('click', () => {
      window.location.href = `farmer-advisory.html?product=${encodeURIComponent(product.name)}`;
    });
  }

  // Render Related Products
  const relatedGrid = document.getElementById('related-products-grid');
  if (relatedGrid) {
    const related = PHYTOLUX_DATA.products
      .filter(p => p.id !== product.id)
      .slice(0, 3);

    relatedGrid.innerHTML = related.map(p => `
      <div class="product-bento-card">
        <div class="product-bento-top">
          <span class="pill-tag pill-tag-green">${p.categoryName}</span>
          <span class="product-rating-pill">★ 4.9</span>
        </div>
        <h3>${p.name}</h3>
        <p class="product-bento-desc">${p.tagline}</p>
        <div class="product-bento-actions">
          <a href="product-detail.html?id=${p.id}" class="btn btn-dark btn-sm">
            View Details
            <span class="btn-arrow-circle"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg></span>
          </a>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   Product Catalog Rendering (products.html & index.html preview)
   ========================================================================== */
function renderProductsCatalog() {
  const productsGrid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('product-search-input');
  const countLabel = document.getElementById('products-count');

  if (!productsGrid) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function update() {
    const filtered = PHYTOLUX_DATA.products.filter(p => {
      const matchesCategory = (activeCategory === 'all' || p.category === activeCategory);
      const matchesSearch = (
        p.name.toLowerCase().includes(searchTerm) ||
        p.tagline.toLowerCase().includes(searchTerm) ||
        p.suitableCrops.some(c => c.toLowerCase().includes(searchTerm)) ||
        p.composition.toLowerCase().includes(searchTerm)
      );
      return matchesCategory && matchesSearch;
    });

    if (countLabel) {
      countLabel.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border-radius: var(--radius-xl); border: 1px dashed var(--slate-300);">
          <p style="font-size: 1.1rem; color: var(--slate-700); margin-bottom: 8px;">No bio-products found matching your search.</p>
          <p style="font-size: 0.85rem; color: var(--color-text-muted);">Try a different crop name, bacterial strain, or select "All Products".</p>
          <button type="button" class="btn btn-lime btn-sm" id="btn-reset-filters" style="margin-top: 12px;">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCategory = 'all';
          searchTerm = '';
          if (searchInput) searchInput.value = '';
          filterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'all'));
          update();
        });
      }
      return;
    }

    productsGrid.innerHTML = filtered.map(p => {
      const cropsPills = p.suitableCrops.slice(0, 3).map(c => `<span class="crop-tag-pill">${c}</span>`).join(' ');

      return `
        <article class="product-bento-card">
          <div class="product-bento-top">
            <span class="pill-tag pill-tag-green">${p.categoryName}</span>
            <span class="product-rating-pill">★ 4.9</span>
          </div>

          <h3>${p.name}</h3>
          <p class="product-bento-desc">${p.tagline}</p>

          <div class="product-meta-spec">
            <div class="product-meta-row">
              <span style="color: var(--slate-500); font-weight: 500;">Active Strain:</span>
              <span style="color: var(--green-950); font-weight: 700;">${p.composition.split('(')[0].trim().substring(0, 24)}</span>
            </div>
            <div class="product-meta-row">
              <span style="color: var(--slate-500); font-weight: 500;">Viability:</span>
              <span style="color: var(--green-700); font-weight: 700;">Min 1×10⁸ CFU/ml</span>
            </div>
          </div>

          <div class="product-crops-pills">
            ${cropsPills}
          </div>

          <div class="product-bento-actions">
            <a href="product-detail.html?id=${p.id}" class="btn btn-dark btn-sm" style="flex: 1;">
              View Details
              <span class="btn-arrow-circle"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg></span>
            </a>
            <a href="farmer-advisory.html?product=${encodeURIComponent(p.name)}" class="btn btn-white btn-sm">
              Enquire
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      update();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      update();
    });
  }

  // Initial render
  update();
}

/* ==========================================================================
   Resource Centre (resources.html)
   ========================================================================== */
function renderResources() {
  const resourcesGrid = document.getElementById('resources-grid');
  if (!resourcesGrid) return;

  resourcesGrid.innerHTML = PHYTOLUX_DATA.resources.map(res => `
    <article class="bento-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="pill-tag pill-tag-green">${res.type}</span>
        <span style="font-size: 11px; font-weight: bold; color: var(--slate-500);">${res.format}</span>
      </div>

      <h3 style="font-size: 1.15rem; color: var(--green-950); margin-bottom: 8px;">${res.title}</h3>
      <p style="font-size: 13px; color: var(--slate-600); line-height: 1.6; margin-bottom: 20px; flex-grow: 1;">${res.description}</p>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--slate-100); padding-top: 14px;">
        <span style="font-size: 12px; color: var(--slate-500); font-weight: 600;">Size: ${res.fileSize}</span>
        <button type="button" class="btn btn-lime btn-sm btn-resource-download" data-res-title="${res.title}">
          Download
          <span class="btn-arrow-circle"><svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="#000" stroke="none"/></svg></span>
        </button>
      </div>
    </article>
  `).join('');

  resourcesGrid.querySelectorAll('.btn-resource-download').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-res-title');
      window.PhytoluxForms.showToast(`Starting secure download: "${title}"`);
      setTimeout(() => {
        window.PhytoluxForms.showToast(`Document downloaded successfully.`);
      }, 1000);
    });
  });
}

/* ==========================================================================
   FAQs Accordion
   ========================================================================== */
function renderFaqs() {
  const faqContainer = document.getElementById('faq-accordion');
  if (!faqContainer) return;

  faqContainer.innerHTML = PHYTOLUX_DATA.faqs.map((faq, index) => `
    <div class="accordion-item ${index === 0 ? 'open' : ''}">
      <button type="button" class="accordion-header" aria-expanded="${index === 0}">
        <span>${faq.question}</span>
        <svg class="accordion-icon" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
      </button>
      <div class="accordion-content">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  faqContainer.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      faqContainer.querySelectorAll('.accordion-item').forEach(it => {
        it.classList.remove('open');
        it.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   Legal Modals
   ========================================================================== */
function initLegalModalLinks() {
  document.querySelectorAll('[data-legal-modal]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const type = link.getAttribute('data-legal-modal');

      if (type === 'privacy') {
        window.PhytoluxModal.openGeneralModal(
          'Privacy Policy - Phytolux Bio Science Private Limited',
          `
            <div style="font-size: 14px; line-height: 1.6; color: var(--slate-800);">
              <p><strong>Effective Date:</strong> January 2026</p>
              <p>Phytolux Bio Science Private Limited respects the privacy of our farmers, channel partners, and dealers. We only collect contact and agricultural data strictly necessary for processing dealer applications, technical agronomic consultations, and product delivery.</p>
              <p>We do not share, sell, or disclose personal farmer or dealer data to third-party advertisers. All WhatsApp advisory consultations are maintained securely between our qualified regional agronomists and the individual grower.</p>
            </div>
          `
        );
      } else if (type === 'terms') {
        window.PhytoluxModal.openGeneralModal(
          'Terms & Conditions - Phytolux Bio Science Private Limited',
          `
            <div style="font-size: 14px; line-height: 1.6; color: var(--slate-800);">
              <p><strong>1. Commercial Dealerships:</strong> Official distribution licenses and dealership allocations are granted following territorial verification and standard FCO compliance checks.</p>
              <p><strong>2. Product Storage & Handling:</strong> Bio-fertilizers contain living beneficial bacterial cultures. To maintain viable CFU count, store products away from direct sunlight in cool, dry conditions (below 35°C).</p>
            </div>
          `
        );
      } else if (type === 'disclaimer') {
        window.PhytoluxModal.openGeneralModal(
          'Agricultural Product Disclaimer',
          `
            <div style="font-size: 14px; line-height: 1.6; color: var(--slate-800);">
              <p>Phytolux Bio Science Private Limited guarantees the verified microbiological purity, strain authenticity, and initial CFU viability count of our bio-fertilizers and bio-stimulants at the time of manufacture as mandated under the Fertilizer Control Order (FCO 1985).</p>
              <p>Since field agronomic results are influenced by soil pH, ambient temperature, water quality, pest pressure, and local weather conditions beyond manufacturer control, instructions regarding application dosage and method must be followed conscientiously.</p>
            </div>
          `
        );
      }
    });
  });
}

/* ==========================================================================
   Back to Top & Interactive Carousel Controls
   ========================================================================== */
function initInteractiveControls() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hero carousel image switcher
  const heroImg = document.querySelector('.hero-backdrop-img img');
  const heroPrev = document.querySelector('.hero-carousel-controls .hero-nav-arrow-btn:first-child');
  const heroNext = document.querySelector('.hero-carousel-controls .hero-nav-arrow-btn:last-child');
  const heroImages = [
    'assets/images/hero-farm.jpg',
    'assets/images/lab-science.jpg',
    'assets/images/farmer-field.jpg'
  ];
  let currentHeroIdx = 0;

  if (heroImg && heroPrev && heroNext) {
    heroPrev.addEventListener('click', () => {
      currentHeroIdx = (currentHeroIdx - 1 + heroImages.length) % heroImages.length;
      heroImg.style.transition = 'opacity 0.2s ease';
      heroImg.style.opacity = '0.4';
      setTimeout(() => {
        heroImg.src = heroImages[currentHeroIdx];
        heroImg.style.opacity = '1';
      }, 200);
    });

    heroNext.addEventListener('click', () => {
      currentHeroIdx = (currentHeroIdx + 1) % heroImages.length;
      heroImg.style.transition = 'opacity 0.2s ease';
      heroImg.style.opacity = '0.4';
      setTimeout(() => {
        heroImg.src = heroImages[currentHeroIdx];
        heroImg.style.opacity = '1';
      }, 200);
    });
  }
}
