function innit(params) {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
innit()



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".heading",
        scroller: ".main",
        start: "top 30%",
        top: "top 0",
        scrub: 3,


    }
}
)
tl.to(".heading", {
    x: -80,
}, "move")
tl.to(".head", {
    x: 80,
}, "move")
tl.to(".page1 video", {
    width: "90%",

}, "move")
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".heading",
        scroller: ".main",
        start: "top -115%",
        top: "top -120%",
        scrub: 3,


    }
}
)
tl2.to(".main", {
    backgroundColor: "#fff",
})

let dot = document.querySelector(".cursor");
let main = document.querySelector(".main");
let currentX = 0;
let currentY = 0;
function updateDotPosition(x, y) {
    const dx = x - currentX;
    const dy = y - currentY;
    currentX += dx * 0.5;
    currentY += dy * 0.5;
    dot.style.left = currentX +20+ "px";
    dot.style.top = currentY +20+"px";
    requestAnimationFrame(updateDotPosition.bind(null, x, y));
}
document.addEventListener("mousemove", function(dets) {
        updateDotPosition(dets.clientX, dets.clientY);
});
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".heading",
        scroller: ".main",
        start: "top -280%",
        top: "top -300%",
        scrub: 3,


    }
}
)
tl3.to(".main", {
    backgroundColor: "#0F0D0D",
})

let boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
       let att = elem.getAttribute("data-img")
       dot.style.width="300px"
       dot.style.height="250px"
       dot.style.borderRadius="0"
       dot.style.backgroundImage=`url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor="transparent"
        dot.style.width="20px"
        dot.style.height="20px"
        dot.style.borderRadius="50%"
        dot.style.backgroundImage=`(none)`

    })
    
})

  