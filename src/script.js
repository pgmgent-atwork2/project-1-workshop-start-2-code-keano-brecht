const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
let jumping = 0;
let counter = 0;

hole.addEventListener("animationiteration", () => {
  const random = -(Math.random() * 300 + 150);
  hole.style.top = random + "px";
  counter++;
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !jumping) {
    jump();
  }
});

setInterval(() => {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  if (jumping === 0) {
    character.style.top = characterTop + 3 + "px";
  }
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  const holeTop = parseInt(
    window.getComputedStyle(hole).getPropertyValue("top")
  );
  const cTop = -(500 - characterTop);
  if (
    characterTop > 480 ||
    (blockLeft < 20 &&
      blockLeft > -50 &&
      (cTop < holeTop || cTop > holeTop + 130))
  ) {
    alert(`Game over. Score: ${counter - 1}`);
    character.style.top = 100 + "px";
    counter = 0;
  }
}, 10);

const jump = () => {
  jumping = 1;
  let jumpCount = 0;
  const jumpInterval = setInterval(() => {
    const characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    if (characterTop > 6 && jumpCount < 15) {
      character.style.top = characterTop - 5 + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
};
