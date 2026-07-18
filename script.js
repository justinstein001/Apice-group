

/*==================================================
PRELOADER
==================================================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

        }, 1200);

    }

});
*/
/*==================================================
STICKY NAVBAR
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==================================================
MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

});

/*==================================================
CLOSE MENU WHEN LINK CLICKED
==================================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});

/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==================================================
SCROLL REVEAL
==================================================*/

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold:0.15

});

revealElements.forEach(element => {

    revealObserver.observe(element);

});
/*==================================================
PROJECT FILTER
==================================================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all" ||
                card.classList.contains(filter)) {

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";

                }, 100);

            } else {

                card.style.opacity = "0";
                card.style.transform = "scale(.8)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 250);

            }

        });

    });

});

/*==================================================
COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = target / 100;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.textContent = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target + "+";

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==================================================
BACK TO TOP BUTTON
==================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/*==================================================
SMOOTH SCROLL FOR LINKS
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==================================================
CONTACT FORM
==================================================*/
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const recipient = "amahorojustin04@gmail.com";

    const subject = encodeURIComponent(
        "Website Inquiry - " + service
    );

    const body = encodeURIComponent(
`Hello APICE GROUP LTD,

You have received a new inquiry.

Name: ${name}

Email: ${email}

Phone: ${phone}

Service: ${service}

Message:

${message}

-------------------------
Sent from APICE GROUP LTD Website`
    );

    // Open Gmail with the message already filled in
    const gmailURL =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    window.open(gmailURL, "_blank");
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("service").value="";
    document.getElementById("message").value="";

});

/*==================================================
LAZY LOAD IMAGES
==================================================*/

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const image = entry.target;

            image.loading = "lazy";

            imageObserver.unobserve(image);

        }

    });

});

images.forEach(image => {

    imageObserver.observe(image);

});

/*==================================================
CURRENT YEAR
==================================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}
/*==================================================
SERVICE MODAL
==================================================*/

const modal = document.getElementById("serviceModal");
const modalContent = document.getElementById("modalContent");
const learnButtons = document.querySelectorAll(".learn-more");
const closeModal = document.querySelector(".close-modal");

const services = {

construction:{

title:"Construction Services",

icon:"fa-building",

image:"image/les.jpg",

description:"APICE GROUP LTD delivers high-quality construction services for residential, commercial and public infrastructure projects. We focus on quality workmanship, safety, sustainability and timely completion.",

gallery:[

"image/les.jpg",

"image/les.jpg",

"image/les.jpg"

],

list:[

"Residential Buildings",

"Commercial Buildings",

"Industrial Projects",

"Road Construction",

"Drainage Systems",

"Renovation Works",

"Interior Finishing",

"Turnkey Construction"

],

benefits:[

"Certified Professional Engineers",

"Modern Construction Equipment",

"Quality Materials",

"On-Time Delivery",

"Strict Safety Standards"

],

process:[

"Consultation",

"Site Assessment",

"Engineering Design",

"Construction",

"Quality Inspection",

"Project Handover"

]

},
design:{

title:"Engineering Design",

icon:"fa-compass-drafting",

image:"image/les.jpg",

description:"Our engineering design team develops innovative, safe and sustainable solutions for residential, commercial and infrastructure projects using modern engineering standards and advanced design software.",

gallery:[

"image/les.jpg",

"image/les.jpg",

"image/les.jpg"

],

list:[

"Architectural Design",

"Structural Engineering",

"Electrical Design",

"Plumbing Design",

"Mechanical Design",

"Bill of Quantities (BOQ)",

"Cost Estimation",

"3D Design & Visualization"

],

benefits:[

"Experienced Design Engineers",

"Modern CAD/BIM Software",

"Accurate Technical Drawings",

"Cost-Effective Solutions",

"Compliance with Engineering Standards"

],

process:[

"Client Consultation",

"Site Survey",

"Concept Design",

"Detailed Engineering",

"Design Review",

"Final Documentation"

]

},

supervision:{

title:"Project Supervision",

icon:"fa-helmet-safety",

image:"image/les.jpg",

description:"We provide professional construction supervision services to ensure projects are completed according to approved designs, engineering standards and contractual requirements.",

gallery:[

"image/les.jpg",

"image/les.jpg",

"image/les.jpg"

],

list:[

"Daily Site Supervision",

"Quality Assurance",

"Material Inspection",

"Safety Monitoring",

"Progress Monitoring",

"Contractor Coordination",

"Technical Reporting",

"Compliance Inspection"

],

benefits:[

"Professional Site Engineers",

"Strict Quality Control",

"Improved Project Efficiency",

"Reduced Construction Risks",

"Timely Project Completion"

],

process:[

"Project Planning",

"Site Inspection",

"Construction Monitoring",

"Quality Verification",

"Progress Reporting",

"Project Completion"

]

},

management:{

title:"Project Management",

icon:"fa-chart-line",

image:"image/les1.jpg",

description:"APICE GROUP LTD manages engineering and construction projects from planning to completion, ensuring quality, cost control and timely delivery.",

gallery:[

"image/les.jpg",

"image/les.jpg",

"image/les.jpg"

],

list:[

"Project Planning",

"Scheduling",

"Budget Management",

"Procurement Management",

"Risk Assessment",

"Resource Coordination",

"Contract Administration",

"Project Delivery"

],

benefits:[

"Efficient Resource Management",

"Budget Control",

"Reduced Project Delays",

"Transparent Reporting",

"Successful Project Delivery"

],

process:[

"Project Initiation",

"Planning",

"Execution",

"Monitoring",

"Quality Control",

"Project Handover"

]

},

consultancy:{

title:"Engineering Consultancy",

icon:"fa-lightbulb",

image:"image/les1.jpg",

description:"Our consultancy services provide professional engineering advice and technical expertise to individuals, businesses and public institutions for successful infrastructure development.",

gallery:[

"image/les.jpg",

"image/les.jpg",

"image/les.jpg"

],

list:[

"Feasibility Studies",

"Technical Advisory",

"Engineering Reports",

"Project Evaluation",

"Site Assessment",

"Construction Permits",

"Investment Consultancy",

"Professional Recommendations"

],

benefits:[

"Experienced Consultants",

"Reliable Technical Advice",

"Practical Engineering Solutions",

"Regulatory Compliance",

"Professional Documentation"

],

process:[

"Consultation",

"Needs Assessment",

"Technical Analysis",

"Recommendations",

"Implementation Support",

"Final Report"

]

},

infrastructure:{

title:"Infrastructure Solutions",

icon:"fa-city",

image:"image/les1.jpg",

description:"We design and develop sustainable infrastructure projects that support economic growth, improve communities and enhance public services throughout Rwanda.",

gallery:[

"image/les.jpg",

"image/les.jpg",

"image/les.jpg"

],

list:[

"Road Construction",

"Bridge Construction",

"Drainage Systems",

"Water Supply Systems",

"Public Infrastructure",

"Urban Development",

"Environmental Engineering",

"Sustainable Infrastructure"

],

benefits:[

"Long-Term Sustainability",

"Modern Engineering Solutions",

"Community Development",

"High Safety Standards",

"Reliable Infrastructure"

],

process:[

"Project Assessment",

"Engineering Design",

"Planning",

"Construction",

"Quality Inspection",

"Maintenance Support"

]

}
};

learnButtons.forEach(button=>{

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        const service = services[button.dataset.service];

        // ===============================
        // Service List
        // ===============================

        let listHTML = "";

        service.list.forEach(item=>{

            listHTML += `
            <li>
                <i class="fa-solid fa-check"></i>
                ${item}
            </li>
            `;

        });

        // ===============================
        // Benefits
        // ===============================

        let benefitHTML = "";

        service.benefits.forEach(item=>{

            benefitHTML += `
            <li>
                <i class="fa-solid fa-star"></i>
                ${item}
            </li>
            `;

        });

        // ===============================
        // Process
        // ===============================

        let processHTML = "";

        service.process.forEach(step=>{

            processHTML += `
            <div class="process-step">
                ${step}
            </div>
            `;

        });

        // ===============================
        // GALLERY CODE
        // ===============================

        let galleryHTML = "";

        service.gallery.forEach(img=>{

            galleryHTML += `
            <div class="gimage">
            <img
                src="${img}"
                class="gallery-image"
                loading="lazy"
                alt="${service.title}">
                </div>
            `;

        });
    

modalContent.innerHTML = `

<img
src="${service.image}"
class="modal-banner"
alt="${service.title}">

<div class="modal-header">

    <i class="fa-solid ${service.icon}"></i>

    <h2>${service.title}</h2>

</div>

<div class="modal-body">

    <p>${service.description}</p>

    <h3>Recent Projects</h3>

    <div class="gallery">

        ${galleryHTML}

    </div>

    <h3>Our Expertise</h3>

    <ul>

        ${listHTML}

    </ul>

    <h3>Why Choose APICE GROUP LTD?</h3>

    <ul class="benefits">

        ${benefitHTML}

    </ul>

    <h3>Our Working Process</h3>

    <div class="process">

        ${processHTML}

    </div>

    

    <div class="modal-buttons">

        <a href="#contact" class="modal-btn">

            <i class="fa-solid fa-paper-plane"></i>

            Request Consultation

        </a>

        <a href="tel:+250786151046"

        class="modal-btn-outline">

            <i class="fa-solid fa-phone"></i>

            Call Now

        </a>

    </div>

    <div class="contact-actions">

        <a href="https://wa.me/250786151046"

        target="_blank"

        class="contact-card">

            <i class="fab fa-whatsapp"></i>

            WhatsApp

        </a>

        <a href="mailto:info@apicegroup.rw"

        class="contact-card">

            <i class="fa-solid fa-envelope"></i>

            Email Us

        </a>

    </div>

</div>

`;

modal.classList.add("show");

});

closeModal.onclick = () => {

    modal.classList.remove("show");

};

window.onclick = (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

};

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.classList.remove("show");

    }

});
});

/*==================================================
CONSOLE MESSAGE
==================================================*/

console.log("%cAPICE GROUP LTD", "color:#003366;font-size:22px;font-weight:bold;");
console.log("%cEngineering • Construction • Consultancy", "color:#f4b400;font-size:14px;");
console.log("%cWebsite developed by SySoft", "color:#555;font-size:13px;");
