// active hamburger menu
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navlist.classList.toggle("active");
  document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click", () => {
  navlist.classList.remove("active");
  menuIcon.classList.remove("active");
  document.body.classList.remove("open");
});

// rotate text js code
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML
  .split("")
  .map((char, i) => `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`)
  .join("");

// switch between about buttons

const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    contents.forEach((content) => (content.style.display = "none"));
    contents[index].style.display = "block";
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// portfolio fillter

const mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: ".portfolio-box",
  },
  animation: {
    duration: 500,
  },
});

// Initialize swiperjs

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// side progress bar

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// active menu

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// scroll reveal

// skills/
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

function toggleSkills() {
  skillsBox.classList.toggle("active");
}

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    toggleBtns.forEach((btn) => btn.classList.remove("active"));

    this.classList.add("active");

    toggleSkills();
  });
});

const skillsBtn = document.querySelector(".skills-btn");
const toolsBtn = document.querySelector(".tools-btn");

skillsBtn.addEventListener("click", function () {
  skillsBtn.classList.toggle("active");
  if (skillsBtn.classList.contains("active")) {
    toolsBtn.classList.remove("active");
  } else {
    toolsBtn.classList.add("active");
  }
});

toolsBtn.addEventListener("click", function () {
  toolsBtn.classList.toggle("active");
  if (toolsBtn.classList.contains("active")) {
    skillsBtn.classList.remove("active");
  } else {
    skillsBtn.classList.add("active");
  }
});
const moonBtn = document.querySelector(".btn");
const moonIcon = moonBtn.querySelector("i");

moonBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  // Cambiar el icono del botón
  if (moonIcon.classList.contains("bx-moon")) {
    moonIcon.classList.remove("bx-moon");
    moonIcon.classList.add("bx-sun");
  } else {
    moonIcon.classList.remove("bx-sun");
    moonIcon.classList.add("bx-moon");
  }

  console.log("Botón de luna clicado");
});

function openEmail() {
  var subject = encodeURIComponent("Customer inquiry");
  var email = "stalyin16@gmail.com";
  var mailtoLink = "mailto:" + email + "?subject=" + subject;
  window.open(mailtoLink, "_blank");
}

document.getElementById("sendMessage").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var message = document.getElementById("message").value;

  var whatsappMessage = "Nuevo mensaje de contacto:\n";
  whatsappMessage += "Nombre: " + name + " " + lastName + "\n";
  whatsappMessage += "Email: " + email + "\n";
  whatsappMessage += "Teléfono: " + phoneNumber + "\n";
  whatsappMessage += "Mensaje: " + message;

  var whatsappLink =
    "https://wa.me/+593963313195?text=" + encodeURIComponent(whatsappMessage);

  window.open(whatsappLink, "_blank");
});
