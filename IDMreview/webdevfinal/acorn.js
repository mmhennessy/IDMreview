//This page was created with the assistance of the css tricks website.
$(document).ready(function() {
  $("a").on('click', function() {
    $(this).css("color", "#207e32");
  });
//This makes a yellow background for links when they are clicked on.

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

//Slideshow of images on home page


  $(document).click(function() {
  $('h1').on("dblclick", function() {
    $(this).css("font-size", "300%")
  });
//Causes headers to enlarge when double clicked.


  $('h2').on("dblclick", function() {
    $(this).css("font-size", "200%")
  });

   $('p').on("dblclick", function() {
  $(this).css("font-size", "200%")
  });

  $('ul').on("dblclick", function() {
  $(this).css("font-size", "200%")
  }); 
 //Causes sub-headings, paragraphs and lists to enlarge when double clicked. 

});  
});  


