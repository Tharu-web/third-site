document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email && pass) {
    alert("Congratulations, your account is hacked!");
    // Redirect or proceed to next page
  } else {
    alert("Please enter both email and password.");
  }
});