/**
 * S.V Caterers - Main Interactive Application
 * Dedicated to Owner Rakesh | +91 95736 05102
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Render Dynamic Components
    renderCategories();
    renderMenuItems('all');
    renderPackages();
    renderServices();
    renderTestimonials();
    renderGallery();
    renderFaqs();

    // 3. Calculator State & Event Listeners
    initCalculator();

    // 4. Booking Form WhatsApp Submission
    initBookingForm();

    // 5. Mobile Navigation
    initMobileNav();

    // 6. Header Scroll Effect
    initHeaderScroll();
});

/* -------------------------------------------------------------
 * 1. Header Scroll Background Blur
 * ----------------------------------------------------------- */
function initHeaderScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-stone-950/90', 'backdrop-blur-md', 'shadow-xl', 'border-b', 'border-amber-900/40');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-stone-950/90', 'backdrop-blur-md', 'shadow-xl', 'border-b', 'border-amber-900/40');
            navbar.classList.add('bg-transparent');
        }
    });
}

/* -------------------------------------------------------------
 * 2. Mobile Navigation Toggle
 * ----------------------------------------------------------- */
function initMobileNav() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!mobileBtn || !mobileMenu) return;

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

/* -------------------------------------------------------------
 * 3. Render Menu Categories & Items
 * ----------------------------------------------------------- */
function renderCategories() {
    const container = document.getElementById('categoryFilters');
    if (!container) return;

    container.innerHTML = SV_DATA.categories.map((cat, idx) => `
        <button 
            onclick="switchCategory('${cat.id}')"
            class="filter-btn ${idx === 0 ? 'active' : ''} px-5 py-2.5 rounded-full border border-stone-700/80 text-sm font-medium text-stone-300 hover:text-white hover:border-amber-500/60 transition-all flex items-center gap-2 whitespace-nowrap"
            data-category="${cat.id}">
            <i data-lucide="${cat.icon}" class="w-4 h-4 text-amber-400"></i>
            <span>${cat.name}</span>
        </button>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

window.switchCategory = function(categoryId) {
    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-category') === categoryId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderMenuItems(categoryId);
};

function renderMenuItems(categoryId) {
    const container = document.getElementById('menuGrid');
    if (!container) return;

    const filtered = categoryId === 'all' 
        ? SV_DATA.menuItems 
        : SV_DATA.menuItems.filter(item => item.category === categoryId);

    container.innerHTML = filtered.map(item => `
        <div class="menu-card glass-panel flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden">
                <img 
                    src="${item.image}" 
                    alt="${item.name}" 
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
                
                <!-- Diet Tag -->
                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md ${
                    item.type === 'veg' 
                        ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-500/50' 
                        : 'bg-red-950/90 text-red-300 border border-red-500/50'
                }">
                    <span class="w-2 h-2 rounded-full ${item.type === 'veg' ? 'bg-emerald-400' : 'bg-red-400'}"></span>
                    ${item.type === 'veg' ? 'Pure Veg' : 'Non-Veg'}
                </span>

                <!-- Badge Tag -->
                <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-stone-950 shadow-md">
                    ${item.badge}
                </span>
            </div>

            <div class="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <h3 class="font-serif text-xl font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                        ${item.name}
                    </h3>
                    <p class="text-sm text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                        ${item.description}
                    </p>
                </div>

                <div class="mt-5 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <span class="text-xs text-amber-300/80 uppercase tracking-widest font-semibold">
                        S.V Signature
                    </span>
                    <a 
                        href="https://wa.me/${SV_DATA.brand.whatsappNumber}?text=${encodeURIComponent(`Hello Rakesh ji, I am interested in including '${item.name}' in my event catering menu.`)}" 
                        target="_blank" 
                        class="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline">
                        Inquire Dish <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

/* -------------------------------------------------------------
 * 4. Render Packages (Silver, Gold, Platinum)
 * ----------------------------------------------------------- */
function renderPackages() {
    const container = document.getElementById('packagesGrid');
    if (!container) return;

    container.innerHTML = SV_DATA.packages.map(pkg => `
        <div class="glass-panel rounded-2xl p-8 flex flex-col relative transition-all duration-300 hover:border-amber-400/60 ${
            pkg.popular ? 'border-2 border-amber-500/80 shadow-2xl shadow-amber-950/40 -translate-y-2' : ''
        }">
            ${pkg.popular ? `
                <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <i data-lucide="crown" class="w-3.5 h-3.5"></i> Most Popular Choice
                </div>
            ` : ''}

            <div class="text-center pb-6 border-b border-stone-800">
                <h3 class="font-serif text-2xl font-bold text-stone-100">${pkg.name}</h3>
                <p class="text-xs text-stone-400 mt-1">${pkg.tagline}</p>
                <div class="mt-4 flex items-baseline justify-center gap-1">
                    <span class="text-stone-400 text-sm">Starts at</span>
                    <span class="font-serif text-4xl font-extrabold text-gold-gradient">₹${pkg.basePrice}</span>
                    <span class="text-stone-400 text-sm">/ plate</span>
                </div>
            </div>

            <ul class="py-6 space-y-3 flex-grow text-sm text-stone-300">
                ${pkg.features.map(f => `
                    <li class="flex items-start gap-2.5">
                        <i data-lucide="check" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                        <span>${f}</span>
                    </li>
                `).join('')}
            </ul>

            <div class="pt-4 mt-auto">
                <button 
                    onclick="selectPackageForCalc('${pkg.id}')" 
                    class="w-full py-3 rounded-xl font-bold text-sm ${
                        pkg.popular 
                            ? 'btn-gold' 
                            : 'btn-outline-gold hover:bg-amber-500/10'
                    } flex items-center justify-center gap-2">
                    <i data-lucide="calculator" class="w-4 h-4"></i>
                    Calculate & Customize
                </button>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

window.selectPackageForCalc = function(packageId) {
    const radio = document.querySelector(`input[name="calcPackage"][value="${packageId}"]`);
    if (radio) {
        radio.checked = true;
        updateCalculator();
        const calcSection = document.getElementById('calculator');
        if (calcSection) {
            calcSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

/* -------------------------------------------------------------
 * 5. Interactive Catering Calculator
 * ----------------------------------------------------------- */
let currentGuestCount = 250;
let currentPackagePrice = 650;
let currentPackageName = "Gold Royal Banquet";
let currentEventType = "Wedding & Reception";

function initCalculator() {
    const guestSlider = document.getElementById('guestSlider');
    const guestDisplay = document.getElementById('guestCountDisplay');
    const packageRadios = document.querySelectorAll('input[name="calcPackage"]');
    const eventTypeSelect = document.getElementById('calcEventType');

    if (!guestSlider || !guestDisplay) return;

    guestSlider.addEventListener('input', (e) => {
        currentGuestCount = parseInt(e.target.value);
        guestDisplay.innerText = currentGuestCount.toLocaleString('en-IN');
        updateCalculator();
    });

    packageRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const selected = SV_DATA.packages.find(p => p.id === e.target.value);
            if (selected) {
                currentPackagePrice = selected.basePrice;
                currentPackageName = selected.name;
                updateCalculator();
            }
        });
    });

    if (eventTypeSelect) {
        eventTypeSelect.addEventListener('change', (e) => {
            currentEventType = e.target.value;
            updateCalculator();
        });
    }

    updateCalculator();
}

function updateCalculator() {
    const pricePerPlateDisplay = document.getElementById('calcPricePerPlate');
    const totalEstimateDisplay = document.getElementById('calcTotalEstimate');
    const whatsappBtn = document.getElementById('calcWhatsAppBtn');

    const totalEstimate = currentGuestCount * currentPackagePrice;

    if (pricePerPlateDisplay) {
        pricePerPlateDisplay.innerText = `₹${currentPackagePrice}`;
    }
    if (totalEstimateDisplay) {
        totalEstimateDisplay.innerText = `₹${totalEstimate.toLocaleString('en-IN')}`;
    }

    if (whatsappBtn) {
        const text = `Hello Rakesh ji (S.V Caterers),\nI would like an inquiry for catering services:\n• Event Type: ${currentEventType}\n• Estimated Guests: ${currentGuestCount}\n• Selected Package: ${currentPackageName} (approx ₹${currentPackagePrice}/plate)\n• Estimated Budget: ~₹${totalEstimate.toLocaleString('en-IN')}\n\nPlease let me know your date availability and share the detailed menu options.`;
        whatsappBtn.href = `https://wa.me/${SV_DATA.brand.whatsappNumber}?text=${encodeURIComponent(text)}`;
    }
}

/* -------------------------------------------------------------
 * 6. Services, Testimonials, Gallery, FAQ Renderers
 * ----------------------------------------------------------- */
function renderServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;

    container.innerHTML = SV_DATA.services.map(srv => `
        <div class="glass-panel p-7 rounded-2xl group hover:-translate-y-1.5 transition-all">
            <div class="w-13 h-13 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all mb-5">
                <i data-lucide="${srv.icon}" class="w-6 h-6"></i>
            </div>
            <h3 class="font-serif text-xl font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                ${srv.title}
            </h3>
            <p class="text-sm text-stone-400 mt-2.5 leading-relaxed">
                ${srv.description}
            </p>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;

    container.innerHTML = SV_DATA.testimonials.map(item => `
        <div class="glass-panel p-8 rounded-2xl relative flex flex-col justify-between">
            <div class="text-amber-400/30 absolute top-6 right-6">
                <i data-lucide="quote" class="w-10 h-10"></i>
            </div>

            <div>
                <div class="flex items-center gap-1 text-amber-400 mb-4">
                    ${Array(item.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>').join('')}
                </div>
                <p class="text-stone-300 text-sm leading-relaxed italic">
                    "${item.review}"
                </p>
            </div>

            <div class="mt-6 pt-5 border-t border-stone-800 flex items-center gap-3">
                <div class="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-bold text-stone-950 text-base">
                    ${item.name.charAt(0)}
                </div>
                <div>
                    <h4 class="font-bold text-stone-100 text-sm">${item.name}</h4>
                    <p class="text-xs text-amber-400/80">${item.event}</p>
                    <p class="text-xs text-stone-500">${item.location}</p>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function renderGallery() {
    const container = document.getElementById('galleryGrid');
    if (!container) return;

    container.innerHTML = SV_DATA.gallery.map(img => `
        <div class="gallery-item h-64 border border-stone-800 group shadow-lg">
            <img 
                src="${img.image}" 
                alt="${img.title}" 
                loading="lazy"
                class="w-full h-full object-cover"
            />
            <div class="gallery-overlay">
                <span class="text-xs font-semibold text-amber-400 uppercase tracking-wider">${img.category}</span>
                <h4 class="font-serif text-lg font-bold text-white mt-0.5">${img.title}</h4>
            </div>
        </div>
    `).join('');
}

function renderFaqs() {
    const container = document.getElementById('faqContainer');
    if (!container) return;

    container.innerHTML = SV_DATA.faqs.map((faq, i) => `
        <div class="border border-stone-800 rounded-xl bg-stone-900/40 overflow-hidden">
            <button 
                onclick="toggleFaq(${i})" 
                class="w-full px-6 py-4.5 text-left font-semibold text-stone-200 hover:text-amber-400 transition-colors flex items-center justify-between gap-4">
                <span class="text-base">${faq.q}</span>
                <i data-lucide="chevron-down" id="faqIcon-${i}" class="w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300"></i>
            </button>
            <div id="faqAnswer-${i}" class="hidden px-6 pb-5 text-sm text-stone-400 leading-relaxed border-t border-stone-800/60 pt-3">
                ${faq.a}
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

window.toggleFaq = function(idx) {
    const ans = document.getElementById(`faqAnswer-${idx}`);
    const icon = document.getElementById(`faqIcon-${idx}`);
    if (ans) {
        ans.classList.toggle('hidden');
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    }
};

/* -------------------------------------------------------------
 * 7. Booking Form Handler (Direct to WhatsApp)
 * ----------------------------------------------------------- */
function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('bookName').value.trim();
        const phone = document.getElementById('bookPhone').value.trim();
        const date = document.getElementById('bookDate').value;
        const eventType = document.getElementById('bookEvent').value;
        const guests = document.getElementById('bookGuests').value;
        const venue = document.getElementById('bookVenue').value.trim();
        const notes = document.getElementById('bookNotes').value.trim();

        if (!name || !phone) {
            alert("Please enter your Name and Contact Number.");
            return;
        }

        const msg = `*NEW CATERING INQUIRY - S.V CATERERS*\n\n` +
            `👤 *Client Name:* ${name}\n` +
            `📞 *Phone:* ${phone}\n` +
            `🎉 *Event Type:* ${eventType}\n` +
            `📅 *Event Date:* ${date || 'Not specified yet'}\n` +
            `👥 *Guest Count:* ${guests || 'Approx 200+'}\n` +
            `📍 *Venue / City:* ${venue || 'Hyderabad / Telangana'}\n` +
            `📝 *Special Requests:* ${notes || 'None'}\n\n` +
            `_Sent via S.V Caterers Online Portal to Rakesh (+91 9573605102)_`;

        const waUrl = `https://wa.me/${SV_DATA.brand.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        
        // Open WhatsApp
        window.open(waUrl, '_blank');

        // Optional reset & success notification
        alert(`Thank you ${name}! We are redirecting you to WhatsApp to connect directly with Rakesh (+91 95736 05102).`);
        form.reset();
    });
}
