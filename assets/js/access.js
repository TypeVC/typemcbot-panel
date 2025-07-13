// Sample user DB (replace with real DB/API later)
const userData = {
  "varun": {
    ram: "2048MB",
    cpu: "2 Cores",
    gpu: "RTX 3060",
    approved: true
  }
};

const currentUser = "varun"; // You can make dynamic with login system

window.onload = function() {
  document.getElementById("username").innerText = currentUser;
  const user = userData[currentUser];

  if (user && user.approved) {
    document.getElementById("ram").innerText = user.ram;
    document.getElementById("cpu").innerText = user.cpu;
    document.getElementById("gpu").innerText = user.gpu;
    document.getElementById("status").innerText = "🟢 Approved by Admin";
  } else {
    document.getElementById("status").innerText = "🔴 Waiting for Admin Approval";
  }
};
