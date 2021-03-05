$(function(){
  // $("body").html("<h1>hello,jQuery!<h1>");
  // $(".box1").slideUp();
  $(".box1").on("click",function(){
    $(".box1").addClass("box-ext");
  });
  $(".box1").mouseout(function(){
    $(".box1").removeClass("box-ext");
  });
});

