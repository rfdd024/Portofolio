const mobileBtn = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');

mobileBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
        navbar.classList.remove('bg-white/95');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0', 'invisible');
        backToTop.classList.add('opacity-100', 'visible');
    } else {
        backToTop.classList.add('opacity-0', 'invisible');
        backToTop.classList.remove('opacity-100', 'visible');
    }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Modal functions
function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.classList.remove('hidden');
    modalImg.src = src;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal on click outside
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

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

// Contact form to WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const whatsappMessage = `Hi Rafid! 👋

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}

*Message:*
${message}

Best regards,
${name}`;
    
    const whatsappURL = `https://wa.me/6283174279591?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
});
