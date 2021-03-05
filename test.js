$(function () {
  // $("body").html("<h1>hello,jQuery!<h1>");
  // $(".box1").slideUp();
  // $(".box1").on("click",function(){
  //   $(".box1").addClass("box-ext");
  // });
  // $(".box1").mouseout(function(){
  //   $(".box1").removeClass("box-ext");
  // });

  // $(".box1").on('click', function () {
  //   $(this).slideUp();
  // });

  // $('.bg2').on('click', function () {
  //   $('.bg2').slideUp();
  // });

  // $('.bg3').on('click', function () {
  //   $('.bg3').slideUp();
  // });

  // $('.bg4').on('click', function () {
  //   $('.bg4').slideUp();
  // });
  $("button").on("click",function(){
    $("ul").children().css("color","red");
  });



});