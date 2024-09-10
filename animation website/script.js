let tl = gsap.timeline();

tl.to("#yellow ",{
    top: "-100%",
    duration: 0.5,
    delay: 0.5,
    ease:"expo.out" 
})

tl.to("#loader ",{
    top: "-100%",
    duration: 0.5,
    delay: 0.5,
    ease:"expo.out" 
})