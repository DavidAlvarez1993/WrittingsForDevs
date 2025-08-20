document.querySelectorAll('.number-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });

const numPages = 75; 
document.getElementById("last-page").textContent = `${numPages}`;
