document.querySelectorAll('.').forEach(el => {
  el.innerHTML = el.textContent
    .split('')
    .map((char, i) => 
      char === ' ' 
        ? '<span style="display:inline-block">&nbsp;</span>'
        : `<span style="display:inline-block; animation-delay: ${i * 0.05}s">${char}</span>`
    )
    .join('');
});

const textObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.').forEach(el => textObserver.observe(el));