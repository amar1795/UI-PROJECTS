function loading() {
  let tl = gsap.timeline();

  tl.to("#yellow1 ", {
    top: "-100%",
    duration: 0.5,
    delay: 0.5,
    ease: "expo.out",
  });

  // can also do like this
  // tl.to("#loader h1 ",{
  //     color:"white",

  // },"anim")

  tl.to(
    "#loader video ",
    {
      top: "-100%",
      duration: 0.5,
      delay: 0.5,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      color: "black",
      ease: "expo.out",
      delay: 0.5,
    },
    "anim"
  );
  tl.to(
    "#loader ",
    {
     display:"none",
      ease: "expo.out",
     
    }
  );


 tl.to("#nav",{
    display:"block",
    ease: "expo.out",
    // delay: 0.5,
    duration: 0.5,
 })

}
loading();

const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});


document.querySelector("#footer .scroll-Box").addEventListener("click", () => {
  scroll.scrollTo("#page1");
  // alert("You are at the top of the page");
});


let elems=document.querySelectorAll(".elem");
let page2=document.querySelector("#page2");
// let moving= document.querySelector("moving");

elems.forEach((elem)=>{
  elem.addEventListener("mouseenter",()=>{
    const image=elem.getAttribute("data-image");
    page2.style.backgroundImage=`url(${image})`;
  })
})

// let elems = document.querySelectorAll(".elem");
// let page2 = document.querySelector("#page2");
//  let moving= document.querySelectorAll(".moving");
//  let h2 = document.querySelectorAll(".elem h2");
//  let movingInH5 = document.querySelectorAll(".moving .moving-in h5");

// let currentIndex = 0;
// let interval;

// function simulateMouseEnter(elem) {
//   const image = elem.getAttribute("data-image");
//   page2.style.backgroundImage = `url(${image})`;
//   moving[currentIndex].style.transform = "translate(0, -40%) scaleY(1)";
//   h2[currentIndex].style.fontStyle = "italic";
//   movingInH5.forEach(h5 => {
//     h5.style.opacity = "1";
// });

// }

// function startAutoHover() {
//   interval = setInterval(() => {
//     if (currentIndex >= elems.length) {
//       currentIndex = 0; 
//     }
    
//     elems.forEach((elem, idx) => {
//       if (idx !== currentIndex) {
//         moving[idx].style.transform = "translate(0, -40%) scaleY(0)";
//         h2[idx].style.fontStyle = "normal";
//         movingInH5.forEach(h5 => {
//           h5.style.opacity = "0";
//       });
//       }
//     });
    
//     simulateMouseEnter(elems[currentIndex]);
    
//     currentIndex++;
//   }, 1500); 
// }

// function removeHoverClass(elem) {
  
//   page2.style.backgroundImage = `url(${image})`;
//   moving[currentIndex].style.transform = "translate(0, -40%) scaleY(0)";
//   h2[currentIndex].style.fontStyle = "normal";
//   movingInH5.forEach(h5 => {
//     h5.style.opacity = "0";
// });
  
// }

// startAutoHover();

// elems.forEach((elem, index) => {
//   elem.addEventListener("mouseenter", () => {
//     const image=elem.getAttribute("data-image");
//     page2.style.backgroundImage=`url(${image})`;
//     elems.forEach(e => removeHoverClass(e));
    
//     simulateMouseEnter(elem);
//   });
//   clearInterval(interval);

//   elem.addEventListener("mouseleave", () => {
//     removeHoverClass(elem);
    
//     startAutoHover();
//   });
// });

