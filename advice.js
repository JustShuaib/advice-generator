const dice = document.getElementById("dice");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

dice.addEventListener("click", function () {
  // ASYNC AWAIT
  async function adv() {
    const advObj = await fetch("https://api.adviceslip.com/advice");
    const realAdv = await advObj.json();
    const { advice, id } = realAdv.slip;

    adviceText.innerText = `${advice}`;
    adviceId.innerText = `#${id}`;
  }
  adv();

  //  FETCH chainaning
  /* fetch("https://api.adviceslip.com/advice")
    .then(function (response) {
      return response.json();
    })
    .then(function (adviceObj) {
      const { advice, id } = adviceObj.slip;
      adviceText.innerText = advice;
      adviceId.innerText = id;
    }); */
});
