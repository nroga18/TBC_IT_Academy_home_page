window.addEventListener('scroll', function () {
  let header = document.getElementById('header');
  let dropdown = this.document.getElementById('dropdown')
  let scroll = window.scrollY;

  if (scroll > 100) {
    header.style.backgroundColor = '#2B2B2B';
    dropdown.style.backgroundColor = '#2B2B2B';
    header.style.opacity = '0.9';
  } else {
    header.style.backgroundColor = '#1A1E1F';
    dropdown.style.backgroundColor = '#1A1E1F';
    header.style.opacity = '1';
  }
});

function firstQuestion() {
  let collapsed = document.getElementById('first_question');
  collapsed.classList.toggle('collapsed');
}

function secondQuestion() {
  let collapsed = document.getElementById('second_question');
  collapsed.classList.toggle('collapsed');
}

function thirdQuestion() {
  let collapsed = document.getElementById('third_question');
  collapsed.classList.toggle('collapsed');
}






let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function dropdownMenu() {
  document.getElementById("dropdown").classList.toggle("show");
}
