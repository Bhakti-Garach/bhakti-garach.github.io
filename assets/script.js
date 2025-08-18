const gridContainer = document.getElementById("grid-background");
const colors = ["#00bfff", "#55db9c", "#5c4ade"];

function createGrid() {
  gridContainer.innerHTML = "";

  const squareSize = 58; // pixels
  const cols = Math.floor(window.innerWidth / squareSize);
  const rows = Math.floor(window.innerHeight / squareSize);

  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  gridContainer.style.pointerEvents = "auto"; // allow hover

  for (let i = 0; i < cols * rows; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("mouseenter", () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      square.style.backgroundColor = randomColor;
    });

    square.addEventListener("mouseleave", () => {
      setTimeout(() => {
        square.style.backgroundColor = "transparent";
      }, 300); // linger duration
    });

    gridContainer.appendChild(square);
  }
}

createGrid();
window.addEventListener("resize", createGrid);

// ------------ HEADER MODALS

document.querySelectorAll('.header-link[data-modal]').forEach(link => {
    link.addEventListener('click', () => {
      const modalId = link.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'flex';
    });
  });
  
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });
  
  // Optional: close modal on outside click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

// ------------ PROJECT FILTER
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
  
      // Remove active state
      document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      // Filter project rows
      document.querySelectorAll('.project-row').forEach(row => {
        const semester = row.querySelector('.project-semester').textContent.trim();
        if (filter === 'All' || semester === filter) {
            row.classList.remove('hidden');
          } else {
            row.classList.add('hidden');
          }          
      });
    });
  });
  

