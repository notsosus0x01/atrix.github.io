document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect for the blog title
    const blogTitle = document.getElementById('blog-title');
    const text = blogTitle.textContent;
    blogTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            blogTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('#newsletter form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        this.reset();
    });

    // Lazy loading images
    const images = document.querySelectorAll('img');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

