(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Modifica la fecha objetivo
  const countdownDate = new Date("02/22/2024 08:30:00").getTime();

  const x = setInterval(function () {
    const now = new Date().getTime(),
      distance = countdownDate - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    document.getElementById("days").innerText = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerText = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerText = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerText = seconds
      .toString()
      .padStart(2, "0");

    // Realiza alguna acción cuando se alcance la fecha
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("contador").innerHTML = ""
        document.getElementById("contador").innerText = "!La cuenta atrás ha terminado¡"
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
  }, 1000); // Actualiza cada segundo
})();
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('a[href="#consiste"]')
    .addEventListener("click", function (e) {
      e.preventDefault();

      document.getElementById("consiste").scrollIntoView({
        behavior: "smooth",
      });
    });
});
var carousel = document.querySelector(".carousel");
var cellCount = 9;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = (selectedIndex / cellCount) * -360;
  carousel.style.transform = "translateZ(-288px) rotateY(" + angle + "deg)";
}

var prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function () {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function () {
  selectedIndex++;
  rotateCarousel();
});
