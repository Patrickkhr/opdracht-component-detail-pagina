document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to tab buttons
  var tabButtons = document.querySelectorAll('.tablinks');
  tabButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      var tabName = button.getAttribute('data-tab');
      openTab(event, tabName);
    });
  });
  
  // Add event listener to select element
  var tabSelector = document.getElementById('tabSelector');
  tabSelector.addEventListener('change', function(event) {
    var tabName = event.target.value;
    openTab(event, tabName);
  });
  
  // Add event listeners to copy buttons
  var copyButtons = document.querySelectorAll('.copyButton');
  copyButtons.forEach(function(copyButton) {
    copyButton.addEventListener('click', function(event) {
      var tabId = copyButton.closest('.tabcontent').id;
      var isCodeTab = copyButton.closest('.codeTab') !== null;
      var selector = '#' + tabId + (isCodeTab ? ' .codeTab code' : ' .npmTab .npmCopy');
      copyToClipboard(selector, copyButton);
    });
  });
});

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

document.addEventListener("DOMContentLoaded", function() {
  let jsonButton = document.querySelector(".jsonTab button");
  
  jsonButton.addEventListener("click", function() {
    let codeTab = document.querySelector("#codeJSON");
    let section = codeTab.closest('section');
    let linkText = this.textContent.toUpperCase();

    if (linkText === "TOON ALLE CODE") {
      linkText = "Toon minder code";
      codeTab.classList.remove("hideContent");
      codeTab.classList.add("showContent");
    } else {
      linkText = "Toon alle code";
      codeTab.classList.remove("showContent");
      codeTab.classList.add("hideContent");
      section.scrollIntoView({ behavior: 'smooth' });
    }

    this.textContent = linkText;
  });
});

document.getElementById('copyJSON').addEventListener('click', function() {
  // Select the text inside the <pre> element
  var codeJSONText = document.getElementById('codeJSON').getElementsByTagName('pre')[0].innerText;

  // Create a text area element and set its value to the selected text
  var textArea = document.createElement('textarea');
  textArea.value = codeJSONText;

  // Append the text area to the document
  document.body.appendChild(textArea);

  // Select the text inside the text area
  textArea.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the text area from the document
  document.body.removeChild(textArea);

  // Update the button text to "Gekopieerd"
  document.getElementById('copyJSON').textContent = 'Gekopieerd!';

  // Clear the button text after a delay (you can adjust the delay)
  setTimeout(function() {
    document.getElementById('copyJSON').textContent = 'Kopieer JSON';
  }, 2000); // 2000 milliseconds (2 seconds)
});