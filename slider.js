document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const sliderInner = document.querySelector('.slider-inner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;
    const slideCount = slides.length;
    const slideWidth = slides[0].clientWidth;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }

    function updateSlider() {
        const offset = -currentSlide * slideWidth;
        sliderInner.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Dynamically set width of slider-inner
    sliderInner.style.width = `${slideCount * slideWidth}px`;

    setInterval(nextSlide, 5000); // Change slide every 3 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach((slide, index) => {
            if (index === n) {
                slide.style.display = "block";
                dots[index].classList.add('active-dot');
            } else {
                slide.style.display = "content";
                dots[index].classList.remove('active-dot');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Show initial slide
    showSlide(currentSlide);

    // Event listeners for next and previous buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Event listener for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});


        document.addEventListener('DOMContentLoaded', function () {
            const slides = document.querySelectorAll('.slide');
            const sliderInner = document.querySelector('.slider-inner');
            let currentSlide = 0;
            const slideCount = slides.length;
            const slideWidth = slides[0].clientWidth;

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slideCount;
                updateSlider();
            }

            function updateSlider() {
                const offset = -currentSlide * slideWidth;
                sliderInner.style.transform = `translateX(${offset}px)`;
            }

            // Dynamically set width of slider-inner
            sliderInner.style.width = `${slideCount * slideWidth}px`;

            // Automatic slideshow
            setInterval(nextSlide, 3000); // Change slide every 3 seconds

            // Click on image to go to the next slide
            slides.forEach(slide => {
                slide.addEventListener('click', nextSlide);
            });
        });