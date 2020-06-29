// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// $(document).ready(function() {
//     $(".dropdown-toggle").dropdown();
// });
$('.currency-container').slideToggle();
$(".dollar").click(function(){
    $(".currency-container").slideToggle();
  });



  var owl= $('.owl-carousel');

var carouselOption={
    items:1,
    loop:true,
    margin:10,
    autoplay:false,
    // autoplayTimeout:500,
    nav:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        }
       
    }

}
owl.owlCarousel(carouselOption);
  
