document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to tab buttons
  var tabButtons = document.querySelectorAll('.tablinks');
  tabButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      // Get the tab name from the data-tab attribute of the button
      var tabName = button.getAttribute('data-tab');
      // Call the openTab function to display the selected tab
      openTab(event, tabName);
    });
  });
  
  // Add event listener to select element
  var tabSelector = document.getElementById('tabSelector');
  tabSelector.addEventListener('change', function(event) {
    // Get the selected value from the select element
    var tabName = event.target.value;
    // Call the openTab function to display the selected tab
    openTab(event, tabName);
  });
  
  // Add event listeners to copy buttons
  var copyButtons = document.querySelectorAll('.copyButton');
  copyButtons.forEach(function(copyButton) {
    copyButton.addEventListener('click', function(event) {
      // Get the ID of the tab where the copy button is located
      var tabId = copyButton.closest('.tabcontent').id;
      // Check if the tab is a codeTab
      var isCodeTab = copyButton.closest('.codeTab') !== null;
      // Build the selector based on the tab and whether it's a codeTab
      var selector = '#' + tabId + (isCodeTab ? ' .codeTab code' : ' .npmTab .npmCopy');
      // Call the copyToClipboard function to copy text to the clipboard
      copyToClipboard(selector, copyButton);
    });
  });
});

// Function to display the selected tab
function openTab(evt, tabName) {
  var i, tabscontent, tablinks;
  // Hide all tab content
  tabscontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabscontent.length; i++) {
    tabscontent[i].style.display = "none";
  }
  // Remove the 'active' class from all tab buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the content of the selected tab
  document.getElementById(tabName).style.display = "block";
  // Add the 'active' class to the selected tab button
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
  // Find the button inside the .jsonTab element
  let jsonButton = document.querySelector(".jsonTab button");
  
  // Add a click event listener to the jsonButton
  jsonButton.addEventListener("click", function() {
    // Find the #codeJSON element
    let codeTab = document.querySelector("#codeJSON");
    
    // Find the closest ancestor section of codeTab
    let section = codeTab.closest('section');
    
    // Get the text content of the button and convert it to uppercase
    let linkText = this.textContent.toUpperCase();

    // Toggle the visibility of codeTab based on the button text
    if (linkText === "TOON ALLE CODE") {
      // Change button text and show code content
      linkText = "Toon minder code";
      codeTab.classList.remove("hideContent");
      codeTab.classList.add("showContent");
    } else {
      // Change button text and hide code content, scroll to section
      linkText = "Toon alle code";
      codeTab.classList.remove("showContent");
      codeTab.classList.add("hideContent");
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Update the button text with the modified value
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