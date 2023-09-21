// let menuLabel = document.querySelector('.menubox');
// let faBars = document.querySelector('.fa-bars');
// let navLinks = document.querySelector("#navLinks");

// menuLabel.addEventListener('click', show);

// function show() {
//     console.log("clicked");
//     faBars.classList.add("hide")
//     navLinks.style.left = "0%"
// }

// const menuBox = document.querySelector('.menubox');

// const navLinks = document.querySelector("#navLinks");
// const barsIcon = document.querySelector(".fa-bars");
// const xmarkIcon = document.querySelector(".fa-circle-xmark");

// barsIcon.addEventListener("click", () => {
//   barsIcon.classList.add("hide");
//   xmarkIcon.classList.remove("hide");

//   navLinks.style.left = "0";
// });

// xmarkIcon.addEventListener("click", () => {
//   barsIcon.classList.remove("hide");
//   xmarkIcon.classList.add("hide");

//   navLinks.style.left = "-100%";
// });

// menuBox.addEventListener("click", () => {
//   //   barsIcon.classList.toggle("hide");
//   //   xmarkIcon.classList.toggle("hide");

//   if (navLinks.style.left === "-100%") {
//     navLinks.style.left = "0";
//     barsIcon.classList.add("hide");
//     xmarkIcon.classList.remove("hide");
//   } else {
//     navLinks.style.left = "-100%";
//     barsIcon.classList.remove("hide");
//     xmarkIcon.classList.add("hide");
//   }
// });

// document.addEventListener("scroll", () => {
//   const navbar = document.querySelector("nav");
//   if (window.scrollY > 300) {
//     navbar.classList.add("scroll");
//   } else {
//     navbar.classList.remove("scroll");
//   }
// });

document.addEventListener("scroll", () => {
  const navbarEl = document.querySelector(".navbar");
  if (window.scrollY > 180) {
    navbarEl.classList.add("navbar-scrolled");
  } else {
    navbarEl.classList.remove("navbar-scrolled");
  }
});

// const counts = document.querySelectorAll(".count");
// const speed = 97;
// counts.forEach((counter) => {
//   function data() {
//     const target = Number(counter.getAttribute("data-target"));
//     const count = Number(counter.innerText);
//     const inc = target / speed
//     if (count < target) {
//       counter.innerText = Math.floor(inc + count);
//       setTimeout(data,1)
//     } else {
//       counter.innerText = target
//     }
//   }
//   data();
// });

// **********************************************************************
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

  
  const textEffect = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 20);
};

document.querySelector("#finsol").onmouseover = textEffect;
// **********************************************************************
let section_counter = document.querySelector("#section_counter");
let counters = document.querySelectorAll(".counter .count");

// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 30;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        } else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = "";
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / counters.length + 0.5}s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);


// **********************************************************************
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});