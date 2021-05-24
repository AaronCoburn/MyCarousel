// Get children Pictures from track and make array
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

const slideImages = document.querySelector('#pic').clientHeight;
// const ImageAdjustmentH = Array.from(slideImages);
// console.log(track);

// Get buttons
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

// Get dots in nav and create an array
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const TrackHeight = track.getBoundingClientRect().height;
// const ImagesH = targetSlide.getBoundingClientRect().height;
// const slideImages = slides[0].getBo undingClientRect();
// const setSlideHeight = slideImages;

// get slides width 
const slideWidth = slides[0].getBoundingClientRect().width;
// const Scalingtrack = slides[0].getBoundingClientRect().cheight;
console.log(TrackHeight);

// const setSlideH = (slide, index) => {
//     slide.style.height = slide.style.width + 'px';
// };
// slides.forEach(setSlideH);

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
} 

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden')
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}


// On Click left move slides left
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

})
// On Click right move slides right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})
// On Click Nav move to that Nav

dotsNav.addEventListener('click', e =>{
    // what dot was clicked on?
    const targetDot = e.target.closest('button');

    console.log('test1');
    if (!targetDot) return;
    console.log('test2')

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    console.log(targetIndex);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})

