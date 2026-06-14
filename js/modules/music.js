const songs = document.querySelectorAll(".song");

let currentAudio = null;
let currentSongDiv = null;

const audioMap = new Map();

songs.forEach((song) => {
  const btn = song.querySelector(".play-btn");
  const icon = song.querySelector(".spin-target");

  const src = song.dataset.audio;

  const audio = new Audio(src);

  audio.loop = true;

  audioMap.set(song, audio);

  btn.addEventListener("click", () => {
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

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;

      const oldBtn = currentSongDiv.querySelector(".play-btn");
      const oldIcon = currentSongDiv.querySelector(".spin-target");

      oldBtn.textContent = "▶";
      oldIcon.classList.remove("spin");

      currentSongDiv.classList.remove("playing");
    }

    audio.currentTime = 0;
    audio.play();

    btn.textContent = "⏸";

    icon.classList.add("spin");

    song.classList.add("playing");

    currentAudio = audio;
    currentSongDiv = song;
  });
});
