// Mobile navigation bar
const mobileNav = document.querySelector('.mnav');
const mNavDiv = document.querySelector('.mnav__div');
const mobileNavIcon = document.querySelector('.mnav__icon');


const openNav = 'top-0';
const closewNav = '-top-[330px]';
const closeIcon ='ri-close-line';
const menuIcon = 'ri-menu-line';



// Toggle Mobile nav
mNavDiv.addEventListener('click', ()=>{
  if(mobileNav.classList.contains(closewNav)){
    mobileNav.classList.toggle(openNav);

    mobileNavIcon.classList.toggle(closeIcon);
    mobileNavIcon.classList.toggle(menuIcon);
  }
});

// service contant  part
const infoDivs = document.querySelectorAll('.info-div');

infoDivs.forEach(function (infoDiv , index) {
  infoDiv.addEventListener('click', function () {
    // Reset all info-shp background colors
    const allInfoShps = document.querySelectorAll('.info-shp');
    allInfoShps.forEach(function (infoShp) {
      infoShp.classList.remove('bg-[#FE330A]');
      infoShp.classList.add('bg-[#504A45]');
    });

    // Change the background color of the clicked info-shp
    const infoShpDiv = infoDiv.querySelector('.info-shp');
    infoShpDiv.classList.remove('bg-[#504A45]');
    infoShpDiv.classList.add('bg-[#FE330A]');

    // Reset all info-hdl text colors
    const allInfoHdl = document.querySelectorAll('.info-hdl');
    allInfoHdl.forEach(function(infoHdl){
      infoHdl.classList.remove('text-white');
      infoHdl.classList.add('text-[#504A45]');
    });

    // Change the background color of the clicked info-hdl
    const infoHdlText = infoDiv.querySelector(".info-hdl");
    infoHdlText.classList.remove('text-[#504A45]');
    infoHdlText.classList.add('text-white');

    toggleParagraph(index);
    

  });
});

function toggleParagraph(index) {
  // Hide all paragraphs
  const paragraphs = document.querySelectorAll('.service-contant-paragrap');
  paragraphs.forEach(function(para) {
      para.classList.add('hidden');
  });

  // Show the clicked paragraph
  const clickedPara = document.getElementById(`para-${index}`);
  clickedPara.classList.remove('hidden');


  // hide all images
  const serviceImages = document.querySelectorAll('.service-contant-imgs');
          serviceImages.forEach(function(img){
            img.classList.add('hidden');
          });

  // show the clicked paragrap
  const clickServiceImage= document.getElementById(`img-${index}`);
     clickServiceImage.classList.remove('hidden');
};

// SWiper div uesing swiper libary and create keyboard command
function swiperdiv(){
  const swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
    });

    document.addEventListener("keydown", function(event){
      const swiperWithKey = document.querySelector('.mySwiper').swiper;
        if(event.key === "ArrowLeft"){
          swiperWithKey.slidePrev();
        }else if(event.key === "ArrowRight"){
          swiperWithKey.slideNext();
        }
    });
};

swiperdiv();
