const sliderContainer=document.querySelector('.slider-container');
const slideRight=document.querySelector('.right-slide');
const slideLeft=document.querySelector('.left-slide');
const upButton=document.querySelector('.up-buttons');
const downButton=document.querySelector('.down-buttons');
const slidesLength=slideRight.querySelectorAll('div').length;
console.log(slidesLength);
console.log(sliderContainer);
// Selects all the div in inside slide container to count number of images;

let activeSlideIndex=0;
slideLeft.style.top=`-${(slidesLength-1)*100}vh`;
upButton.addEventListener('click',()=>changeSlide('up'));
downButton.addEventListener('click',()=>changeSlide('down'));
const changeSlide = (direction)=>{
    const sliderHeight=sliderContainer.clientHeight;
    console.log(sliderHeight);
    if(direction==='up'){
        activeSlideIndex++;
        if(activeSlideIndex==slidesLength){
            activeSlideIndex=0;
        }
    }
    else if(direction==='down'){
        activeSlideIndex--;
        if(activeSlideIndex==-1){
            activeSlideIndex=slidesLength-1;
        }
    }
    slideLeft.style.transform=`translateY(${activeSlideIndex*sliderHeight}px)`;
    slideRight.style.transform=`translateY(-${activeSlideIndex*sliderHeight}px)`;

}