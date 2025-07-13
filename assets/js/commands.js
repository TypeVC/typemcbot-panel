function sendCommand() {
  const input = document.getElementById("cmd-input").value;
  let output = "";

  switch (input) {
    case "/bot status":
      output = "✅ Bot is online";
      break;
    case "/bot stop":
      output = "🛑 Bot stopped";
      break;
    case "/bot tp":
      output = "📍 Teleporting...";
      break;
    default:
      output = "❓ Unknown command";
  }

  document.getElementById("cmd-output").innerText = output;
}
