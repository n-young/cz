// Fade in
$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight() / 2;
        
        /* If the element is completely within bounds of the window, fade it in */
        if (!(objectBottom > windowBottom)) { //object comes into view (scrolling down)
          $(this).addClass("faded-in")
        } else { //object goes out of view (scrolling up)
          $(this).removeClass("faded-in")
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

// Lightboxes
Array.from(document.getElementsByClassName("artimage"))
    .map(e => e.addEventListener("click", (event) => {
        const lightbox = event.target.nextElementSibling
        lightbox.style.opacity = 1
        lightbox.style.zIndex = 1
    }))

Array.from(document.getElementsByClassName("artlightbox"))
    .map(e => e.addEventListener("click", (event) => {
        const lightbox = event.target
        if (lightbox.tagName === "DIV") {
            lightbox.style.opacity = 0
            lightbox.style.zIndex = -1
        }
    }))
