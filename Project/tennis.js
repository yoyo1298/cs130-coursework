let background_counter = 0
const backgroundinsert = () => {
    if (background_counter % 2 == 0){
        document.querySelector("#background-content").innerHTML = "I started playing tennis for the first time when I was six years old, and at the age of twelve I was practicing every day. Throughout my career I have ranked among some of the players in Norway in my age class, and during high-school I also became ranked as some of the best players on the senior level. I have won national championships and was one of two male players to represent Norway in the U18 European Championships in 2016. After high-school, I decided study at Northwestern University and play for the Varsity Men’s Tennis team, where retired at the end of my sophomore from tennis due to an injury. I have developed a lot of knowledge about tennis throughout the years and I can’t wait to share my experience with you.";
    }
    else {
        document.querySelector("#background-content").innerHTML = " "
    }
    background_counter +=1
 }; 

 document.querySelector("#background").onclick = backgroundinsert;

 let achievements_counter = 0
const achievementsinsert = () => {
    if (achievements_counter % 2 == 0){
        document.querySelector("#achievements-content").innerHTML = "Ranked No. 3 in Norway" + "<br>" + "Ranked No. 2 in Norway U18" + "<br>" + "Participated in the European Championships" + "<br>" + "Norwegian National Doubles Champion" + "<br>" + "Ranked 400 in the world U18" + "<br>" + "Runner-up SALK Open ITF" 
    }
    else {
        document.querySelector("#achievements-content").innerHTML = " "
    }
    achievements_counter +=1
 }; 

document.querySelector("#achievements").onclick = achievementsinsert;

/*code from youtube video https://www.youtube.com/watch?v=KcdBOoK3Pfw&t=516s below */
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = carouselImages[2].clientWidth;

carouselSlide.style.transform= 'translateX('+(-size * counter) + 'px)';
/* end of code from yotube video*/