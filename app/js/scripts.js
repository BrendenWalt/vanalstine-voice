$(document).ready(function() {

    var menuIcon = $('.nav-burger');
    var burgerPatties = $('.nav-burger span');
    var menuList = $('.nav-links');
    var toTop = $('#to-top');
    var menuLink = $('.nav-link a');
    var windowVar = $(window);
    var documentVar = $(document);


                
    $('section[data-type="background"]').each(function(){
      var $bgobj = $(this); // assigning the object
      windowVar.scroll(function(){
        var yPos = -(windowVar.scrollTop() / $bgobj.data('speed'));
        var coords = '50% ' + yPos + 'px';
        $bgobj.css({backgroundPosition: coords });
      });
    }); 
  


    var onAnchorClick = function(e) {
      var location = this.hash;
      if (location) {
        locationName = "[name='" + this.hash.slice(1) + "']";

        $("html, body").animate({
          scrollTop: $(locationName).offset().top-50
        }, 1000, "swing");
         
        history.pushState(null, null,location);
        e.preventDefault();
       
      }
      menuIcon.toggleClass('open');
      menuList.toggleClass('open');
    }

    var onEmptyClick = function(e) {
      e.preventDefault();
      menuIcon.removeClass('open');
      menuList.removeClass('open');
    }

    var onEscapeClick = function(e) {
      var key = e.key || e.keyCode;
      console.log("keyup");
      if(key === "Escape") {
        
      }
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
  menuList.on('click', onEmptyClick)
  windowVar.on('scroll', onPageScroll);
  documentVar.on('keyup', onEscapeClick);
});
    


