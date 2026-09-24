/**
 * Phytolux Bio Science - Forms & Interactive Enquiries
 * Handles Dealer, Farmer, and Quick Enquiry Submissions with Toast alerts and WhatsApp deep-links
 */

window.PhytoluxForms = (function() {
  function init() {
    setupDealerForm();
    setupFarmerForm();
    setupContactForm();
    setupWhatsAppTriggers();
  }

  function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <svg style="width: 20px; height: 20px; fill: currentColor; flex-shrink: 0;" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <div>${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  function setupDealerForm() {
    const form = document.getElementById('dealer-enquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = {
        type: 'Dealer Enquiry',
        name: form['dealer-name'].value.trim(),
        company: form['dealer-company'].value.trim(),
        mobile: form['dealer-mobile'].value.trim(),
        email: form['dealer-email'].value.trim(),
        state: form['dealer-state'].value,
        district: form['dealer-district'].value.trim(),
        businessType: form['dealer-business-type'].value,
        products: form['dealer-products'].value,
        message: form['dealer-message'].value.trim(),
        timestamp: new Date().toISOString()
      };

      // Save to localStorage for demo persistence
      saveEnquiry(formData);

      showToast(`Thank you, ${formData.name}! Your Dealer Partnership application for ${formData.company} has been received. Our regional channel manager will contact you within 24 hours.`);
      form.reset();
    });
  }

  function setupFarmerForm() {
    const form = document.getElementById('farmer-enquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = {
        type: 'Farmer Advisory Enquiry',
        name: form['farmer-name'].value.trim(),
        mobile: form['farmer-mobile'].value.trim(),
        location: form['farmer-location'].value.trim(),
        crop: form['farmer-crop'].value.trim(),
        acres: form['farmer-acres'].value.trim(),
        issue: form['farmer-issue'].value.trim(),
        product: form['farmer-product'].value,
        timestamp: new Date().toISOString()
      };

      saveEnquiry(formData);

      showToast(`Agronomy Ticket Created! Our crop specialist will call ${formData.mobile} or send guidance for your ${formData.crop} crop.`);
      
      // Also provide 1-click option to jump into WhatsApp
      const waMsg = encodeURIComponent(`Hi Phytolux Agronomy, I just submitted an advisory ticket. My Name: ${formData.name}, Crop: ${formData.crop} (${formData.acres} acres), Issue: ${formData.issue}. Please assist.`);
      
      setTimeout(() => {
        if (confirm(`Ticket generated for ${formData.name}! Would you also like to open WhatsApp to connect directly with the duty agronomist?`)) {
          window.open(`https://wa.me/919876543210?text=${waMsg}`, '_blank');
        }
      }, 600);

      form.reset();
    });
  }

  function setupContactForm() {
    const form = document.getElementById('quick-enquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = {
        type: 'Quick Enquiry',
        name: form['contact-name'].value.trim(),
        mobile: form['contact-mobile'].value.trim(),
        email: form['contact-email'].value.trim(),
        message: form['contact-message'].value.trim(),
        timestamp: new Date().toISOString()
      };

      saveEnquiry(formData);
      showToast(`Thank you ${formData.name}, your message has been sent to our corporate agronomy team.`);
      form.reset();
    });
  }

  function setupWhatsAppTriggers() {
    // Farmer section WhatsApp button
    const farmerWaBtn = document.getElementById('btn-farmer-whatsapp');
    if (farmerWaBtn) {
      farmerWaBtn.addEventListener('click', () => {
        const cropInput = document.getElementById('farmer-crop');
        const issueInput = document.getElementById('farmer-issue');
        const cropVal = cropInput && cropInput.value ? cropInput.value : 'my crop';
        const issueVal = issueInput && issueInput.value ? ` Issue: ${issueInput.value}` : '';
        const msg = encodeURIComponent(`Hello Phytolux Bio Science, I need scientific agronomy assistance for ${cropVal}.${issueVal}`);
        window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
      });
    }

    // Floating WhatsApp button
    const floatingWa = document.getElementById('btn-floating-whatsapp');
    if (floatingWa) {
      floatingWa.addEventListener('click', (e) => {
        e.preventDefault();
        const msg = encodeURIComponent('Hello Phytolux Bio Science, I would like to know more about your bio-fertilizer and sustainable crop solutions.');
        window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
      });
    }
  }

  function saveEnquiry(record) {
    try {
      const stored = JSON.parse(localStorage.getItem('phytolux_enquiries') || '[]');
      stored.unshift(record);
      localStorage.setItem('phytolux_enquiries', JSON.stringify(stored.slice(0, 50)));
    } catch (err) {
      console.warn('LocalStorage not available for enquiry logging', err);
    }
  }

  return {
    init,
    showToast
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  PhytoluxForms.init();
});
