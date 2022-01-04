function startGame() {
  let messagesElement = document.getElementById("messages");
  messagesElement.innerText = "welcome to multiMath starting new game..."
}
document.getElementById('startGame').addEventListener('click', startGame)