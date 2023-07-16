// Smooth scrolling to section when clicking on navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Show/hide contact form on button click
  const contactFormButton = document.querySelector('.contact-form button');
  const contactForm = document.querySelector('.contact-form form');
  
  contactFormButton.addEventListener('click', () => {
    contactForm.classList.toggle('show');
  });
  
  // Submit form and display success message
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Perform form submission logic here
  
    // Display success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Message sent successfully!';
    successMessage.classList.add('success-message');
    contactForm.appendChild(successMessage);
    contactForm.reset();
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  });
  
  // Add the 'in-viewport' class to the contact section when it is in the viewport
const contactSection = document.getElementById('contact');
const contactInfo = document.querySelector('.contact-info');

const options = {
  rootMargin: '-50% 0px', // Adjust the root margin as needed
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      contactSection.classList.add('in-viewport');
    } else {
      contactSection.classList.remove('in-viewport');
    }
  });
}, options);

observer.observe(contactSection);


  
