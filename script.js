alert("This page is being developed by Sk Injamamul Haque, Best view on Desktop mode");

// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

// Swal.fire({
//   html: "Developed by <strong>Sk Injamamul Haque</strong>", 
//   icon: "info",
//   html: `
//     Being develop by <strong>Sk Injamamul Haque</strong>" <br>
//     Best view on Desktop mode
//   `,
//   showCloseButton: true, 
// });



gsap.from(".nav_list .nav_link , .logoimg ,.logoname",{
  y:-120,
  duration:1,
  delay:0.5,
  stagger:0.2
} )

gsap.from(".Heading h2",{
  y:-90,
  duration:2,
  delay:0.5,
  opacity:0
})

gsap.from(".Heading .heading_para",{
  x:1200,
  duration:1.9,
  delay:0.5,
})

gsap.from(".section_container .profile_img",{
 x:30,
 duration:2,
 delay:1, 
 opacity:0,
})

gsap.from(".content_details h2, .about_para, .Readmore",{
  x:50,
  duration:2,
  delay:1, 
  opacity:0,
  stagger:0.5
 })

 gsap.from(".card_container .card",{
  x:700,
  stagger:0.5,
  duration:1.5,
  scrollTrigger:{
    trigger:".card_container .card",
    scroller:"body",
    // markers:true,

  }
 })

 gsap.from(".content_details h3",{
  x:-500,
  stagger:0.5,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".content_details h3",
    scroller:"body",
  }
 })

 gsap.from(".content_box h3",{
  y:-50,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".content_box h3",
    scroller:"body",
  }
 })

 gsap.from(".card1 img",{
  scale:0,
  duration:2,
  scrollTrigger:{
    trigger:".card1 img",
    scroller:"body",
  }
})



