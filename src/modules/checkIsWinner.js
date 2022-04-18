const result = document.querySelector(".result");
export function checkIsWinner(player, cpu) {
  let message = "";
  if (player === cpu) {
    message = "Tie";
  } else if ((player === "rock" && cpu === "scissors") || (player === "scissors" && cpu === "paper") || (player === "paper" && cpu === "rock")) {
    message = "Player Wins";
  } else {
    message = "CPU Wins";
  }
  console.log({ player, cpu });
  result.textContent = `${message}  (Player: ${player} - CPU: ${cpu})`;
}
