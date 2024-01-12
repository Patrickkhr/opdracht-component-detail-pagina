function openTab(evt, tabName) {
  var i, tabscontent, tablinks;
  tabscontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabscontent.length; i++) {
    tabscontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function copyToClipboard(selector, button) {
  // Get the parent tab element
  var tab = button.closest('.tabcontent');

  // Select the content within the current tab
  var content = tab.querySelector(selector);

  // Create a range and select the text
  var range = document.createRange();
  range.selectNode(document.querySelector(selector));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  // Execute copy command
  document.execCommand('copy');

  // Clear the selection
  window.getSelection().removeAllRanges();

  // Update button text
  button.innerHTML = 'Gekopieerd!';
  
  // Reset button text after a short delay (optional)
  setTimeout(function() {
    button.innerHTML = 'Kopieer';
  }, 2000); // Reset after 2 seconds (adjust as needed)
}
