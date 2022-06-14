var stillTime = 3000;

var carousel = document.querySelector(".carousel");
var images__list = document.querySelector(".img__wrapper");
var images__count = document.querySelectorAll(".img__wrapper img").length;

var action = document.createElement("div");
action.classList.add("action");
images__list.appendChild(action);

var left__arrow = document.createElement("div");
left__arrow.classList.add("left__arrow");
action.appendChild(left__arrow);

var right__arrow = document.createElement("div");
right__arrow.classList.add("right__arrow");
action.appendChild(right__arrow);

var slides = document.querySelectorAll("div.img__wrapper img");
console.log(slides);

// give a classname for each of the same images
for (let i = 0; i < slides.length; i++) {
  slides[i].className = "slides";
}

var dots__wrapper = document.createElement("div");
dots__wrapper.classList.add("dot__circle");

for (var i = 0; i < slides.length; i++) {
  var dot = document.createElement("div");
  dot.classList.add("dot");
  dot.setAttribute("idx", i + 1);
  dot.addEventListener("click", function (i) {
    slideShow(i.target.getAttribute("idx"));
  });
  dots__wrapper.appendChild(dot);
}
action.appendChild(dots__wrapper);

let flag = 0;

left__arrow.addEventListener("click", function () {
  controller(-1);
});
right__arrow.addEventListener("click", function () {
  controller(1);
});

// controls the flag, if right is clicked increase it else decrease the flag index by 1
function controller(x) {
  flag = flag + x;
  slideShow(flag);
}

// slideShow(flag);
function slideShow(num) {
  if (num > slides.length - 1) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  // display all the blocks to none
  for (let y of slides) {
    y.style.display = "none";
  }

  //show only block image whose index is passed
  slides[num].style.display = "block";

  var dots = document.querySelectorAll(".dot");
  for (i = 0; i < slides.length; i++) {
    if (i == num - 1) {
      dots[i].classList.add("focus");
    } else {
      dots[i].classList.remove("focus");
    }
  }
}
// var sliderContainerWidth = images__list.offsetWidth;

// // Set slider item width
// for (let y = 0; y < slides.length; y++) {
//     slides[y].style.width = sliderContainerWidth + "px";
//     slides[y].style.left = y * sliderContainerWidth + "px";
// }

// // Slider switch action
// var activeSlide = 1;
// function nextSlide(n) {
//     activeSlide++;
//     if (activeSlide > slides.length) {
//         activeSlide = 1;
//     }
//     let newLeftPixel = (activeSlide - 1) * sliderContainerWidth;
//     images__list.style.left = "-" + newLeftPixel + "px";
// }
setInterval(function () {
  slideShow(flag);
  flag += 1;
}, stillTime);
