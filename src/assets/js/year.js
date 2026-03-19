// Function to update the copyright year dynamically
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('dynamic-copyright').textContent = `&copy; ${currentYear}`;
  }

  // Call the function immediately
  updateCopyrightYear();

  // Optionally, you can add an event listener to update the year whenever the page is loaded
  window.addEventListener('load', updateCopyrightYear);