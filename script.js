// section animation
let isShowNewsSlider = false;
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
            if(entery.target.getAttribute('id')==='news')
                isShowNewsSlider = true;
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

class slider{
    strip;
    slide;
    amountOfPerTranslate;
    amountOfTranslated;
    amountOfMaxTranslate;
    nextBtn;
    prevBtn;

    constructor(stripClass,slideClass){
        this.strip = document.querySelector(`.${stripClass}`);
        this.slide = document.querySelectorAll(`.${slideClass}`);
        this.amountOfPerTranslate = this.strip.firstElementChild.getBoundingClientRect().width;
        this.amountOfTranslated = 0;
        this.prevBtn = document.querySelector('.prevBtn');
        this.nextBtn = document.querySelector('.nextBtn');
        // add event to buttun
        this.prevBtn.addEventListener('click',this.goPrev.bind(this));
        this.nextBtn.addEventListener('click',this.goNext.bind(this));
        // add evente to keybord
        document.addEventListener('keydown',this.goPrevWithKey.bind(this));
        document.addEventListener('keydown',this.goNextWithKey.bind(this));
    }

    goNextWithKey(e){
        if(isShowNewsSlider && e.key === 'ArrowLeft')
            this.goNext();
    }

    goNext(){
        // calc every call becuse perhaps change width of screen
        this.amountOfMaxTranslate = (this.slide.length * this.amountOfPerTranslate) - this.strip.getBoundingClientRect().width;
        if(this.amountOfTranslated <= this.amountOfMaxTranslate )
        {
            this.amountOfTranslated+=this.amountOfPerTranslate;
            this.move();
        }
    }

    goPrevWithKey(e){
        if(isShowNewsSlider && e.key === 'ArrowRight')
            this.goPrev();
    }

    goPrev(){
        if(this.amountOfTranslated >= this.amountOfPerTranslate)
        {
            this.amountOfTranslated-=this.amountOfPerTranslate;
            this.move();
        }
    }

    move(){
        this.slide.forEach(s => {
            s.style.transform = `translateX(${this.amountOfTranslated}px)`;
        });
    }
}

const newsSlider = new slider('slides','slide');