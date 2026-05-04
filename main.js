// ── Navbar scroll effect
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ── Hamburger menu
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObs.observe(el));

// ── Particle effect (hero only)
const container = document.getElementById('particles');
if (container) {
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      animation-duration:${3+Math.random()*5}s;
      animation-delay:${Math.random()*6}s;
      width:${1+Math.random()*2}px;
      height:${1+Math.random()*2}px;
    `;
    container.appendChild(p);
  }
}

// ── Contact form
function enviarMensaje() {
  const nombre  = document.getElementById('cnombre')?.value.trim();
  const email   = document.getElementById('cemail')?.value.trim();
  const mensaje = document.getElementById('cmensaje')?.value.trim();
  if (!nombre || !email || !mensaje) {
    alert('Por favor completa: nombre, email y mensaje.');
    return;
  }
  document.getElementById('contactFormEl').style.display = 'none';
  document.getElementById('formOk').style.display = 'block';
}
function comprar(pelicula) {
  // Guardar la película seleccionada
  localStorage.setItem("peliculaSeleccionada", pelicula);

  // Redirigir a la página de compra
  window.location.href = "compra.html";
}
