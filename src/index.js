import { getRandomOption } from "./modules/getRandomOption";
import { checkIsWinner } from "./modules/checkIsWinner";
const buttons = [...document.querySelectorAll(".buttons button")];

function start(button) {
  const playerSelection = button.classList.item(0);
  const cpuSelection = getRandomOption();
  checkIsWinner(playerSelection, cpuSelection);
}

buttons.forEach(button => {
  button.addEventListener("click", () => start(button));
});
