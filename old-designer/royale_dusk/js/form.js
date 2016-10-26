$(function(){
  $('.form-checkout .form-control[placeholder]').focus(
    function(){
      $(this).parent().addClass('has-active-field');
    }
  ).blur(
    function(){
      $(this).parent().removeClass('has-active-field');
    }
  );
});
