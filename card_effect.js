const cards = document.querySelectorAll('.card');
const merla121 = document.querySelectorAll('.merla121');
const gallerygrid = document.querySelectorAll('.gallery-grid');



const animate = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
    }
  });
}, {
  threshold: 0.1  
});


cards.forEach(card => animate.observe(card));
merla121.forEach(card => animate.observe(card));
gallerygrid.forEach(card => animate.observe(card));










