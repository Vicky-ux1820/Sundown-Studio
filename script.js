function locoTrigger() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoTrigger();

var tl = gsap.timeline();

function loaderText() {
  var arr = ["Environments", "Experiences", "Contents", " "];
  var loadertext = document.querySelector("#loader h1");
  let index = 0;

  const loop = setInterval(() => {
    if (index === arr.length - 1) {
      clearInterval(loop);
    }
    loadertext.innerHTML = arr[index++];
  }, 900);

  tl.to(loadertext, {
    top: "-20px",
    duration: 1.5,
  });
  tl.to("#loader", {
    top: "-100vh",
    delay: 1,
    duration: 2,
  });
}
loaderText();


function cardFunc(){
  var loadCard=document.querySelector("#page3");
  var card=document.querySelector("#card")
  loadCard.addEventListener('mouseenter',function(){
    card.style.display='block';
    card.style.opacity=1;
  })
  loadCard.addEventListener('mouseleave',function(){
    card.style.display="none";
   }
  )
  var elemental=document.querySelectorAll(".projects_cont");
elemental.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var image=e.getAttribute("data-image")
    card.style.backgroundImage = `url(${image})`
  })
})
}
cardFunc();

function showOnCliCk(){
  var clickhead=document.querySelectorAll(".clickTextHead");
  var imageOnClick=document.querySelector(".page4_right");
  var paraOnClick=document.querySelector(".page4_left p");
  clickhead.forEach(function(x){
    x.addEventListener("click",function(){
      var clickedImage=x.getAttribute("data-image")
      var clickedPara=x.getAttribute("data-para")
      var clickedColor=x.getAttribute("data-color")
      imageOnClick.style.backgroundImage=`url(${clickedImage})`
      paraOnClick.innerHTML=clickedPara;
      x.style.color=clickedColor;
    })
  })
  

}
showOnCliCk();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "4",
  spaceBetween:10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


function menuAnimation() {

  var menu = document.querySelector("#nav h3")
  var full = document.querySelector("#full-scr")
  var navimg = document.querySelector("#nav img")
  var flag = 0
  menu.addEventListener("click", function () {
      if (flag == 0) {
          full.style.top = 0
          navimg.style.opacity = 0
          flag = 1
          menu.innerHTML="❤️"
      } else {
          full.style.top = "-100%"
          navimg.style.opacity = 1
          flag = 0
          menu.innerHTML="Menu"
      }
  })
}
menuAnimation();