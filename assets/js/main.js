/* Btn Arriba */
document.addEventListener("DOMContentLoaded", () => {

  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  });

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});

/* Mensaje Submit */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
      const message = document.createElement('div');
      message.classList.add('mensaje');
      message.textContent = 'Se ha mandado el mensaje existosamente!';
      document.body.appendChild(message);
      form.reset();
      setTimeout(() => {
        message.remove();
      }, 5000);
      window.scrollTo(0, 0);
    } else {
      form.reportValidity();
    }
  });
});

/* Tab Event */
const navbarLinks = document.querySelectorAll(".mega-links a");
const tabPanels = document.querySelectorAll(".tab-panels");

navbarLinks.forEach((navbarLink) => {
  navbarLink.addEventListener("click", (event) => {
    const tabPanelId = event.target.href.split("#")[1];
    const tabPanel = tabPanels.querySelector(`#${tabPanelId}`);

    // Only show the tab panel if it is not already visible
    if (!tabPanel.classList.contains("active")) {
      tabPanel.classList.add("active");
      tabPanels.forEach((otherTabPanel) => {
        if (otherTabPanel !== tabPanel) {
          otherTabPanel.classList.remove("active");
        }
      });
    }
  });
});
