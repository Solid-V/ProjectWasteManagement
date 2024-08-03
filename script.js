
document.querySelectorAll('nav ul li a').forEach(anchor => {
    // Check if the anchor is the support link
    if (!anchor.getAttribute('href').startsWith('#')) {
        return; // Skip adding the event listener for non-section links
    }

    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});