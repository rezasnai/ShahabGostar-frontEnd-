// section animation
class sectionAnimation{
    sections;
    
    constructor(sectionClass) {
        this.sections = document.querySelectorAll(`.${sectionClass}`);
        this.addObserver();
    }

    showSection(enteries,observer){
        const entery = enteries[0];
        if(entery.isIntersecting){
            entery.target.classList.add('show');
            observer.unobserve(entery.target);
        }
    }

    addObserver(){
        const sectionObserver = new IntersectionObserver(this.showSection,{
            root:null,
            threshold : 0,
        });
        this.sections.forEach(sec => {
            sectionObserver.observe(sec);
        });
    }
}

const HomeSectionAnimation = new sectionAnimation('section');


// slider

// class slider{
//     curSlide = 0;
//     slides;
//     nextBtn;
//     prevBtn;
//     countSlide;
  
//     constructor(){
//       this.slides = document.querySelectorAll('.slide');
//     //   this.slides.forEach((slide,index) =>
//     //    slide.style.transform = `translateX(${index * 100}%)` 
//     //    );
//       this.countSlide = this.slides.length - 1;
//       this.prevBtn = document.querySelector('.prevBtn');
//       this.nextBtn = document.querySelector('.nextBtn');
//       this.nextBtn.addEventListener('click',this.nextSlide.bind(this));
//       this.prevBtn.addEventListener('click',this.prevSlide.bind(this));
//     }
  
//     nextSlide(){
//       if(this.curSlide < this.countSlide)
//       {
//         this.curSlide++;
//         this.move();
//       }else{
//         this.curSlide = 0;
//         this.move();
//       }
//     }
  
//     prevSlide(){
//        if(this.curSlide > 0)
//       {
//         this.curSlide--;
//         this.move();
//       }else{
//         this.curSlide = this.countSlide;
//         this.move();
//       }
//     }
  
//     move(){
//        this.slides.forEach((slide,index) => {
//           slide.style.transform = `translateX(${(index - this.curSlide) * 20}%)`;
//         })
//     }
  
//   };

//   const newsSlider = new slider();