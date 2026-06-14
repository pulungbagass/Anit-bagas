const loveLetters = document.querySelectorAll(".letter");

loveLetters.forEach((letter) => {
  const header = letter.querySelector(".letter-header");

  header.addEventListener("click", () => {
    letter.classList.toggle("expanded");
  });
});
