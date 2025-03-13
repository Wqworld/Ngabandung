const gambar = document.querySelector(".gambar-budaya").cloneNode(true);
const gambarku = document.querySelector(".gambar-kuliner").cloneNode(true);
const destinasi = document.querySelector(".gambar-destinasi").cloneNode(true);

document.querySelector(".gambar-budaya-container").appendChild(gambar);
document.querySelector(".gambar-kuliner-container").appendChild(gambarku);
document.querySelector(".gambar-destinasi-container").appendChild(destinasi);

console.log("cek");
