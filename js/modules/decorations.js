function addFloatingElements() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";

    heart.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(heart);
  }

  for (let i = 0; i < 5; i++) {
    const teddy = document.createElement("div");

    teddy.classList.add("teddy-bear");

    teddy.innerHTML = "🎂";

    teddy.style.left = Math.random() * 100 + "%";
    teddy.style.top = Math.random() * 100 + "%";

    teddy.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(teddy);
  }
}

addFloatingElements();
