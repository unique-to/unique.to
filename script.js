// Smooth scrolling effect for 'Explore Now' button
document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#products').scrollIntoView({
        behavior: 'smooth'
    });
});
