const dice = document.getElementById("dice");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

dice.addEventListener("click", function () {
  async function getAdvice() {
    const adviceObject = await fetch("https://api.adviceslip.com/advice");
    const realAdvice = await adviceObject.json();
    const { advice, id } = realAdvice.slip;
    adviceText.classList.add("animate");
    adviceText.innerText = `"${advice}"`;
    adviceId.innerText = `#${id}`;
  }
  getAdvice();
  adviceText.classList.remove("animate");
});
