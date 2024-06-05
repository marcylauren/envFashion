


let x = document.getElementById("hellox");

console.log(x)


x.addEventListener("click", function(e){
  e.preventDefault()
  alert("sent");
  let x = document.getElementById("lname");
  x.value = "";
  let s = document.getElementById("fname");
  s.value = "";
  let j = document.getElementById("subject");
  j.value = "";
  console.log(x, s, j);
  
});





console.log("hello")



let slideIndex = 1;
showSlides(slideIndex);
showSlidesx(slideIndex);
showSlidesy(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlidesx(n) {
  showSlidesx(slideIndex += n);
}

function currentSlidesx(n) {
  showSlidesx(slideIndex = n);
}

function plusSlidesy(n) {
  showSlidesy(slideIndex += n);
}

function currentSlidesy(n) {
  showSlidesy(slideIndex = n);
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


function showSlidesx(n) {
  let i;
  let slides = document.getElementsByClassName("x");
  let dots = document.getElementsByClassName("y");
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


function showSlidesy(n) {
  let i;
  let slides = document.getElementsByClassName("yx");
  let dots = document.getElementsByClassName("pl");
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


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}





