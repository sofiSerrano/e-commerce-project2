var myIndex = 0;
function carousel() {

    var i;
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";  
    }

    myIndex++;

    if (myIndex > x.length) {
	    myIndex = 1
    }    

    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 8000); // 8000 = 2 seconds
}

showSlides(myIndex);

function plusSlides(n) {
  showSlides(myIndex += n);
}
function currentSlide(n) {
  showSlides(myIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length){
    myIndex = 1
  }    

  if (n < 1){
    myIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }

  slides[myIndex-1].style.display = "block";  
  dots[myIndex-1].className += " active";

}