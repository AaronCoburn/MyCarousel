/* Select the Carousel-Image and Circle from document */
const CarouselImage = document.querySelectorAll('.Carousel-Image'),
	  Circle = document.querySelectorAll('.Circle');
/* Sel ev*/
document.addEventListener('keydown', keyLeft, false);
document.addEventListener('keydown', keyRight, false);
// document.addEventListener('keyup', , false); 

var rightKey = false;
var leftKey = false;

/* create a counter that starts from 1 */
let counter = 1;
/* assign counter to function */
CarouselImageFunction(counter);

/* create an interval for next slide automation */
let timer = setInterval(NextSlideAutomation, 5000);
function NextSlideAutomation() {
	counter += 1;
	CarouselImageFunction(counter);
}

/* When buttons clicked n=1 or -1, the counters are changed and the timer refreshed */
function ImageChanger(n) {
	counter += n;
	CarouselImageFunction(counter);
	resetTimer();
}
/* When Circle clicked n = respective image number, then same as above ... */
function GoToImage(n) {
	counter = n;
	CarouselImageFunction(counter);
	resetTimer();
}
/* Arrow Keys*/
function keyLeft(Event){
	if (Event.keyCode == "37"){
		leftKey = true
			counter--;
			CarouselImageFunction(counter);
			resetTimer()

		}
	}

function keyRight(Event){
	if (Event.keyCode == "39"){
		leftKey = true
			counter++;
			CarouselImageFunction(counter);
			resetTimer()

		}
	}
/* resets the timer keeping automation in time */
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(NextSlideAutomation, 5000);
}

function CarouselImageFunction(n) {
	
	let i;
	for(i = 0; i < CarouselImage.length; i++){
		CarouselImage[i].style.display = "none";
	}
	for(i = 0; i < Circle.length; i++) {
		Circle[i].className = Circle[i].className.replace(' activated', '');
	}
	if(n > CarouselImage.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = CarouselImage.length;
	   }
	   CarouselImage[counter - 1].style.display = "block";
	Circle[counter - 1].className += " activated";
	}
