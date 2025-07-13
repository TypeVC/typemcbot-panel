function showBotInfo() {
  document.getElementById('output').innerHTML = `
    <h2>Bot Info</h2>
    <ul>
      <li>Name: TypeBot</li>
      <li>Status: Online</li>
      <li>Location: UNDERWORLDSMP</li>
      <li>Skin: Pulizzi</li>
    </ul>
  `;
}

function showCommands() {
  document.getElementById('output').innerHTML = `
    <h2>Command List</h2>
    <ul>
      <li>/start - Start Bot</li>
      <li>/stop - Stop Bot</li>
      <li>/status - Get Bot Status</li>
      <li>/tp player - Teleport Bot</li>
    </ul>
  `;
}
