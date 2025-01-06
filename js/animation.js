gsap.registerPlugin(ScrollTrigger); 

gsap.from('#hero', {
    y: -400,
    duration: 2,
    opacity: 0,
    // ease: 'bounce'
})

gsap.from('#aboutIcon',{
    opacity:0,
    x: -200,
    scrollTrigger:{
        // markers: true,
        trigger: '#aboutMe',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 3,
    }
})

gsap.from('#aboutText',{
    opacity:0,
    x: 300,
    scrollTrigger:{
        // markers: true,
        trigger: '#aboutMe',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 3,
    }
})