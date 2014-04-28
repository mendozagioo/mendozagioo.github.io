$(document).ready(function() {
  function getSizes() {
    var width = $(window).width(),
        height = $(window).height(),
        glassesTop = height * 0.335,
        anchorsTop = glassesTop + 35,
        infoMobileTop = height - (height * 0.2),
        Htop = height * 0.51,
        Hdown = height - Htop,
        location = window.location.pathname;

    $('.glasses, .me-separator').css({
      margin: "" + glassesTop + "px auto 30px"
    });
    $('.links').css({
      margin: "" + anchorsTop + "px auto 0"
    });

    if (width < 768) {
      $('.links').css('margin-top', infoMobileTop);

      if(location.indexOf("/blog") > -1) {
        $('#me').css('display', 'none');
      }
      if(location == "/about-me.html") {
        $('#me').css('display', 'none');
      }
    }

    //if(location.indexOf("/blog") > -1) {
    //  $('#me').addClass('select-blog');
    //}
    //if(location == "/about-me.html") {
    //  $('#me').addClass('select-about-me');
    //}
  }

  getSizes();

  $(window).resize(function() {
    getSizes();
  });
});
