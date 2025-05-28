// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-bs-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
  
  // Toggle theme
  themeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-bs-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', newTheme);
  });
  
  // Initialize Particles.js
  particlesJS('particles', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#0dcaf0" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#0dcaf0",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      }
    }
  });
  
  // GitHub Calendar
  if (document.getElementById('calendar')) {
    GitHubCalendar('#calendar', 'Mohit9674', { 
      responsive: true, 
      tooltips: true,
      global_stats: false,
      cache: 86400000 // 1 day
    }).then(r => {});
  }
  
  // Contributions Chart
  if (document.getElementById('contribChart')) {
    const ctx = document.getElementById('contribChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Commits',
          data: [12, 19, 8, 15, 22, 17, 24, 12, 19, 22, 18, 14],
          backgroundColor: 'rgba(13, 202, 240, 0.7)',
          borderColor: 'rgba(13, 202, 240, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#e0e0e0'
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#e0e0e0'
            }
          }
        }
      }
    });
  }
  
  // Back to top button
  const backToTopBtn = document.querySelector('.btn-back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('shadow');
    }
  });
});