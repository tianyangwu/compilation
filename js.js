// navigation bar
$(".navigation").addClass("hide");
$(".nav").click(function(){
  $(".navigation").toggleClass("hide");
  $(".navigation").toggleClass("appear");
  $(".name").toggleClass("hide");
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

// click tianyang to go to the homepage
$(".name").click(function(){
  $(".link").addClass("hide");
  $(".homepage").removeClass("hide");
  $(".text").addClass("hide");
})

// homepage hover effect
$(".rec1").mouseover(function(){
  $(".recab").removeClass("hide");
  $(".recab").addClass("appear");
})
$(".rec1").mouseleave(function(){
  $(".recab").addClass("hide");
  $(".recab").removeClass("appear");
})

$(".rec2").mouseover(function(){
  $(".recp1").removeClass("hide");
  $(".recp1").addClass("appear");
})
$(".rec2").mouseleave(function(){
  $(".recp1").addClass("hide");
  $(".recp1").removeClass("appear");
})

$(".rec3").mouseover(function(){
  $(".recp2").removeClass("hide");
  $(".recp2").addClass("appear");
})
$(".rec3").mouseleave(function(){
  $(".recp2").addClass("hide");
  $(".recp2").removeClass("appear");
})

$(".rec4").mouseover(function(){
  $(".recp3").removeClass("hide");
  $(".recp3").addClass("appear");
})
$(".rec4").mouseleave(function(){
  $(".recp3").addClass("hide");
  $(".recp3").removeClass("appear");
})

$(".rec5").mouseover(function(){
  $(".recex").removeClass("hide");
  $(".recex").addClass("appear");
})
$(".rec5").mouseleave(function(){
  $(".recex").addClass("hide");
  $(".recex").removeClass("appear");
})

$(".rec6").mouseover(function(){
  $(".recre").removeClass("hide");
  $(".recre").addClass("appear");
})
$(".rec6").mouseleave(function(){
  $(".recre").addClass("hide");
  $(".recre").removeClass("appear");
})

// // aboutme homepage
// $(".aboutmetext2").addClass("hide");
// $('.aboutmetext').on('mousewheel', function(event) {
//     console.log(event.deltaX, event.deltaY, event.deltaFactor);
// });
// $('.aboutmetext').mousewheel(function(event) {
//     console.log(event.deltaX, event.deltaY, event.deltaFactor);
// });

// first paragraph scrolldown
$(".aboutmetext").mousewheel(function(event) {
  if (event.deltaY == -1) {
   $(".aboutmetext").animate({
    opacity: 0,
    top: "20vh",
  }, 1500, function(){
    $(".aboutmetext").addClass("opacity");
    $(".aboutmetext").toggleClass("pointerno");
    });
   $(".aboutmetext2").animate({
     opacity: 1,
     top: "45vh",
   }, 1500, function(){
     $(".aboutmetext2").toggleClass("pointerno");
     });
};
});

// second paragraph scrollup
$(".aboutmetext2").mousewheel(function(event) {
  if (event.deltaY == 1) {
   $(".aboutmetext2").animate({
    opacity: 0,
    top: "70vh",
  }, 1500, function(){
    $(".aboutmetext2").addClass("opacity");
    $(".aboutmetext2").toggleClass("pointerno");
    });
   $(".aboutmetext").animate({
     opacity: 1,
     top: "45vh",
   }, 1500, function(){
     $(".aboutmetext").toggleClass("pointerno");
     });
};
});

// second paragraph scrolldown
$(".aboutmetext2").mousewheel(function(event) {
  if (event.deltaY == -1) {
   $(".aboutmetext2").animate({
    opacity: 0,
    top: "20vh",
  }, 1500, function(){
    $(".aboutmetext2").addClass("opacity");
    $(".aboutmetext2").toggleClass("pointerno");
    });
   $(".aboutmetext3").animate({
     opacity: 1,
     top: "45vh",
   }, 1500, function(){
     $(".aboutmetext3").toggleClass("pointerno");
     });
};
});

// third paragraph scrollup
$(".aboutmetext3").mousewheel(function(event) {
  if (event.deltaY == 1) {
   $(".aboutmetext3").animate({
    opacity: 0,
    top: "70vh",
  }, 1500, function(){
    $(".aboutmetext3").addClass("opacity");
    $(".aboutmetext3").toggleClass("pointerno");
    });
   $(".aboutmetext2").animate({
     opacity: 1,
     top: "45vh",
   }, 1500, function(){
     $(".aboutmetext2").toggleClass("pointerno");
     });
};
});

// third paragraph scrolldown
$(".aboutmetext3").mousewheel(function(event) {
  if (event.deltaY == -1) {
   $(".aboutmetext3").animate({
    opacity: 0,
    top: "20vh",
  }, 1500, function(){
    $(".aboutmetext3").addClass("opacity");
    $(".aboutmetext3").toggleClass("pointerno");
    });
   $(".aboutmetext4").animate({
     opacity: 1,
     top: "45vh",
   }, 1500, function(){
     $(".aboutmetext4").toggleClass("pointerno");
     });
};
});

// fourth paragraph scrollup
$(".aboutmetext4").mousewheel(function(event) {
  if (event.deltaY == 1) {
   $(".aboutmetext4").animate({
    opacity: 0,
    top: "70vh",
  }, 1500, function(){
    $(".aboutmetext4").addClass("opacity");
    $(".aboutmetext4").toggleClass("pointerno");
    });
   $(".aboutmetext3").animate({
     opacity: 1,
     top: "45vh",
   }, 1500, function(){
     $(".aboutmetext3").toggleClass("pointerno");
     });
};
});

// iframe
$(".link").addClass("hide");
$(".homepage").removeClass("hide");
$(".text").addClass("hide");
$(".p1").click(function(){
  $(".link").addClass("hide");
  $(".pro1").removeClass("hide");
})
$(".ab").click(function(){
  $(".link").addClass("hide");
  $(".about").removeClass("hide");
})
$(".p1ab").click(function(){
  $(".link").addClass("hide");
  $(".about").removeClass("hide");
})
$(".abp1").click(function(){
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
$('h1').click(function() {
    location.reload();
});
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
$(".n5").click(function(){
  $(".link").addClass("hide");
  $(".pro").removeClass("hide");
})
$(".repro").click(function(){
  $(".link").addClass("hide");
  $(".pro").removeClass("hide");
})
$(".prore").click(function(){
  $(".link").addClass("hide");
  $(".re").removeClass("hide");
})

// cursor changing
$(".home").mouseover(function(){
	$(".home").css("cursor","Pointer");
});
$(".name").mouseover(function(){
	$(".name").css("cursor","Pointer");
});
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
