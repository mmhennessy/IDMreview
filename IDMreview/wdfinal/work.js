//This page was created with the assistance of the css tricks website.
$(document).ready(function() {
  $("a").on('click', function() {
    $(this).css("color", "#90d4ed");
  });
//This makes a light blue color for links when they are clicked on.


  $(document).click(function() {
  $('h1').on("dblclick", function() {
    $(this).css("font-size", "300%")
  });
//Causes headers to enlarge when double clicked.


  $('h2').on("dblclick", function() {
    $(this).css("font-size", "210%")
  });

   $('h3').on("dblclick", function() {
    $(this).css("font-size", "180%")
  });

   $("h2, h3").on('click', function() {
   $(this).css("color", "#030303");
  });

   $('p').on("dblclick", function() {
  $(this).css("font-size", "150%")
  });

 //Causes sub-headings, paragraphs and lists to enlarge when double clicked. 

});  
});  