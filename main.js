const list = [
  {
    text: "Pierwsza strona",
    img: "images/img1.jpg",
  },
  {
    text: "Druga strona",
    img: "images/img2.jpg",
  },
  {
    text: "Trzecia strona",
    img: "images/img3.jpg",
  },
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

let active = 0;
let time = 3000;

const changeSlider = () => {
  active < list.length - 1 ? active++ : (active = 0);
  image.src = list[active].img;
  h1.textContent = list[active].text;
  changeDots();
};

const changeDots = () => {
  dots.forEach((dot, i) => {
    if (i !== active) {
      dot.classList.remove("active");
    } else {
      dot.classList.add("active");
    }
  });
};

const keyChangeSlide = (e) => {
  if (e.keyCode === 37 || e.keyCode === 39) {
    clearInterval(changeSliderInterval);
    e.keyCode === 37 ? active-- : active++;

    if (active === list.length) {
      active = 0;
    } else if (active < 0) {
      active = list.length - 1;
    }
    image.src = list[active].img;
    h1.textContent = list[active].text;
    changeDots();
    changeSliderInterval = setInterval(changeSlider, time);
  }
};

dots.forEach((dot, i) =>
  dot.addEventListener("click", (e) => {
    clearInterval(changeSliderInterval);
    dots.forEach((dot) => dot.classList.remove("active"));
    e.target.classList.add("active");
    active = i;
    image.src = list[active].img;
    h1.textContent = list[active].text;
    changeSliderInterval = setInterval(changeSlider, time);
  })
);

window.addEventListener("keydown", keyChangeSlide);
let changeSliderInterval = setInterval(changeSlider, time);


