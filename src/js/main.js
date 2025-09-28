// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Initialize Typed.js
const typed = new Typed('#typed', {
    strings: [
        "I am an IT learner and website enthusiast",
        "I love building web apps",
        "I am a Junior Frontend Developer",
        "Let's create something great!"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Enhanced Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Projects Carousel Functionality
let currentProjectIndex = 0;
const projectsContainer = document.getElementById('projectsContainer');
const projects = document.querySelectorAll('#projectsContainer > div');
const projectIndicators = document.querySelectorAll('.project-indicator');

function updateProjectCarousel() {
    if (projects.length === 0) return;
    
    const translateX = -currentProjectIndex * (320 + 24); // 320px width + 24px gap
    if (projectsContainer) {
        projectsContainer.style.transform = `translateX(${translateX}px)`;
    }
    
    // Update indicators
    projectIndicators.forEach((indicator, index) => {
        if (index === currentProjectIndex) {
            indicator.classList.remove('bg-gray-600');
            indicator.classList.add('bg-accent');
        } else {
            indicator.classList.remove('bg-accent');
            indicator.classList.add('bg-gray-600');
        }
    });
}

// Project navigation buttons
document.getElementById('nextProject')?.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProjectCarousel();
});

document.getElementById('prevProject')?.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProjectCarousel();
});

// Project indicators
projectIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentProjectIndex = index;
        updateProjectCarousel();
    });
});

// Auto-slide for projects
let autoSlideInterval;
function startAutoSlide() {
    if (projects.length <= 1) return;
    
    autoSlideInterval = setInterval(() => {
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        updateProjectCarousel();
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Initialize auto-slide and pause on hover
if (projects.length > 1) {
    startAutoSlide();
    
    const projectsSection = document.getElementById('projects');
    projectsSection?.addEventListener('mouseenter', stopAutoSlide);
    projectsSection?.addEventListener('mouseleave', startAutoSlide);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Certificate Categories Functionality with Show All / Show Less
const certCategoryBtns = document.querySelectorAll('.cert-category-btn');
const certificateItems = document.querySelectorAll('.certificate-item');
const showAllBtn = document.getElementById('showAllBtn');
const MAX_VISIBLE_CERTS = 9;
let showAllCertificates = false;

function applyCertificateFilter(category) {
    let shownCount = 0;
    // Count total items in the active category
    const totalInCategory = Array.from(certificateItems).filter((item) => (
        category === 'all' || item.classList.contains(category)
    )).length;

    // Show/hide desktop grid items
    certificateItems.forEach((item) => {
        const inCategory = category === 'all' || item.classList.contains(category);
        if (!inCategory) {
            item.style.display = 'none';
            return;
        }
        shownCount += 1;
        if (!showAllCertificates && shownCount > MAX_VISIBLE_CERTS) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });

    // Toggle Show All button (desktop only) visibility and label
    if (showAllBtn) {
        if (totalInCategory > MAX_VISIBLE_CERTS) {
            showAllBtn.classList.remove('hidden');
            showAllBtn.textContent = showAllCertificates ? 'Show Less' : 'Show All';
        } else {
            showAllBtn.classList.add('hidden');
        }
    }

    // Sync mobile carousel
    updateMobileCarousel(category);
}

certCategoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        showAllCertificates = false; // reset on tab change

        // Update active button styles
        certCategoryBtns.forEach((b) => {
            b.classList.remove('active', 'bg-accent', 'text-dark');
            b.classList.add('text-gray-400');
        });
        btn.classList.add('active', 'bg-accent', 'text-dark');
        btn.classList.remove('text-gray-400');

        applyCertificateFilter(category);
    });
});

// Show All / Show Less toggle
showAllBtn?.addEventListener('click', () => {
    showAllCertificates = !showAllCertificates;
    const active = document.querySelector('.cert-category-btn.active');
    const category = active ? active.dataset.category : 'all';
    applyCertificateFilter(category);
});

// Initialize first category as active and apply filter
if (certCategoryBtns.length > 0) {
    certCategoryBtns[0].classList.add('bg-accent', 'text-dark');
    certCategoryBtns[0].classList.remove('text-gray-400');
    applyCertificateFilter('all');
}

// Modal functions
function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    if (modal && modalImg) {
        modal.classList.remove('hidden');
        modalImg.src = src;
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Contact Form with WhatsApp
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Tampilkan spinner loading
    submitButton.innerHTML = `
        <div class="loading-spinner w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block mr-2"></div>
        Sending...
    `;
    submitButton.disabled = true;
    
    try {
        // Ambil value dari input (pakai ID)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Nomor WhatsApp tujuan (format internasional)
        const phoneNumber = "6283174279591";

        // Format pesan profesional
        const whatsappMessage = encodeURIComponent(
`*Message from:* ${email}  
*Subject:* ${subject}  

Dear Rafid,  

My name is ${name}.
${message}.

Best regards,  
${name}`
        );            

        // Redirect ke WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");

        // Ubah button jadi sukses
        submitButton.innerHTML = `
            <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Message Sent!
        `;
        submitButton.classList.remove('bg-gradient-to-r', 'from-accent', 'to-accent-dark');
        submitButton.classList.add('bg-gradient-to-r', 'from-green-500', 'to-green-600');

        this.reset();

        // Kembalikan tombol setelah 3 detik
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.classList.remove('bg-gradient-to-r', 'from-green-500', 'to-green-600');
            submitButton.classList.add('bg-gradient-to-r', 'from-accent', 'to-accent-dark');
        }, 3000);

    } catch (error) {
        console.error('WhatsApp sending failed:', error);
        
        submitButton.innerHTML = 'Failed to open WhatsApp';
        submitButton.classList.remove('bg-gradient-to-r', 'from-accent', 'to-accent-dark');
        submitButton.classList.add('bg-gradient-to-r', 'from-red-500', 'to-red-600');

        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.classList.remove('bg-gradient-to-r', 'from-red-500', 'to-red-600');
            submitButton.classList.add('bg-gradient-to-r', 'from-accent', 'to-accent-dark');
        }, 5000);
    }
});

// Nametag Flip Functionality
document.addEventListener('DOMContentLoaded', function() {
    const flipButtons = document.querySelectorAll('.flip-button');
    
    flipButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const container = this.closest('.nametag-container');
            if (container) {
                container.classList.toggle('flipped');
            }
        });
    });
});

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Carousel functionality
function initCarousel(carousel) {
    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    
    let currentIndex = 0;
            const totalItems = items.length;
            
            // Create dots for mobile
            if (dotsContainer) {
                dotsContainer.innerHTML = '';
                for (let i = 0; i < totalItems; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('carousel-dot');
                    if (i === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => goToSlide(i));
                    dotsContainer.appendChild(dot);
                }
            }
            
            // Function to go to a specific slide
            function goToSlide(index) {
                currentIndex = index;
                updateCarousel();
            }
            
            // Function to update carousel position
            function updateCarousel() {
                const itemWidth = 100 / getItemsPerView();
                inner.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
                
                // Update dots
                if (dotsContainer) {
                    dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                        dot.classList.toggle('active', index === currentIndex);
                    });
                }
            }
            
            // Function to get number of items per view based on screen size
            function getItemsPerView() {
                if (window.innerWidth < 768) return 1;
                if (window.innerWidth < 1024) return 2;
                return 3;
            }
            
            // Next slide function
            function nextSlide() {
                if (currentIndex < totalItems - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
                updateCarousel();
            }
            
            // Previous slide function
            function prevSlide() {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = totalItems - 1;
                }
                updateCarousel();
            }
            
            // Event listeners for buttons
            if (prevBtn) prevBtn.addEventListener('click', prevSlide);
            if (nextBtn) nextBtn.addEventListener('click', nextSlide);
            
            // Update carousel on window resize
            window.addEventListener('resize', updateCarousel);
        }

        // Initialize carousels on page load
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize projects carousel (auto-sync from desktop grid)
        const projectsCarousel = document.querySelector('#projects .carousel-container');
        if (projectsCarousel) {
            populateProjectsCarousel();
            initCarousel(projectsCarousel);
        }
            
            // Initialize certificates carousel and populate mobile carousel
        const certificatesCarousel = document.querySelector('#certificates .carousel-container');
        if (certificatesCarousel) {
            populateCertificatesCarousel();
            initCarousel(certificatesCarousel);
        }
        });

        // Populate projects carousel for mobile from desktop grid
        function populateProjectsCarousel() {
            const carouselInner = document.querySelector('#projects .carousel-container .carousel-inner');
            const desktopCards = document.querySelectorAll('#projects .lg\\:grid .group');
            if (!carouselInner) return;
            carouselInner.innerHTML = '';
            if (desktopCards.length === 0) return;

            desktopCards.forEach((card) => {
                const item = document.createElement('div');
                item.className = 'carousel-item';
                item.innerHTML = card.outerHTML;
                carouselInner.appendChild(item);
            });
        }

        // Populate certificates carousel for mobile (respects global MAX_VISIBLE_CERTS & showAllCertificates)
        function populateCertificatesCarousel() {
            const carouselInner = document.getElementById('certificates-carousel');
            const certificateItems = document.querySelectorAll('#certificates-grid .certificate-item');
            
            if (carouselInner && certificateItems.length > 0) {
                carouselInner.innerHTML = '';
                
                certificateItems.forEach((item, index) => {
                    if (!showAllCertificates && index >= MAX_VISIBLE_CERTS) return; // respect initial limit
                    const carouselItem = document.createElement('div');
                    carouselItem.className = 'carousel-item';
                    carouselItem.innerHTML = item.outerHTML;
                    carouselInner.appendChild(carouselItem);
                });
            }
        }

        // Update mobile carousel when category changes
        function updateMobileCarousel(category) {
            const carouselInner = document.getElementById('certificates-carousel');
            const certificateItems = document.querySelectorAll('#certificates-grid .certificate-item');
            
            if (carouselInner && certificateItems.length > 0) {
                carouselInner.innerHTML = '';
                
                let added = 0;
                certificateItems.forEach((item) => {
                    const inCategory = category === 'all' || item.classList.contains(category);
                    if (!inCategory) return;
                    if (!showAllCertificates && added >= MAX_VISIBLE_CERTS) return;
                    const carouselItem = document.createElement('div');
                    carouselItem.className = 'carousel-item';
                    carouselItem.innerHTML = item.outerHTML;
                    carouselInner.appendChild(carouselItem);
                    added += 1;
                });
                
                // Reinitialize carousel after updating content
                const certificatesCarousel = document.querySelector('#certificates .carousel-container');
                if (certificatesCarousel) {
                    initCarousel(certificatesCarousel);
                }
            }
        }

        // Show All button is handled by the global handler bound to #showAllBtn above