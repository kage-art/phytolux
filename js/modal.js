/**
 * Phytolux Bio Science - Modal Controller
 * Accessible Native <dialog> Controller for Product Details & Technical Data Sheets
 */

window.PhytoluxModal = (function() {
  let productModal;
  let generalModal;

  function init() {
    productModal = document.getElementById('product-detail-modal');
    generalModal = document.getElementById('general-modal');

    // Close buttons on modals
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        closeAllModals();
      });
    });

    // Close on backdrop click (native dialog light dismiss)
    [productModal, generalModal].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (event) => {
          const rect = modal.getBoundingClientRect();
          const isInDialog = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );
          if (!isInDialog) {
            closeAllModals();
          }
        });

        // Close on ESC key
        modal.addEventListener('cancel', () => {
          cleanUrlHash();
        });
      }
    });

    // Listen to hash change for deep-linking
    window.addEventListener('hashchange', checkHashRoute);
    checkHashRoute();
  }

  function cleanUrlHash() {
    if (window.location.hash.startsWith('#product-')) {
      history.replaceState(null, null, ' ');
    }
  }

  function closeAllModals() {
    if (productModal && productModal.open) productModal.close();
    if (generalModal && generalModal.open) generalModal.close();
    cleanUrlHash();
  }

  function openProductModal(productId) {
    const product = PHYTOLUX_DATA.products.find(p => p.id === productId);
    if (!product || !productModal) return;

    const modalTitle = document.getElementById('modal-product-name');
    const modalCategory = document.getElementById('modal-product-category');
    const modalForm = document.getElementById('modal-product-form');
    const modalBody = document.getElementById('modal-product-body');
    const modalEnquireBtn = document.getElementById('modal-btn-enquire');
    const modalDownloadBtn = document.getElementById('modal-btn-download');

    if (modalTitle) modalTitle.textContent = product.name;
    if (modalCategory) modalCategory.textContent = product.categoryName;
    if (modalForm) modalForm.textContent = `Form: ${product.form}`;

    const benefitsHtml = product.benefits
      .map(b => `<li style="margin-bottom: 6px; padding-left: 18px; position: relative;"><span style="position: absolute; left: 0; color: var(--green-600);">✓</span> ${b}</li>`)
      .join('');

    const cropsHtml = product.suitableCrops
      .map(c => `<span class="crop-pill">${c}</span>`)
      .join(' ');

    let appDetailsHtml = '';
    for (const [key, val] of Object.entries(product.application)) {
      const formattedKey = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
      appDetailsHtml += `
        <div style="margin-bottom: 10px;">
          <strong style="color: var(--slate-900); font-size: 13px;">${formattedKey}:</strong>
          <p style="font-size: 13px; color: var(--color-text-muted); margin: 2px 0 0;">${val}</p>
        </div>
      `;
    }

    if (modalBody) {
      modalBody.innerHTML = `
        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 13px; text-transform: uppercase; color: var(--slate-500); letter-spacing: 0.05em; margin-bottom: 8px;">Product Overview</h4>
          <p style="font-size: 14px; color: var(--slate-800); line-height: 1.6;">${product.overview}</p>
        </div>

        <div style="background-color: var(--green-50); border: 1px solid var(--green-200); border-radius: var(--radius-md); padding: 16px; margin-bottom: 24px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <svg style="width: 18px; height: 18px; fill: var(--green-800);" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <strong style="font-size: 14px; color: var(--green-950);">Verified Active Composition</strong>
          </div>
          <p style="font-size: 13px; color: var(--green-900); margin: 0; font-family: monospace; line-height: 1.5;">${product.composition}</p>
          <div style="font-size: 11px; color: var(--slate-600); margin-top: 6px;">
            *Manufactured under strict ISO 9001:2015 and FCO 1985 quality assurance testing.
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 24px;">
          <div>
            <h4 style="font-size: 13px; text-transform: uppercase; color: var(--slate-500); letter-spacing: 0.05em; margin-bottom: 10px;">Key Agronomic Benefits</h4>
            <ul style="list-style: none; padding: 0; font-size: 13px; color: var(--slate-800);">${benefitsHtml}</ul>
          </div>
          <div>
            <h4 style="font-size: 13px; text-transform: uppercase; color: var(--slate-500); letter-spacing: 0.05em; margin-bottom: 10px;">Suitable Crops</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">${cropsHtml}</div>

            <h4 style="font-size: 13px; text-transform: uppercase; color: var(--slate-500); letter-spacing: 0.05em; margin-bottom: 6px;">Available Packaging</h4>
            <p style="font-size: 13px; color: var(--slate-700); margin: 0;">${product.packaging}</p>
          </div>
        </div>

        <div style="border-top: 1px solid var(--color-border); padding-top: 20px;">
          <h4 style="font-size: 13px; text-transform: uppercase; color: var(--slate-500); letter-spacing: 0.05em; margin-bottom: 12px;">Verified Application Methods & Dosage</h4>
          ${appDetailsHtml}
        </div>
      `;
    }

    // Set buttons
    if (modalEnquireBtn) {
      modalEnquireBtn.onclick = () => {
        closeAllModals();
        const farmerSection = document.getElementById('farmer-enquiry');
        const productSelect = document.getElementById('farmer-product');
        if (productSelect) productSelect.value = product.name;
        if (farmerSection) farmerSection.scrollIntoView({ behavior: 'smooth' });
      };
    }

    if (modalDownloadBtn) {
      modalDownloadBtn.onclick = () => {
        generatePrintableTDS(product);
      };
    }

    productModal.showModal();
    window.location.hash = `#product-${product.id}`;
  }

  function generatePrintableTDS(product) {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to view and print the Technical Data Sheet.');
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Technical Data Sheet - ${product.name} | Phytolux Bio Science</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; padding: 40px; color: #1a251f; max-width: 800px; margin: auto; }
          .header { border-bottom: 2px solid #16532d; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-end; }
          h1 { margin: 0 0 6px; color: #0f3d23; font-size: 24px; }
          .subtitle { color: #53645a; font-size: 14px; margin: 0; }
          .badge { display: inline-block; background: #eaf5ed; color: #16532d; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; }
          .section { margin-bottom: 24px; }
          .section-title { font-size: 14px; text-transform: uppercase; color: #53645a; border-bottom: 1px solid #e0e6e2; padding-bottom: 6px; margin-bottom: 10px; }
          .spec-box { background: #f6faf8; border: 1px solid #cce3d5; padding: 14px; border-radius: 8px; margin-bottom: 16px; }
          ul { padding-left: 20px; font-size: 14px; line-height: 1.6; }
          .footer { margin-top: 40px; border-top: 1px solid #ccc; padding-top: 12px; font-size: 11px; color: #777; text-align: center; }
          @media print { .no-print { display: none; } }
        </style>
      </head>
      <body>
        <div class="no-print" style="margin-bottom: 20px; text-align: right;">
          <button onclick="window.print()" style="background: #16532d; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold;">Print / Save as PDF</button>
        </div>
        <div class="header">
          <div>
            <h1>PHYTOLUX BIO SCIENCE PRIVATE LIMITED</h1>
            <p class="subtitle">Bio Solutions for Sustainable Agriculture | Technical Data Sheet (TDS)</p>
          </div>
          <div>
            <span class="badge">Official Specification</span>
          </div>
        </div>

        <div class="section">
          <h2>${product.name}</h2>
          <p style="font-size: 14px; line-height: 1.6;">${product.overview}</p>
        </div>

        <div class="section spec-box">
          <strong style="color: #0f3d23;">Verified Biological Composition:</strong>
          <p style="margin: 6px 0 0; font-family: monospace; font-size: 14px;">${product.composition}</p>
          <p style="margin: 6px 0 0; font-size: 12px; color: #555;">Formulation Type: ${product.form} | Compliant with Fertilizer Control Order (FCO 1985)</p>
        </div>

        <div class="section">
          <div class="section-title">Key Agronomic Benefits</div>
          <ul>
            ${product.benefits.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <div class="section-title">Suitable Crops & Target Agronomy</div>
          <p style="font-size: 14px;">${product.suitableCrops.join(', ')}</p>
        </div>

        <div class="section">
          <div class="section-title">Standard Application & Dosage Recommendations</div>
          <p style="font-size: 14px; line-height: 1.6;">
            <strong>Seed Treatment:</strong> ${product.application.seedTreatment || 'N/A'}<br>
            <strong>Soil Application:</strong> ${product.application.soilApplication || 'N/A'}<br>
            <strong>Drip Fertigation:</strong> ${product.application.dripIrrigation || 'N/A'}<br>
            <strong>Packaging:</strong> ${product.packaging}
          </p>
        </div>

        <div class="footer">
          © 2026 Phytolux Bio Science Private Limited. Plot No. 42, Biotech & Agronomy Corridor. Toll-Free Helpline: 1800-890-PHYT | Email: contact@phytoluxbioscience.com
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
  }

  function openGeneralModal(title, content) {
    if (!generalModal) return;
    const modalTitle = document.getElementById('general-modal-title');
    const modalBody = document.getElementById('general-modal-body');
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.innerHTML = content;
    generalModal.showModal();
  }

  function checkHashRoute() {
    const hash = window.location.hash;
    if (hash.startsWith('#product-')) {
      const prodId = hash.replace('#product-', '');
      openProductModal(prodId);
    }
  }

  return {
    init,
    openProductModal,
    openGeneralModal,
    closeAllModals
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  PhytoluxModal.init();
});
