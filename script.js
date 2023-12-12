$( document ).ready(function() {
   console.log("working")

   $(".entries").children().mouseenter(function(){
    $(this).css("background-color", "rgb(93, 116, 170)")
    $(this).children().css("background-color", " rgb(93, 116, 170)")
  });

  $(".entries").children().mouseleave(function(){
    $(this).css("background-color", "transparent")
    $(this).children().css("background-color", "transparent")
  });

  $(".letter").hover(function(){
    $(this).addClass("letter-new")
  });

  $(".letter").hover(function(){
    $(this).addClass("letter-normal")
  })



});