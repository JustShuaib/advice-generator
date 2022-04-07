const dice = document.getElementById("dice");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

dice.addEventListener("click", function () {
  async function adv() {
    const advObj = await fetch("https://api.adviceslip.com/advice");
    const realAdv = await advObj.json();
    const { advice, id } = realAdv.slip;

    adviceText.innerText = `"${advice}"`;
    adviceId.innerText = `#${id}`;
  }
  adv();
});
