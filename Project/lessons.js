
/*
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = carouselImages[2].clientWidth;

carouselSlide.style.transform= 'translateX('+(-size * counter) + 'px)';
*/

let prices_counter = 0
const pricesinsert = () => {
    if (prices_counter % 2 == 0){
        document.querySelector("#prices-content").innerHTML = "For private lessons in the U.S. I charge $40 an hour including equipment and court reservations.";
    }
    else {
        document.querySelector("#prices-content").innerHTML = " "
    }
    prices_counter +=1
 }; 

document.querySelector("#prices").onclick = pricesinsert;

let locations_counter = 0
const locationsinsert = () => {
    if (locations_counter % 2 == 0){
        document.querySelector("#locations-content").innerHTML = "I am currently in Evanston and will therefore be able for a lessons in the Evanston area." + "<br>" + "I will be back to in Norway in mid-June and will then be able to give lessons in the Oslo area";
    }
    else {
        document.querySelector("#locations-content").innerHTML = " "
    }
    locations_counter +=1
 }; 

 document.querySelector("#locations").onclick = locationsinsert;

let contact_counter = 0
const contactinsert = () => {
    if (contact_counter % 2 == 0){
        document.querySelector("#contact-content").innerHTML = "Currently I can be reached on email: johannesabrahamsen2021@u.northwestern.edu or +1 (847)644-2859 if you have any questions or concerns.";
    }
    else {
        document.querySelector("#contact-content").innerHTML = " "
    }
    contact_counter +=1
 }; 

document.querySelector("#contact").onclick = contactinsert;

