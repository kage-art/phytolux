/**
 * Phytolux Bio Science - Bio-Fertilizer Dosage & Acreage Calculator
 * Scientific calculations based on FCO and Agronomic Field Standards
 */

document.addEventListener('DOMContentLoaded', () => {
  const calcProduct = document.getElementById('calc-product');
  const calcAcres = document.getElementById('calc-acres');
  const calcCrop = document.getElementById('calc-crop');
  const calcMethod = document.getElementById('calc-method');
  const calcForm = document.getElementById('dosage-calculator-form');
  const calcResultBox = document.getElementById('calc-result-box');

  if (!calcForm || !calcProduct || !calcAcres || !calcResultBox) return;

  // Rates definition (per acre)
  const RATES = {
    'psb': {
      unit: 'Litres',
      seed: 0.25,
      soil: 1.5,
      drip: 1.0,
      note: 'Solubilizes 20–25 kg P2O5/acre from fixed soil reserves. Apply with organic manure.'
    },
    'ksb': {
      unit: 'Litres',
      seed: 0.25,
      soil: 1.5,
      drip: 1.0,
      note: 'Mobilizes insoluble potash; improves grain test weight and fruit sweetness.'
    },
    'azotobacter': {
      unit: 'Litres',
      seed: 0.25,
      soil: 1.0,
      drip: 1.0,
      note: 'Biological N-fixation for non-leguminous crops. Saves 20–25 kg urea equivalent.'
    },
    'consortia': {
      unit: 'Litres',
      seed: 0.25,
      soil: 2.0,
      drip: 1.5,
      note: 'Complete 3-in-1 N-P-K bacterial synergy. Best for high-intensity cropping.'
    },
    'bio-zyme': {
      unit: 'Litres',
      seed: 0.1,
      soil: 1.0,
      drip: 0.5,
      foliar: 0.5,
      note: 'Cold water Ascophyllum seaweed bio-stimulant. Mitigates abiotic heat & drought stress.'
    },
    'humic-active': {
      unit: 'kg',
      seed: 0.1,
      soil: 2.0,
      drip: 1.0,
      foliar: 0.3,
      note: '85% Potassium humate soil conditioner. Expands root feeder hair architecture.'
    },
    'chelated-zinc': {
      unit: 'grams',
      seed: 50,
      soil: 1000,
      drip: 500,
      foliar: 250,
      note: '100% water soluble EDTA-Zn. Instantly remedies Khaira disease and stunted growth.'
    }
  };

  function calculateDosage() {
    const productId = calcProduct.value;
    const acres = parseFloat(calcAcres.value) || 1;
    const method = calcMethod.value;
    const crop = calcCrop.value;

    const rateConfig = RATES[productId] || RATES['psb'];
    const perAcreRate = rateConfig[method] || rateConfig['soil'] || 1.0;
    const totalRequirement = (perAcreRate * acres).toFixed(acres >= 10 ? 0 : 1);

    calcResultBox.innerHTML = `
      <div class="calc-result-card">
        <div class="calc-result-header">
          <div>
            <span class="badge badge-green" style="margin-bottom: 6px;">Recommended Agronomic Dosage</span>
            <div style="font-size: 1.15rem; font-weight: var(--font-weight-bold); color: var(--green-950);">
              ${calcProduct.options[calcProduct.selectedIndex].text}
            </div>
            <div style="font-size: 0.8rem; color: var(--color-text-muted);">
              For ${acres} Acre(s) of ${crop} via ${calcMethod.options[calcMethod.selectedIndex].text}
            </div>
          </div>
          <div style="text-align: right;">
            <div class="calc-dose-num">${totalRequirement} <span style="font-size: 1rem; font-weight: normal; color: var(--slate-700);">${rateConfig.unit}</span></div>
            <div style="font-size: 0.75rem; color: var(--slate-500);">${perAcreRate} ${rateConfig.unit}/acre standard rate</div>
          </div>
        </div>

        <div style="font-size: 0.85rem; color: var(--slate-800); line-height: 1.5; background: #ffffff; padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--green-200); margin-bottom: 16px;">
          <strong>Agronomy Note:</strong> ${rateConfig.note}
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 12px; flex-wrap: wrap;">
          <button type="button" class="btn btn-whatsapp btn-sm" id="btn-calc-wa">
            Order This Dosage on WhatsApp
          </button>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-calc-reset">
            Recalculate
          </button>
        </div>
      </div>
    `;

    const btnWa = calcResultBox.querySelector('#btn-calc-wa');
    if (btnWa) {
      btnWa.addEventListener('click', () => {
        const prodName = calcProduct.options[calcProduct.selectedIndex].text;
        const text = encodeURIComponent(`Hello Phytolux, I calculated requirement for ${acres} Acre(s) of ${crop}: ${totalRequirement} ${rateConfig.unit} of ${prodName}. Please share dealer availability and price.`);
        window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
      });
    }

    const btnReset = calcResultBox.querySelector('#btn-calc-reset');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        calcAcres.value = 1;
        calculateDosage();
      });
    }
  }

  calcForm.addEventListener('change', calculateDosage);
  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateDosage();
  });

  // Run on start
  calculateDosage();
});
