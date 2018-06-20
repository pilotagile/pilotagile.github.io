//
//document.getElementById("navMenu").innerHTML =
//        
//  '<div class="container">' +
//    '<div class="navbar-header">'+
//      '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">'+
//        '<span class="icon-bar"></span>'+
//        '<span class="icon-bar"></span>'+
//        '<span class="icon-bar"></span> '+                       
//      '</button>'+
//      '<a class="navbar-brand" href="index.html">Me</a>'+
//    '</div>'+
//    '<div class="collapse navbar-collapse" id="myNavbar">'+
//      '<ul class="nav navbar-nav navbar-right">'+
//        '<li><a href="#who">WHO</a></li>'+
//        '<li><a href="#what">WHAT</a></li>'+
//        '<li><a href="#where">WHERE</a></li>'+   
//        '<li><a href="contact.html">CONTACT</a></li>'+   
//      '</ul>'+
//    '</div>'+
//  '</div>';


document.getElementById("navMenu").innerHTML =
    
'<div class="navbar navbar-inverse navbar-fixed-top">'+
  '<div class="container">'+

    '<div class="navbar-header">'+
      '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
        '<span class="icon-bar"></span>'+
        '<span class="icon-bar"></span>'+
        '<span class="icon-bar"></span>'+
      '</button>'+
      '<a class="navbar-brand" href="index.html" data-toggle="collapse" data-target=".navbar-collapse.in">Audrey Chavarria</a>'+
    '</div>'+
    

    '<div class="collapse navbar-collapse">'+
      '<ul class="nav navbar-nav">'+
        '<li><a href="index.html" data-toggle="collapse" data-target=".navbar-collapse.in">HOME</a></li>'+
    
        '<li><a href="projects.html" data-toggle="collapse" data-target=".navbar-collapse.in">PROJECTS</a></li>'+
        '<li><a href="gallery.html" data-toggle="collapse" data-target=".navbar-collapse.in">GALLERY</a></li>'+
    
        '<li><a href="communityInvolvement.html" data-toggle="collapse" data-target=".navbar-collapse.in">COMMUNITY INVOLVEMENT</a></li>'+
        '<li><a href="contact.html" data-toggle="collapse" data-target=".navbar-collapse.in">CONTACT</a></li>'+
    
      '</ul>'+
    '</div><!--/.nav-collapse -->'+

  '</div>'+
'</div>';


//
//(function ($) {
//  $(document).ready(function(){
//
//    // hide .navbar first
//    $("#navMenu").hide();
//
//    // fade in .navbar
//    $(function () {
//        $(window).scroll(function () {
//
//                 // set distance user needs to scroll before we start fadeIn
//            if ($(this).scrollTop() > 100) {
//                $('#navMenu').fadeIn();
//            } else {
//                $('#navMenu').fadeOut();
//            }
//        });
//    });
//
//});
//  }(jQuery));
//        