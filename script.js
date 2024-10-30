let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".slides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Event listener for keyboard navigation
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        plusSlides(-1);
    } else if (e.key === "ArrowRight") {
        plusSlides(1);
    }
});
