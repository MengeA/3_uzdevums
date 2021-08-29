


function topFunction() {
  document.documentElement.scrollTop = 0; 
}

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
 
});

window.onload = function(){ 

  var stastaNr = 19;

  // Select the table element
  var idejuRezgis = document.getElementById("idejurezgis");

  // Add a new row to the table using the correct activityNumber
  while(stastaNr <= 99)
  {
    idejuRezgis.innerHTML += '<div class="d-flex align-content-around flex-wrap"> '+
                                '<img src="/Assets/img/zelts.png" class="bilzu_rezgis image-fluid" alt="'+ stastaNr +'">' +
                                '<p class="idejucipars">' + stastaNr + '</p>'+
                              '</div>';

    stastaNr += 1;
  }
  
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

};
