const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});
/*================ PROJECT FILTER ================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter = button.dataset.filter;

projectCards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else if(card.classList.contains(filter)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

});
/*================ COUNTER =================*/

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if(count < target){

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounter();

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".stats"));
// ================= SCROLL REVEAL =================


const reveals =
document.querySelectorAll(".reveal");



window.addEventListener(
"scroll",
()=>{


reveals.forEach(
(element)=>{


let windowHeight =
window.innerHeight;


let top =
element.getBoundingClientRect()
.top;



if(top < windowHeight -100){

element.classList.add("active");

}



});


});





// ================= BACK TO TOP =================


const topBtn =
document.getElementById("topBtn");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}


});





topBtn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};
