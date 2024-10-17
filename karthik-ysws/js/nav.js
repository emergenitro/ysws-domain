const navSlide = () => {
  const burger = document.querySelector(".burger");

  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.maxHeight === "200px") {
    x.style.maxHeight = "0";
  } else {
    x.style.maxHeight = "200px";
  }
}

$(document).ready(function() {
  var click = false;
  $(".burger").click(function() {
    if (click == false) {
      $(".line2").fadeOut(500);
      var click = true;
    } else {
      $(".line2").fadeIn(500);
      var click = false;
    }
  });
});

