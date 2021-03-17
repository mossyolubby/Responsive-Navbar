

 //To make the toggle button drop down
 $(document).ready(function() {

   //$("body").on('click', '.icon1', function() {
    // $(".nav").show();
   // });
   $(".icon1").click(function(){
     $(".nav").toggle();
   });
   });
//To make the toggle by click any where on the body
   $(document).click(function(e){
     var $trig = $('.icon1');
     if($trig !== e.target && !$trig.has(e.target).length){
       $('#myTopnav'). fadeOut(1000);
     }
   });

//To display the nav-bar link withour referenshing
 $(document).ready(function(){
    $(".button").on("click",function(){
    $("#content").load($(this).attr("data-target"));
    return false;
    });
});
// To make home active
//$(document).ready(function(){
 //$('.menu a','ul li a').click(function(){
    //$('.menu a','li a').removeClass("active");
    //$(this).addClass("active");
//});
//});

//$(function(){
  //var current = location.pathname;
  //$('.menu a','ul li a').each(function(){
    //  var $this = $(this);
      // if the current path is like this link, make it active
      //if($this.attr('href').indexOf(current) !== -1){
        //  $this.addClass('active');
      //}
  //})
//})

$(document).ready(function() {

  /*var CurrentUrl= document.URL;
  var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();
  console.log(CurrentUrlEnd);
  $( "#lu-ID li a" ).each(function() {
        var ThisUrl = $(this).attr('href');
        var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();

        if(ThisUrlEnd == CurrentUrlEnd){
        $(this).closest('li').addClass('active')
        }
  });

});*/

$('nav li a').filter(function(){
  return this.href === location.href;
}).addClass('active');
})

  

