function hideSlideBar()
{
  $('.row-offcanvas').removeClass('active');
  $('.sidebar-offcanvas .nav-mobile').hide();
  $('.sidebar-offcanvas .shopping-cart').hide();  
  $(document).unbind('mouseup'); 
}

function showSlideBar()
{
  $('.row-offcanvas').addClass('active');
  $(document).bind('mouseup', function (e)
  {
    var container = $(".sidebar-offcanvas");
  
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      hideSlideBar();
    }
  });     
}

$(document).ready(function () {
  
  $('[data-toggle="offcanvas show-menu"]').click(function () {
    showSlideBar();
  });

  $('.sheader .btn-close').click(
    function(){
      hideSlideBar();     
    }
  );

});

