function locomotiveScrollTrigger(params) {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
      // follwoing line is not required to work pinning on touch screen
    
      /* pinType: document.querySelector(".smooth-scroll").style.transform
        ? "transform"
        : "fixed"*/
    });
      
  
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    

    
}

locomotiveScrollTrigger();

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
    //    console.log(div.childNodes[5])
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



let rightimg = document.querySelectorAll('.middlebox .right ');
let rightvideo=document.querySelector('.middlebox .right video');

rightimg.forEach((r)=>{
    r.addEventListener('mouseenter',()=>{
        r.childNodes[3].play();
        r.childNodes[3].style.opacity=1;
        
      
    })

    r.addEventListener('mouseleave',()=>{
        r.childNodes[3].style.opacity=0;
        r.childNodes[3].load();
        
       
    })
})


let bottomVideo=document.querySelectorAll('.first .bottom');

bottomVideo.forEach((b)=>{
    b.addEventListener('mouseenter',()=>{

        b.childNodes[3].style.opacity=1;
        b.childNodes[3].style.objectposition="center";   
        b.childNodes[3].style.height="80%";
        b.childNodes[3].play();
    })

    b.addEventListener('mouseleave',()=>{
        b.childNodes[3].style.opacity=0;
        b.childNodes[3].style.height="50%";
        b.childNodes[3].load();

    })

   
})


let page4Right=document.querySelectorAll('#page4 .middlebox .right');

page4Right.forEach((r)=>{

    r.addEventListener('mouseenter',()=>{
    
           gsap.to(r.childNodes[5],{
               opacity:1,
               scale:1,
           })
        })
    
        r.addEventListener('mouseleave',()=>{
            gsap.to(r.childNodes[5],{
                opacity:0,
                scale:0,
            })
        })
    r.addEventListener('mousemove',(dets)=>{
        gsap.to(r.childNodes[5],{
            x:dets.x-r.getBoundingClientRect().x-50,
             y:dets.y-r.getBoundingClientRect().y-50,
         })
   
    })


})

let cardOption=document.querySelectorAll('#page5 .info-1 .heading');
let mainCard=document.querySelectorAll('#page5 .info-1');

cardOption.forEach((e,index)=>{
    e.addEventListener("click",(div)=>{
        // alert("clicked");
        mainCard[index].classList.toggle('expanded');
        
        // e.style.height="10vh";
        // console.log(e.childNodes[3].childNodes[2]);
        if(mainCard[index].classList.contains('expanded')){
           
            // gsap.to(e.childNodes[1].childNodes[2],{
            //     opacity:1,
            //     height:"100%",
            // })
            e.childNodes[3].childNodes[2].style.opacity=1;
            e.childNodes[3].childNodes[0].style.opacity=0;
        }
        else{
            e.childNodes[3].childNodes[2].style.opacity=0;
            e.childNodes[3].childNodes[0].style.opacity=1;
        }
    })

})


gsap.from("#box2 .box-span h4",{
    x:0,  
    scrollTrigger:{
        trigger:"#box2",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:1 ,//scrub true means that the animation will be in sync with the scroll but if scrub is a number then there will be smoothening effect in the animation ranging from 0 to 1
        
    }
})

gsap.from("#box3 .box-span h4",{
    x:0,
    scrollTrigger:{
        trigger:"#box2",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:1,
    }
})

gsap.from("#box4 .box-span h4",{
    x:0,
    scrollTrigger:{
        trigger:"#box2",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:1,
    }
})

gsap.from("#box5 .box-span h4",{
    x:0,

    scrollTrigger:{
        trigger:"#box2",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:1,
    }
})

