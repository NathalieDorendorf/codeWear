// Shopping Cart functionality
    let cart = [];
    let cartCount = 1;

    function addToCart(productName, price) {
        cart.push({ name: productName, price: price });
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;

    // Visual feedback
    const button = event.target;
    const originalText = button.textContent;
    button.style.background = '#2ecc71';
    button.textContent = 'Hinzugefügt!';
            
            setTimeout(() => {
        button.style.background = '#27ae60';
    button.textContent = originalText;
            }, 1000);
        }

    function toggleCart() {
            if (cart.length === 0) {
        alert('Ihr Warenkorb ist leer!');
    return;
            }

    let cartContent = 'Warenkorb:\n\n';
    let total = 0;
            
            cart.forEach(item => {
        cartContent += `${item.name} - €${item.price.toFixed(2)}\n`;
    total += item.price;
            });

    cartContent += `\nGesamtsumme: €${total.toFixed(2)}`;
    alert(cartContent);
        }

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                const title = card.querySelector('.product-title').textContent.toLowerCase();
    const subtitle = card.querySelector('.product-subtitle').textContent.toLowerCase();

    if (title.includes(searchTerm) || subtitle.includes(searchTerm)) {
        card.style.display = 'block';
    card.style.opacity = '1';
                } else {
        card.style.opacity = searchTerm === '' ? '1' : '0.3';
                }
            });
        });

        // Navigation functionality
        document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');

            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
        });

    // Smooth scroll for CTA button
    document.querySelector('.cta-button').addEventListener('click', function(e) {
        e.preventDefault();
    document.querySelector('#tshirts').scrollIntoView({behavior: 'smooth' });
        });

    // Animate product cards on scroll
    const observerOptions = {
        threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
        };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
        }, observerOptions);

        // Observe all product cards
        document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
        });

        // Add some interactive hover effects
        document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-10px) scale(1)';
            });
        });

