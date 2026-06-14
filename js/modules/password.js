import { startFireworks, createConfetti } from "./birthday.js";

const passwordModal = document.getElementById("passwordModal");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");

submitPassword.addEventListener("click", () => {
  if (passwordInput.value.toLowerCase() === "bagas ganteng banget") {
    passwordModal.style.opacity = "0";
    const birthdayMusic = new Audio("audio/HappyBirthday22th.mp3");
    birthdayMusic.play();

    setTimeout(() => {
      passwordModal.style.display = "none";
      welcomeScreen.style.display = "flex";

      //   ini bagian hbd nya
      startFireworks();
      createConfetti();
      //   end bagian hbd nya

      setTimeout(() => {
        welcomeScreen.style.opacity = "0";
        setTimeout(() => {
          welcomeScreen.style.display = "none";
          mainContent.style.display = "block";
        }, 800);
      }, 8000); // 7000ms = 7s (hbd nya itu)
    }, 500);
  } else {
    passwordInput.value = "";
    passwordInput.placeholder = "Bingung yh say. coba tanya ke dia";
    passwordInput.style.borderColor = "#ff4d4d";
    setTimeout(() => {
      passwordInput.style.borderColor = "#ffb7c5";
      passwordInput.placeholder = "Masukan Kata Kunci";
    }, 2000);
  }
});

passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    submitPassword.click();
  }
});
