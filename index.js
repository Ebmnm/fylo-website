gsap.registerPlugin(ScrollTrigger)

gsap.from(`.top`, {duration: 1, y: `-50%`, opacity: 0, 
ease: Power3.easeOut})

gsap.from(`nav`, {duration:1, opacity: 0})

gsap.from(`.section-double`, { scrollTrigger: ".double-section",
 x:-200, duration:2, opacity:.3, stagger: .3})

 gsap.from(`.input-card`, {
     y: 200, duration:1.5, opacity:.2, scrollTrigger:`.input-card`
 })