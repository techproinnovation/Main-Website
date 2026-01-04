const toggler = document.getElementById("toggleBtn");
const menu = document.getElementById("menu");

// Fallback collapse behavior without Bootstrap JS
if (toggler && menu) {
  toggler.addEventListener('click', () => {
    const isShown = menu.classList.toggle('show');
    toggler.classList.toggle('active', isShown);
    if (isShown) animateNavLinks(); else resetNavLinks();
  });

  // Ensure proper state on resize (desktop should show menu)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      menu.classList.remove('show');
      toggler.classList.remove('active');
      // bring nav links to visible state
      const links = document.querySelectorAll('.nav-item .nav-link');
      links.forEach(link => { link.style.opacity = 1; link.style.transform = 'translateY(0)'; });
    } else {
      const links = document.querySelectorAll('.nav-item .nav-link');
      links.forEach(link => { link.style.opacity = 0; link.style.transform = 'translateY(20px)'; });
    }
  });
}

function animateNavLinks() {
  const links = document.querySelectorAll(".nav-item .nav-link");
  links.forEach((link, i) => {
    link.style.opacity = 0;
    link.style.transform = "translateY(20px)";
    setTimeout(() => {
      link.style.transition = "0.4s ease";
      link.style.opacity = 1;
      link.style.transform = "translateY(0)";
    }, i * 150);
  });
}

function resetNavLinks() {
  const links = document.querySelectorAll(".nav-item .nav-link");
  links.forEach(link => {
    link.style.opacity = 0;
    link.style.transform = "translateY(20px)";
  });
}

const texts = [
  "Machine Design & Development",
  "Engineering Smart Machines",
  "Custom Industrial Machine Solutions",
  "Precision Machine Developers",
  "Automatic Smart Machines"
];

let index = 0;
const textEl = document.getElementById("rotateText");

setInterval(() => {
  textEl.classList.remove("show");
  setTimeout(() => {
    index = (index + 1) % texts.length;
    textEl.textContent = texts[index];
    textEl.classList.add("show");
  }, 300);
}, 2500);

window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-item .nav-link");
  links.forEach((link, i) => {
    setTimeout(() => {
      link.style.opacity = 1;
      link.style.transform = "translateY(0)";
    }, i * 200);
  });
});














// why.html

// Animate progress bars and count numbers when they enter view
document.addEventListener('DOMContentLoaded', function() {
  const bars = document.querySelectorAll('.progress-bar');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCount(el, start, end, duration) {
    if (prefersReduced) { el.textContent = end + '%'; return; }
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      el.textContent = value + '%';
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const bar = entry.target;
      const targetVal = parseInt(bar.getAttribute('aria-valuenow'), 10) || 0;

      if (prefersReduced) {
        bar.style.width = targetVal + '%';
        bar.textContent = targetVal + '%';
      } else {
        // animate width using CSS transition already defined in CSS
        bar.style.width = '0%';
        // small timeout to ensure transition occurs
        setTimeout(() => { bar.style.width = targetVal + '%'; }, 50);
        animateCount(bar, 0, targetVal, 1200);
      }

      // stop observing once animated
      obs.unobserve(bar);
    });
  }, { threshold: 0.15 });

  bars.forEach(bar => {
    // ensure initial state
    bar.style.width = '0%';
    bar.textContent = '0%';
    observer.observe(bar);
  });
});











// test.html

new Swiper(".testimonialSwiper", {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints:{
    0:{ slidesPerView:1 },
    768:{ slidesPerView:2 },
    1024:{ slidesPerView:3 }
  }
});













// header.html

const texts2 = [
  "Machine Design & Development",
  "Engineering Smart Machines",
  "Custom Industrial Machine Solutions",
  "Precision Machine Developers",
  "Automatic & Smart Machines"
];

let index2 = 0;
const textEl2 = document.getElementById("rotateText");

setInterval(() => {
  textEl2.classList.remove("show");

  setTimeout(() => {
    index2 = (index2 + 1) % texts2.length;
    textEl2.textContent = texts2[index2];
    textEl2.classList.add("show");
  }, 500);

}, 5000);

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// IntersectionObserver for fade sections
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-section, .fade-left, .fade-right').forEach(el => io.observe(el));

// Ensure nav link initial state for mobile
window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 992) {
    const links = document.querySelectorAll('.nav-item .nav-link');
    links.forEach(link => { link.style.opacity = 0; link.style.transform = 'translateY(20px)'; });
  }
});