document.addEventListener("DOMContentLoaded", function () {
  // Password check
  const passwordModal = document.getElementById("passwordModal");
  const welcomeScreen = document.getElementById("welcomeScreen");
  const mainContent = document.getElementById("mainContent");
  const passwordInput = document.getElementById("passwordInput");
  const submitPassword = document.getElementById("submitPassword");

  // bagas ganteng banget
  submitPassword.addEventListener("click", function () {
    if (passwordInput.value.toLowerCase() === "bagas ganteng banget") {
      passwordModal.style.opacity = "0";
      setTimeout(() => {
        passwordModal.style.display = "none";
        welcomeScreen.style.display = "flex";

        setTimeout(() => {
          welcomeScreen.style.opacity = "0";
          setTimeout(() => {
            welcomeScreen.style.display = "none";
            mainContent.style.display = "block";
          }, 800);
        }, 2500);
      }, 500);
    } else {
      passwordInput.value = "";
      passwordInput.placeholder = "Bingung yh say. coba tanya ke dia";
      passwordInput.style.borderColor = "#ff4d4d";
      setTimeout(() => {
        passwordInput.style.borderColor = "#ffb7c5";
        passwordInput.placeholder = "Masukan Kata Kunci";
      }, 1500);
    }
  });

  // Allow Enter key to submit password
  passwordInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      submitPassword.click();
    }
  });

  // Tab switching
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // Update active tab
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Show corresponding content
      tabContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === targetTab) {
          content.classList.add("active");
        }
      });
    });
  });

  // Play music

  const songs = document.querySelectorAll(".song");

  let currentAudio = null;
  let currentSongDiv = null;

  const audioMap = new Map(); // simpan audio per song

  songs.forEach((song) => {
    const btn = song.querySelector(".play-btn");
    const icon = song.querySelector(".spin-target");
    const src = song.dataset.audio;

    // bikin audio sekali aja per song
    const audio = new Audio(src);
    audio.loop = true;
    audioMap.set(song, audio);

    btn.addEventListener("click", () => {
      // ===== CASE 1: klik lagu yang sama =====
      if (currentSongDiv === song) {
        if (audio.paused) {
          audio.play();
          btn.textContent = "⏸";
          icon.classList.add("spin");
          song.classList.add("playing");
        } else {
          audio.pause();
          btn.textContent = "▶";
          icon.classList.remove("spin");
          song.classList.remove("playing");
        }
        return;
      }

      // ===== CASE 2: klik lagu beda =====
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;

        const oldBtn = currentSongDiv.querySelector(".play-btn");
        const oldIcon = currentSongDiv.querySelector(".spin-target");

        oldBtn.textContent = "▶";
        oldIcon.classList.remove("spin");
        currentSongDiv.classList.remove("playing");
      }

      // play lagu baru dari awal
      audio.currentTime = 0;
      audio.play();

      btn.textContent = "⏸";
      icon.classList.add("spin");
      song.classList.add("playing");

      currentAudio = audio;
      currentSongDiv = song;
    });
  });

  // Expandable love letter
  const loveLetter = document.getElementById("loveLetter");
  loveLetter.addEventListener("click", function () {
    this.classList.toggle("expanded");
  });

  // Add floating decorative elements
  function addFloatingElements() {
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(heart);
    }

    for (let i = 0; i < 5; i++) {
      const teddy = document.createElement("div");
      teddy.classList.add("teddy-bear");
      teddy.innerHTML = "🧸";
      teddy.style.left = Math.random() * 100 + "%";
      teddy.style.top = Math.random() * 100 + "%";
      teddy.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(teddy);
    }
  }

  addFloatingElements();
});
