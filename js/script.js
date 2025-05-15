console.log('javascript is running');

// navigation bar
function toggleMenu() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
    // Fungsi untuk menutup dropdown jika klik di luar
function closeDropdownIfClickedOutside(event) {
    const icon = document.querySelector('.icon');
    const dropdown = document.querySelector('.dropdown');

    const isClickInsideIcon = icon.contains(event.target);
    const isClickInsideDropdown = dropdown.contains(event.target);

    // Jika klik di luar icon dan dropdown
    if (!isClickInsideIcon && !isClickInsideDropdown) {
        dropdown.style.display = 'none';
    }
}
    // Menjalankan fungsi saat halaman diklik
function setupDropdownCloseEvent() {
    document.addEventListener('click', closeDropdownIfClickedOutside);
}
    // Jalankan setup saat halaman selesai dimuat
window.onload = setupDropdownCloseEvent;


// home section
let slideIndex = 1;
let slideInterval;
// Tampilkan slide awal
showDivs(slideIndex);
// Tombol manual
function plusDivs(n) {
    showDivs(slideIndex += n);
    resetAutoSlide();
}
function currentDiv(n) {
    showDivs(slideIndex = n);
    resetAutoSlide();
}
// Tampilkan slide sesuai index
function showDivs(n) {
    const slides = document.getElementsByClassName("slides1");
    const dots = document.getElementsByClassName("slides1-mark");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}
// Auto slide
function autoSlide() {
    slideIndex++;
    showDivs(slideIndex);
}
// Set interval
function startAutoSlide() {
    slideInterval = setInterval(autoSlide, 5000); // ganti setiap 5 detik
}
// Reset saat ada interaksi manual
function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}
// Mulai autoplay saat halaman dimuat
window.onload = function() {
     startAutoSlide();
};




// Tampilkan form popup
document.getElementById("button-call").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("popup-form").style.display = "block";
});

// Tutup popup
function closePopup() {
  document.getElementById("popup-form").style.display = "none";
}

// Validasi dan "submit" AJAX simulasi
function submitForm(e) {
  e.preventDefault();

  const nama = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const kota = document.getElementById("kota").value;

  if (!nama || !email || !kota) {
    alert("Harap lengkapi semua field.");
    return false;
  }

  // Simulasi request AJAX
  setTimeout(() => {
    alert("Data berhasil disimpan!");
    closePopup();
    document.getElementById("form-popup").reset();
  }, 500);

  return false;
}
