let sizeOfTheMenu = window.innerWidth;

if (sizeOfTheMenu >= 961) {
  function openNav() {
    document.getElementById("sideNav").style.width = "30vw";
  }
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
  }
} else {
  function openNav() {
    document.getElementById("sideNav").style.width = "100%";
}
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
  }
}

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
             window.location.hash = hash;
        });
      }
    });
});

function initMap() {
  var uluru = {lat: 50.075538, lng: 14.4378};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

/*
    $(".europa-moon").click(function() {
      $(this).css("z-index", "100");
      $(this).css("transform", "scale(1.3)"); 
    });

    $(".europa-moon").mouseout(function () {
      $(this).css("z-index", "0");
      $(this).css("transform", "scale(1)");
    });

    $(".rhea-moon").click(function() {
      $(this).css("z-index", "100");
      $(this).css("position", "relative");
      $(this).animate({right: 420}, 'slow');
      $(this).css("transform", "scale(1.3)");
    });
    
    $(".rhea-moon").dblclick(function () {
      $(this).css("z-index", "0");
      $(this).css("position", "none");
      $(this).animate({right: 0}, 'slow');
      $(this).css("transform", "scale(1)");
    });

    $(".ganymede-moon").click(function() {
      $(this).css("z-index", "100");
      $(this).css("transform", "scale(1.3)"); 
    });
    
    $(".ganymede-moon").mouseout(function () {
      $(this).css("z-index", "0");
      $(this).css("transform", "scale(1)");
    });
*/