
$(document).ready(function(){


  $('.datepicker').datepicker();

  $('.modal').modal();
  $('.parallax').parallax();
  $('.carousel').carousel({
    shift:50,
      padding:50,
  });
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown({ hover: true });

  
});


$(window).on('scroll',function(){
  if($(window).scrollTop())
  {
  $('#response').addClass('black');
  }
  else
  {
  $('#response').removeClass('black');
  }
  }
  )
  $(window).on('scroll',function(){
    if($(window).scrollTop())
    {
    $('#menu-bar-dropdown').addClass('black');
    }
    else
    {
    $('#menu-bar-dropdown').removeClass('black');
    }
    }
    )
    
    