// ===============================
// Work Finder Africa
// app.js
// ===============================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Work Finder Africa Loaded Successfully!");
});

// Search Form
const searchForm = document.querySelector(".search-box form");

if (searchForm) {

    searchForm.addEventListener("submit", function(e){

        e.preventDefault();

        const keyword = this.querySelector("input").value;

        const category = this.querySelectorAll("select")[0].value;

        const location = this.querySelectorAll("select")[1].value;

        alert(
`Searching Jobs

Keyword: ${keyword}

Category: ${category}

Location: ${location}

This feature will connect to the jobs page later.`
        );

    });

}

// Animate Statistics

const stats = document.querySelectorAll(".stat-card h2");

stats.forEach(stat => {

    const finalNumber = parseInt(stat.innerText.replace(/\D/g,""));

    let start = 0;

    const speed = finalNumber / 100;

    function counter(){

        start += speed;

        if(start < finalNumber){

            stat.innerText = Math.floor(start).toLocaleString()+"+";

            requestAnimationFrame(counter);

        }else{

            stat.innerText = finalNumber.toLocaleString()+"+";

        }

    }

    counter();

});

// Job Card Hover Effect

const jobs = document.querySelectorAll(".job-card");

jobs.forEach(job=>{

    job.addEventListener("mouseenter",()=>{

        job.style.transform="translateY(-10px)";

    });

    job.addEventListener("mouseleave",()=>{

        job.style.transform="translateY(0px)";

    });

});

// Smooth Scroll

document.querySelectorAll("a").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const href=this.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

console.log("JavaScript Loaded");
