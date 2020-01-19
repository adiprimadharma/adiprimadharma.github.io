// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function() {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000,
        function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        }
      );
    }
  }
});

// Photo Filter
var activeFilter = "all";

$(".ww-filter-button").on("click", function(e) {
  // remove btn-primary from all buttons first
  $(".ww-filter-button").removeClass("btn-primary");
  $(".ww-filter-button").addClass("btn-outline-primary");

  // add btn-primary to active button
  var button = $(this);
  button.removeClass("btn-outline-primary");
  button.addClass("btn-primary");
  filterItems(button.data("filter"));
  e.preventDefault();
});

function filterItems(filter) {
  if (filter === activeFilter) {
    return;
  }

  activeFilter = filter;
  $(".ww-gallery .card").each(function() {
    var card = $(this);
    var groups = card.data("groups");
    var show = false;
    if (filter === "all") {
      show = true;
    } else {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i] === filter) {
          show = true;
        }
      }
    }
    // hide everything first
    card.fadeOut(400);
    setTimeout(function() {
      if (show && !card.is(":visible")) {
        card.fadeIn(400);
      }
    }, 500);
  });
}

// Light Box
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// compose gallery
var bpLength = 20;
var photoGalleryCardBP = '<!-- Best Partner -->';
  for (let index = 1; index <= bpLength; index++) {
    photoGalleryCardBP += '<div class="card" data-groups="[&quot;bp&quot;,&quot;all&quot;]">'+
      '<a href="images/photo-gallery-mafia/bp-'+index+'.jpg" data-toggle="lightbox" data-gallery="ww-gallery">'+
        '<img class="img-fluid" src="images/photo-gallery-mafia/bp-'+index+'.jpg" alt="Best Partner '+index+'"/>'+
      '</a>'+
    '</div>';
  }
  photoGalleryCardBP += '<!-- End Best Partner -->';
$("#pg-card-list").append(photoGalleryCardBP);

var htLength = 10;
var photoGalleryCardHT = '<!-- Best Partner -->';
  for (let index = 1; index <= htLength; index++) {
    photoGalleryCardHT += '<div class="card" data-groups="[&quot;ht&quot;,&quot;all&quot;]">'+
      '<a href="images/photo-gallery-mafia/ht-'+index+'.jpg" data-toggle="lightbox" data-gallery="ww-gallery">'+
        '<img class="img-fluid" src="images/photo-gallery-mafia/ht-'+index+'.jpg" alt="Best Partner '+index+'"/>'+
      '</a>'+
    '</div>';
  }
  photoGalleryCardHT += '<!-- End Best Partner -->';
$("#pg-card-list").append(photoGalleryCardHT);

var faLength = 9;
var photoGalleryCardFA = '<!-- Best Partner -->';
  for (let index = 1; index <= faLength; index++) {
    photoGalleryCardFA += '<div class="card" data-groups="[&quot;fa&quot;,&quot;all&quot;]">'+
      '<a href="images/photo-gallery-mafia/fa-'+index+'.jpg" data-toggle="lightbox" data-gallery="ww-gallery">'+
        '<img class="img-fluid" src="images/photo-gallery-mafia/fa-'+index+'.jpg" alt="Best Partner '+index+'"/>'+
      '</a>'+
    '</div>';
  }
  photoGalleryCardFA += '<!-- End Best Partner -->';
$("#pg-card-list").append(photoGalleryCardFA);


// countdown
var timeLeft = countdown(function(ts) {
  document.getElementById('countdown').innerHTML = ts.toHTML("strong");
}, new Date(1581249600000), countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);