// Tab Switching Logic
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile Menu
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}

// Form Submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbyP_2BUSIlz2yTd8kkm4W64MOLQKHxAdpmB2CzVaqfY6JME6iojVTM8sLyhIHaitGMBPg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => msg.innerHTML = "", 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
document.addEventListener("mouseleave", function (event) {
  if (event.clientY <= 5) { // Detect cursor moving to the close button
      showPopup();
  }
});

function showPopup() {
  if (!sessionStorage.getItem("popupShown")) {
      document.getElementById("exit-popup").style.display = "block";
      sessionStorage.setItem("popupShown", "true");
  }
}

function closePopup() {
  document.getElementById("exit-popup").style.display = "none";
}

function selectEmoji(emoji) {
  document.querySelectorAll(".emoji").forEach(e => e.style.border = "2px solid transparent");
  emoji.style.border = "2px solid #d6336c";
}

function submitFeedback() {
  let username = document.getElementById("username").value;
  let feedback = document.getElementById("feedback-text").value;
  
  if (username.trim() === "") {
      alert("Please enter your name before submitting.");
      return;
  }

  alert("Thank you for your feedback, " + username + "!");
  closePopup();
}
