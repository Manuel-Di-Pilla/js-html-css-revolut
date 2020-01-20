$(document).ready(
  function () {
    $('.second li.lidrop').mouseenter(
      function () {
        $(this).children().removeClass('none');
        $(this).children().addClass('active');
      }
    );
    $('.second span').mouseleave(
      function () {
        $('.drop').removeClass('active');
        $('.drop').addClass('none');
      }
    );
  }
)
