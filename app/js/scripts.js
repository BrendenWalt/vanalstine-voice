$(document).ready(function() {
  console.log('JS is loaded');

    var menuIcon = $('.nav-burger');
    var burgerPatties = $('.nav-burger span');
    var menuList = $('.nav-links');
    var toTop = $('#to-top');
    var menuLink = $('.nav-link a');
    var windowVar = $(window);

   

    var onAnchorClick = function(e) {
      var location = this.hash;
      if (location) {
        locationName = "[name='" + this.hash.slice(1) + "']";

        $("html, body").animate({
          scrollTop: $(locationName).offset().top-50
        }, 1000, "swing");
        
        
        // location = $(location);
        // var target = location[0];
        // if (target) {
        //   target.scrollIntoView({
        //     behavior: "smooth",
        //     block: "start"
        //   });
        // }
         
        history.pushState(null, null,location);
        e.preventDefault();
       
      }
      menuIcon.toggleClass('open');
      menuList.toggleClass('open');
    }

    var onMenuClick = function() {
      $(this).toggleClass('open');
      menuList.toggleClass('open')
    }

    var onPageScroll = function() {
      var stickyHeight = screen.height*.3;
      if (scrollY > (stickyHeight)) {
        console.log("scrolled down");
        toTop.fadeIn(300);
        burgerPatties.addClass('drop-shadow');
      } else {
        toTop.fadeOut(300);
        burgerPatties.removeClass('drop-shadow');
      }
    }

    var onToTopClick = function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
  menuIcon.on('click', onMenuClick);
  toTop.on('click', onToTopClick);
  menuLink.on('click', onAnchorClick);
  windowVar.on('scroll', onPageScroll);
});
    


