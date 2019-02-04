// navigation bar
$(".navigation").addClass("hide");
$(".nav").click(function(){
  $(".navigation").toggleClass("hide");
  $(".navigation").toggleClass("appear");
})

// project navgation
$(".pp").addClass("hide");
const pp=document.querySelector(".pp");
const n=document.querySelector(".n2");

n.addEventListener("mouseover", function( event ) {
   pp.classList.remove("hide");
   pp.classList.add("appear");
 })
n.addEventListener("mouseleave", function( event ) {
  pp.classList.add("hide");
})

// iframe
$(".link").addClass("hide");
$(".p1").click(function(){
  $(".link").addClass("hide");
  $(".pro1").removeClass("hide");
})
$(".p2").click(function(){
  $(".link").addClass("hide");
  $(".pro2").removeClass("hide");
})
$(".p3").click(function(){
  $(".link").addClass("hide");
  $(".pro3").removeClass("hide");
})
$(".n3").click(function(){
  $(".link").addClass("hide");
  $(".ex").removeClass("hide");
})
$(".n4").click(function(){
  $(".link").addClass("hide");
  $(".re").removeClass("hide");
})
$("h1").click(function(){
  $(".link").addClass("hide");
})
$(".p3ex").click(function(){
  $(".link").addClass("hide");
  $(".ex").removeClass("hide");
})
$(".exp3").click(function(){
  $(".link").addClass("hide");
  $(".pro3").removeClass("hide");
})
$(".p2p3").click(function(){
  $(".link").addClass("hide");
  $(".pro3").removeClass("hide");
})
$(".p1p2").click(function(){
  $(".link").addClass("hide");
  $(".pro2").removeClass("hide");
})
$(".p3p2").click(function(){
  $(".link").addClass("hide");
  $(".pro2").removeClass("hide");
})
$(".p2p1").click(function(){
  $(".link").addClass("hide");
  $(".pro1").removeClass("hide");
})
$(".p3re").click(function(){
  $(".link").addClass("hide");
  $(".re").removeClass("hide");
})
$(".reex").click(function(){
  $(".link").addClass("hide");
  $(".ex").removeClass("hide");
})
$(".exre").click(function(){
  $(".link").addClass("hide");
  $(".re").removeClass("hide");
})

// cursor changing
$("h1").mouseover(function(){
	$("h1").css("cursor","Pointer");
});
$(".type").mouseover(function(){
	$(".type").css("cursor","Pointer");
});
$(".bar").mouseover(function(){
	$(".bar").css("cursor","Pointer");
});
$(".tag1").mouseover(function(){
	$(".tag1").css("cursor","Pointer");
});
$(".tag2").mouseover(function(){
	$(".tag2").css("cursor","Pointer");
});
