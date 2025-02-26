// HTML'deki butonları seçiyoruz
const girisButonu = document.getElementById("girisBtn");
const taramaButonu = document.querySelector(".scan-btn");


// Giriş ve Ana Sayfa bölümlerini seçiyoruz
const loginScreen = document.getElementById("login-screen");
const mainContent = document.getElementById("main-content");
const resultScreen = document.getElementById("resultScreen");

// Giriş butonuna tıklanınca
girisButonu.addEventListener("click", function () {
    loginScreen.classList.add("hidden"); // Giriş ekranını gizle
    mainContent.classList.remove("hidden"); // Ana sayfayı göster
});

function showMainScreen() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainScreen").style.display = "flex";
}


// Tarama butonuna tıklanınca
taramaButonu.addEventListener("click", function () {
    document.getElementById("loginScreen").classList.add("hidden"); // Giriş ekranını gizle
    document.getElementById("mainScreen").classList.add("hidden"); // Ana ekranı gizle
    document.getElementById("resultScreen").classList.remove("hidden"); // Sonuç ekranını göster
});

function showResultScreen() {
    document.getElementById("mainScreen").style.display = "none"; // ana ekranını gizle
    document.getElementById("resultScreen").style.display = "flex";  // result ekranı göster
}

