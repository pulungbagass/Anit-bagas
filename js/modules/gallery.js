import { galleryData } from "./gallery-data.js";

const galleryContainer = document.getElementById("galleryContainer");

const filterButtons = document.querySelectorAll(".gallery-btn");

function renderGallery(filter = "all") {
  galleryContainer.innerHTML = "";

  const filteredData =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.owner === filter);

  filteredData.forEach((item) => {
    const card = document.createElement("div");

    card.className = "gallery-item";

    card.innerHTML = `

            <img
                src="${item.src}"
                loading="lazy"
                alt="">

        `;

    galleryContainer.appendChild(card);
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    renderGallery(btn.dataset.filter);
  });
});

renderGallery();
