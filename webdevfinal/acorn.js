//This was created with the assistance of the fallowing website sources: APO Documentation, W3Schools and Stock Overflow

$(document).ready(function() {
  $("a").on('click', function() {
    $(this).css("background-color", "yellow");
  });
//This makes a yellow background for links when they are clicked on.


    $("#slides > div:gt(0)").hide();

    setInterval(function() {
      $('#slides img > div:first')
      .fadeOut(3000)
      .next()
      .fadeIn(3000)
      .end()
      .appendTo('#slides')
    }, 5000);
//Slideshow of images on home page

  $('h1').on("dblclick", function() {
    $(this).css("font-size", "300%")
  });
//Causes headers to enlarge when double clicked.


  $('h2').on("dblclick", function() {
    $(this).css("font-size", "200%")
  });
 //Causes sub-headings to enlarge when double clicked. 

});  


