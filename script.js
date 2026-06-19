```javascript
// =========================
// ANIMATED COUNTERS
// =========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if(count < target){

                count += increment;

                counter.innerText =
                Math.ceil(count);

                setTimeout(updateCounter, 20);

            }else{

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

startCounter();


// =========================
// FADE IN ON SCROLL
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

const sections =
document.querySelectorAll("section");

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================
// ACTIVE NAV LINKS
// =========================

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 200;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
        link.getAttribute("href")
        === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


// =========================
// HERO BUTTON EFFECT
// =========================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform =
        "translateY(-5px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform =
        "translateY(0px)";

    });

});


// =========================
// GALLERY IMAGE ANIMATION
// =========================

const galleryImages =
document.querySelectorAll(".gallery img");

galleryImages.forEach(image=>{

    image.addEventListener("mouseover",()=>{

        image.style.transform =
        "scale(1.05)";

    });

    image.addEventListener("mouseout",()=>{

        image.style.transform =
        "scale(1)";

    });

});


// =========================
// LOGO ANIMATION
// =========================

const heroLogo =
document.querySelector(".hero-logo");

setInterval(()=>{

    heroLogo.style.transform =
    "translateY(-10px)";

    setTimeout(()=>{

        heroLogo.style.transform =
        "translateY(0px)";

    },1000);

},2000);


// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display =
        "block";

    }else{

        topBtn.style.display =
        "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
"Welcome to Chivans Slide and Learn Academy"
);
```
