let nav=document.querySelector('#main #center');

let menuoptions=document.querySelectorAll('.option h4');
let border_bottom=document.querySelector('#main #nav-bottom');

nav.addEventListener('mouseenter',function(){

    let tl=gsap.timeline();

    tl.to(border_bottom,{
        height:"20vh",
         duration:0.3,
        //  delay:0.5,
     });
    tl.to(menuoptions,{
        display:'block',
        duration:0.1,
        // delay:0.5,    
    });
    tl.from("#center .option h4 span",{
        // opacity:0,
        y:40,      
            stagger:{
                amount:0.5,
            }
        
        
    })
    
   ;
});


nav.addEventListener('mouseleave',function(){

    let tl=gsap.timeline();
    tl.to("#center .option h4 span",{
        
        y:40,      
            stagger:{
                amount:0.5,
            }
        
        
    })
  
    tl.to(menuoptions,{
        display:'none',
        duration:0.1,
    });
    tl.to(border_bottom,{
        height:"0vh",
         duration:0.3,
        //  delay:0.5,
     });
     
   ;
});