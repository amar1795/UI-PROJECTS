let nav = document.querySelector('#main #center');
let menuoptions = document.querySelectorAll('.option h4');
let border_bottom = document.querySelector('#main #nav-bottom');
let isAnimating = false;

nav.addEventListener('mouseenter', function() {
    // Kill any ongoing animation to prevent overlap
    if (!isAnimating) {
        isAnimating = true;
        gsap.killTweensOf([border_bottom, menuoptions, "#center .option h4 span"]);

        let tl = gsap.timeline({
            onComplete: () => {
                isAnimating = false;  // Animation is done, reset the flag
            }
        });

        tl.to(border_bottom, {
            height: "20vh",
            duration: 0.3,
        });
        
        tl.to(menuoptions, {
            display: 'block',
            duration: 0.1,
        });
        
        tl.from("#center .option h4 span", {
            y: 40,
            stagger: {
                amount: 0.5,
            },
            clearProps: "all"  // Clears properties after animation completes
        });
    }
});

nav.addEventListener('mouseleave', function() {
   // Kill any ongoing animation to prevent overlap
  
        isAnimating = true;
        gsap.killTweensOf([border_bottom, menuoptions, "#center .option h4 span"]);

        let gl = gsap.timeline({
            onComplete: () => {
                isAnimating = false;  // Animation is done, reset the flag
            }
        });

        gl.to("#center .option h4 span", {
            y: 40,
            stagger: {
                amount: 0.5,
            },
        });

        gl.to(menuoptions, {
            display: 'none',
            duration: 0.1,
        });

        gl.to(border_bottom, {
            height: "0vh",
            duration: 0.1,
            onComplete: function() {
                // Reset text spans to initial position
                gsap.set("#center .option h4 span", { y: 0 });
            }
        });
    
});
