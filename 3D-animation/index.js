//movement animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");
//items
const title = document.querySelector(".title");
const circle = document.querySelector(".circle");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//moving animation evnet
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //popin effect
  title.style.transform = "translateZ(150px)";
  circle.style.opacity = "0.9";
  circle.style.transform = "translateZ(50px) rotateZ(35deg)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

//animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  //popout effect
  title.style.transform = "translateZ(0px)";
  circle.style.opacity = "0.5";
  circle.style.transform = "translateZ(0px) rotateZ(0deg)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
