document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    if(mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => sidebar.classList.toggle('active'));
    }

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if(darkModeToggle) {
        const body = document.body;
        const icon = darkModeToggle.querySelector('i');
        
        // Load saved theme
        const currentTheme = localStorage.getItem('theme') || '';
        if(currentTheme) {
            body.classList.add(currentTheme);
            icon.classList.replace('fa-moon', currentTheme === 'dark-mode' ? 'fa-sun' : 'fa-moon');
        }

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if(body.classList.contains('dark-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', '');
            }
        });
    }

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if(window.innerWidth <= 768 && sidebar && mobileMenuBtn) {
            if(!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Window resize handler
    window.addEventListener('resize', () => {
        if(window.innerWidth > 768 && sidebar) {
            sidebar.classList.remove('active');
        }
    });

    // Set active menu item
    document.querySelectorAll('.menu-link').forEach(link => {
        if(link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});