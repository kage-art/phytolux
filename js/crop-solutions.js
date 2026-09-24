/**
 * Phytolux Bio Science - Crop Solutions Interactive Engine
 * Systematic Flow: Crop -> Challenges -> Suitable Products -> Application Information -> Enquiry
 */

document.addEventListener('DOMContentLoaded', () => {
  const cropGroupButtons = document.querySelectorAll('.crop-group-btn');
  const cropSelectorGrid = document.getElementById('crop-selector-grid');
  const cropDetailContainer = document.getElementById('crop-solution-detail');

  if (!cropGroupButtons.length || !cropSelectorGrid || !cropDetailContainer) return;

  let currentCategory = 'cereals';
  let currentCropId = 'paddy';

  function renderCropTiles(category) {
    const crops = PHYTOLUX_DATA.cropSolutions[category] || [];
    cropSelectorGrid.innerHTML = '';

    crops.forEach((crop) => {
      const tile = document.createElement('button');
      tile.type = 'button';
      tile.className = `crop-tile ${crop.id === currentCropId ? 'active' : ''}`;
      tile.setAttribute('data-crop-id', crop.id);
      tile.setAttribute('aria-label', `Select ${crop.name}`);
      tile.innerHTML = `
        <div class="crop-tile-icon" aria-hidden="true">${crop.icon}</div>
        <div class="crop-tile-name">${crop.name}</div>
      `;

      tile.addEventListener('click', () => {
        document.querySelectorAll('.crop-tile').forEach(t => t.classList.remove('active'));
        tile.classList.add('active');
        currentCropId = crop.id;
        renderCropDetail(crop);
      });

      cropSelectorGrid.appendChild(tile);
    });

    // Pick first crop if current is not in category
    const activeCrop = crops.find(c => c.id === currentCropId) || crops[0];
    if (activeCrop) {
      currentCropId = activeCrop.id;
      const firstTile = cropSelectorGrid.querySelector(`[data-crop-id="${activeCrop.id}"]`);
      if (firstTile) firstTile.classList.add('active');
      renderCropDetail(activeCrop);
    }
  }

  function renderCropDetail(crop) {
    if (!crop) return;

    const challengesHtml = crop.challenges
      .map(ch => `<li>${ch}</li>`)
      .join('');

    const productsHtml = crop.products
      .map(p => `
        <li style="margin-bottom: 8px;">
          <strong>${p.name}</strong>
          <span class="badge badge-green" style="margin-left: 6px; font-size: 10px;">${p.role}</span>
        </li>
      `)
      .join('');

    const scheduleHtml = crop.applicationSchedule
      .map(s => `
        <li style="margin-bottom: 8px;">
          <strong>${s.stage}:</strong> ${s.method}
        </li>
      `)
      .join('');

    cropDetailContainer.innerHTML = `
      <div class="crop-flow-container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid var(--earth-200); padding-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 2rem;">${crop.icon}</span>
            <div>
              <h3 style="font-size: 1.35rem; color: var(--green-950); margin: 0;">${crop.name} Agricultural Protocol</h3>
              <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">Scientific biological nutrition & protection lifecycle</p>
            </div>
          </div>
          <div style="display: flex; gap: 8px;">
            <button type="button" class="btn btn-whatsapp btn-sm" id="btn-crop-whatsapp" data-crop="${crop.name}">
              <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
              WhatsApp Crop Advisor
            </button>
            <button type="button" class="btn btn-primary btn-sm" id="btn-crop-enquire" data-crop="${crop.name}">
              Enquire for ${crop.name}
            </button>
          </div>
        </div>

        <div class="flow-step-grid">
          <!-- Step 1: Crop Challenges -->
          <div class="flow-step-card">
            <div class="flow-step-header">
              <span class="flow-step-num">1</span>
              <h4 class="flow-step-title">Agricultural Challenges</h4>
            </div>
            <ul>${challengesHtml}</ul>
          </div>

          <!-- Step 2: Suitable Products -->
          <div class="flow-step-card">
            <div class="flow-step-header">
              <span class="flow-step-num" style="background-color: var(--green-700);">2</span>
              <h4 class="flow-step-title">Recommended Phytolux Bio-Inputs</h4>
            </div>
            <ul>${productsHtml}</ul>
          </div>

          <!-- Step 3: Application & Dosage Info -->
          <div class="flow-step-card">
            <div class="flow-step-header">
              <span class="flow-step-num" style="background-color: var(--amber-700);">3</span>
              <h4 class="flow-step-title">Verified Field Schedule</h4>
            </div>
            <ul>${scheduleHtml}</ul>
          </div>
        </div>
      </div>
    `;

    // Hook up buttons in rendered detail
    const waBtn = cropDetailContainer.querySelector('#btn-crop-whatsapp');
    if (waBtn) {
      waBtn.addEventListener('click', () => {
        const text = encodeURIComponent(`Hello Phytolux Bio Science, I need scientific agronomy advisory for my ${crop.name} crop.`);
        window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
      });
    }

    const enqBtn = cropDetailContainer.querySelector('#btn-crop-enquire');
    if (enqBtn) {
      enqBtn.addEventListener('click', () => {
        const farmerSection = document.getElementById('farmer-enquiry');
        const cropInput = document.getElementById('farmer-crop');
        if (cropInput) cropInput.value = crop.name;
        if (farmerSection) {
          farmerSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // Group button handlers
  cropGroupButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cropGroupButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-crop-group');
      renderCropTiles(currentCategory);
    });
  });

  // Initial render
  renderCropTiles('cereals');
});
