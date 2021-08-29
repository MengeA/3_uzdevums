 
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.documentElement.scrollTop > 20) 
    && $(this).scrollTop() < $(document).height() - $(window).height() - 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.documentElement.scrollTop = 0; 
}

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
 
});

window.onload = function(){ 
  var sutitpoga = document.getElementById("sutit");
  var pazinojums = document.getElementsByClassName("pazinojums");
  var zemtabulas = document.getElementsByClassName("zemtabulas");
  sutitpoga.onclick = function() {
    zemtabulas[0].style.display = "none";
    zemtabulas[1].style.display = "none";

    pazinojums[0].style.display = "block";
    pazinojums[1].style.display = "block";

    sutitpoga.style.display = "none";
  }
};
