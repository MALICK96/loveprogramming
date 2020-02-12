(function() {
  var copyRight = document.getElementById("copyright-date");

  var current = new Date().getFullYear();
  copyRight.textContent = current + " - ";
  current += 2;
  copyRight.textContent += current;
})();
