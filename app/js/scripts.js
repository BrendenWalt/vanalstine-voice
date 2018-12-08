document.addEventListener("DOMContentLoaded", function(e) {
    console.log('JS is loaded');

    var menuIcon = $('.nav-burger');
    var menuList = $('.nav-links')

    // $('.nav-burger').click(function(){
    // $(this).toggleClass('open');

    var onMenuClick = function() {
      console.log('menu-clicked');
      $(this).toggleClass('open');
      menuList.toggleClass('open')
    }
    
    menuIcon.on('click', onMenuClick);

});


