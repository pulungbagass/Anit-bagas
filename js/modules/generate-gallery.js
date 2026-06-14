const fs = require("fs");
const path = require("path");

// ekstensi gambar yang didukung
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

// folder yang akan discan
const folders = ["anita", "bagas"];

let galleryData = [];

folders.forEach((folder) => {
  // menuju:
  // BAGAS-ANIT/img/anita
  // BAGAS-ANIT/img/bagas
  const folderPath = path.join(__dirname, "..", "..", "img", folder);

  if (!fs.existsSync(folderPath)) {
    console.log(`⚠ Folder ${folder} tidak ditemukan`);

    return;
  }

  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();

    if (IMAGE_EXTENSIONS.includes(ext)) {
      galleryData.push({
        src: `./img/${folder}/${file}`,

        owner: folder,
      });
    }
  });
});

// urutkan berdasarkan nama file
galleryData.sort((a, b) => a.src.localeCompare(b.src));

// isi file yang akan dibuat
const output = `export const galleryData = ${JSON.stringify(
  galleryData,
  null,
  2,
)};`;

// simpan ke:
// js/modules/gallery-data.js
const outputPath = path.join(__dirname, "gallery-data.js");

fs.writeFileSync(outputPath, output, "utf8");

console.log(`✅ ${galleryData.length} foto berhasil ditemukan`);

console.log(`📄 gallery-data.js berhasil dibuat`);
