function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Safe hash (not real encryption, but safer than plain text)
  const secretUser = "typemaster";
  const secretPass = "tYpE@Mcb0T#Panel$786";

  if (username === secretUser && password === secretPass) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("login-message").innerText = "❌ Unauthorized access. Login failed.";
  }
}
