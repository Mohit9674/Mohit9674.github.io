document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle
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
  
  // GitHub Calendar with error handling
  if (document.getElementById('calendar')) {
    try {
      GitHubCalendar('#calendar', 'Mohit9674', { 
        responsive: true, 
        tooltips: true,
        global_stats: false,
        cache: 86400000 // 1 day
      }).then(() => {
        console.log('GitHub calendar loaded successfully');
      }).catch(error => {
        console.error('GitHub calendar error:', error);
        showCalendarError();
      });
    } catch (error) {
      console.error('GitHub calendar initialization error:', error);
      showCalendarError();
    }
  }
  
  function showCalendarError() {
    const calendarContainer = document.getElementById('calendar');
    if (calendarContainer) {
      calendarContainer.innerHTML = `
        <div class="alert alert-warning">
          <i class="fas fa-exclamation-triangle me-2"></i>
          Could not load contribution data. 
          <a href="https://github.com/Mohit9674" target="_blank" class="alert-link">View my GitHub profile</a>
        </div>
      `;
    }
  }
  
  // Back to top button
  const backToTopBtn = document.querySelector('.btn-back-to-top');
  
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      if (backToTopBtn) {
        backToTopBtn.style.display = 'block';
      }
    } else {
      navbar.classList.remove('scrolled');
      if (backToTopBtn) {
        backToTopBtn.style.display = 'none';
      }
    }
  });
  
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
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
});