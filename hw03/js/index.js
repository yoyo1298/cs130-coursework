/**
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

initScreen();

let currentIndex = 0;

const imageElements = document.querySelectorAll('.image');

const showImage = (ev) => {
    const elem = ev.currentTarget;
    document.querySelector(".featured_image").style.backgroundImage = elem.style.backgroundImage;
    currentIndex = Number(elem.dataset.index);
};

for (const elem of imageElements) {
    elem.onclick = showImage;
}

const showNext = (ev) => {
    if (imageElements.length == (currentIndex + 1)){
        currentIndex = 0;
    }
    else{
        currentIndex += 1;
    }
    document.querySelector(".featured_image").style.backgroundImage = imageElements[currentIndex].style.backgroundImage;
};

const showPrev = (ev) => {
    if (currentIndex == 0){
        currentIndex = (imageElements.length - 1)
    }
    else {
        currentIndex -= 1;
    }
    document.querySelector(".featured_image").style.backgroundImage = imageElements[currentIndex].style.backgroundImage;
};

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;
