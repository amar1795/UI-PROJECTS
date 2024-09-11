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
