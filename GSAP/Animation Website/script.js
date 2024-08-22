let tl=gsap.timeline();

tl.from("nav .navleft ,nav h1",{
    duration: 0.4,
    y: -100, 
    opacity: 0,
    stagger: 0.1,
    ease: "bounce.out",
})

// gsap.from("nav .navleft ", { 
//     duration: 0.9, 
//     y: -100, 
//     opacity: 0, 
//     // ease: "ease-in-out",
//     // stagger: 0.2,
// });

// gsap.from("nav h1", { 
//     duration: 0.2, 
//     y: -100, 
//     opacity: 0, 
//     // ease: "ease-in-out",
//     stagger: 0.2,
// });

gsap.from(".left h1,.left p,.left button", {
    duration: 0.9,
    x: -500,
    opacity: 0,
    ease: "elastic.out(1,0.3)",
        stagger: 0.2,
});

gsap.from(".section1 .right", {
    duration: 0.9,
    x: 500,
    opacity: 0,
    ease: "elastic.out(1,0.3)",    // stagger: 0.2,
});


    gsap.from(".section2 .Companies img", 
    {
    duration: 0.7,
    y: -200,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section2 .Companies img",
        scroller:"body",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 0.5,
        // markers: true,
    }
    })



 let l2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2 .bottom",
        scroller:"body",
        start: "top 70%",
        end: "bottom 90%",
        scrub: 0.2,
        // markers: true,
    }

 });

 l2.from(".Card.one", {
    duration: 0.7,
    x: -200,
    stagger: 0.2,
    opacity: 0,
   
},"one")
 
 l2.from(".Card.two", {
    duration: 0.7,
    x: 200,
    stagger: 0.2,
    opacity: 0,
   
},"one")

l2.from(".Card.three", {
    duration: 0.7,
    x: -200,
    stagger: 0.2,
    opacity: 0,
   
},"two")

l2.from(".Card.four", {
    duration: 0.7,
    x: 200,
    stagger: 0.2,
    opacity: 0,
   
},"two")


