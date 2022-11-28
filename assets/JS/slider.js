//Globale variabler
//DOM elementer
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")

let slideIndex = 1

//Initial function call on pageload
showSlides(slideIndex)

// window.setInterval(function(){
//     showSlides(slideIndex += 1)
// }, 3000)


//Functions

//click handler for prev & next
function plusSlides(numX){
    showSlides(slideIndex += numX)
}

//click handler for dots
function currentSlide(numY){
    showSlides(slideIndex = numY)
}

//Main function

function showSlides(numZ){
    if (numZ > slides.length){
        slideIndex = 1
    }
    if (numZ < 1){
        slideIndex = slides.length
    }

    slides.forEach(function(element){
        element.style.display = "none"
    })

    dots.forEach(function(element){
        element.classList.remove("active")
    })

    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].classList.add("active")
}