window.addEventListener('scroll', function() {
  var contentDiv = document.querySelector('.content-div');
  var scrollPosition = window.pageYOffset;

  // Update the top position of the content div based on the scroll position
  contentDiv.style.top = scrollPosition + 'px';
});