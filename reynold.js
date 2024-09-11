document.addEventListener('DOMContentLoaded', function() {
  const contestantsLink = document.getElementById('contestantsLink');
  contestantsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    window.location.href = 'contestants-gallery.html'; // Redirect to contestants gallery page
  });
});