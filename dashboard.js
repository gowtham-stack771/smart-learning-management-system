const themeBtn = document.getElementById("themeToggle");


// Page load aagumbothu saved theme apply

window.onload = function () {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        if(themeBtn){
            themeBtn.innerHTML = "☀️";
        }

    }

};


// Dark mode button click

if(themeBtn){

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML = "☀️";

        localStorage.setItem("theme","dark");

    }

    else{

        themeBtn.innerHTML = "🌙";

        localStorage.setItem("theme","light");

    }


});

}


// Search function

const search = document.getElementById("search");

if(search){

search.addEventListener("input", function () {

    const value = search.value.toLowerCase();

    const courses = document.querySelectorAll(".course");


    courses.forEach(course => {

        if(course.textContent.toLowerCase().includes(value)){

            course.style.display="block";

        }

        else{

            course.style.display="none";

        }

    });

});

}