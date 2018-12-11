$(document).ready(function() {
  console.log('JS is loaded');

    var menuIcon = $('.nav-burger');
    var menuList = $('.nav-links');
    var toTop = $('#to-top');

    var menuLink = $('.nav-link a');

    // $('.nav-burger').click(function(){
    // $(this).toggleClass('open');
    var onAnchorClick = function(e) {
      var location = this.hash;
      if (location) {
        location = "[name='" + this.hash.slice(1) + "']";
        // $("html, body").animate({
        //   scrollTop: location.offset().top-50
        // }, 1000, "swing");
        // return false;
        location = $(location);
        var target = location[0];
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        history.pushState(null, null,location);
       event.preventDefault();
      }
      console.log("Clicked menu item");
     
    }


    var onMenuClick = function() {
      console.log('menu-clicked');
      $(this).toggleClass('open');
      menuList.toggleClass('open')
    }
    var onToTopClick = function(e) {
      e.preventDefault();
      console.log('To The Top!')
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
  menuIcon.on('click', onMenuClick);
  toTop.on('click', onToTopClick);
  menuLink.on('click', onAnchorClick);
});
    


