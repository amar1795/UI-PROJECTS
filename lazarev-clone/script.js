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


let infodiv=document.querySelectorAll('.info-div');


infodiv.forEach((div)=>{
    div.addEventListener('mouseenter',()=>{
       console.log(div.childNodes[5])
       div.childNodes[5].style.opacity=1;

       gsap.to(div.childNodes[5],{
           opacity:1,
           scale:1,
       })
    })

    div.addEventListener('mouseleave',()=>{
        gsap.to(div.childNodes[5],{
            opacity:0,
            scale:0,
        })
    })

    div.addEventListener('mousemove',(dets)=>{
        gsap.to(div.childNodes[5],{
           x:dets.x-div.getBoundingClientRect().x-50,
            y:dets.y-div.getBoundingClientRect().y-50,
        })
    })
})



let video=document.querySelector('#page3 video');
let playButton=document.querySelector('#page3 #center #playButton');

playButton.addEventListener('click',()=>{
    video.play();
    playButton.style.display='none';

    gsap.to(video,{
        opacity:1,
        transform:"scaleX(1) scaleY(1)",
        // scale:1, //this would also work instead of transform

    })
})

video.addEventListener('click',()=>{
    video.pause();
    playButton.style.display='block';
    
})
