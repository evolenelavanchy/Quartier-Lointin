import { gsap } from "gsap";
// gsap.to(".slider-track", {
//   scrollTrigger: {
//     trigger: ".slider-mask",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     markers: true,
//   },
//   x: "-75%",
//   ease: "sine.inOut",
// });

var html = document.querySelector("html");

// Ciblage des boutons dans le document
// (le chiffre correspond à la séquence sur laquelle se trouve le bouton)
var button1 = document.querySelector("#button-screen-8");
var button2 = document.querySelector("#button-screen-15");
var button3 = document.querySelector("#button-screen-3");
var button4 = document.querySelector("#button-screen-6");

// On crée autant de verrous que de boutons
// (le chiffre correspond à la séquence qui est verrouillée)
var lock1 = true;
var lock2 = true;
var lock3 = true;
var lock4 = true;

// Création de la timeline principale
var tlMain = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "2000%",
    pin: true,
    markers: true,
    scrub: 1,
    onComplete: () => {
      if (lock1) {
        // Si le verrou 1 est actif
        html.style.overflow = "hidden"; // Le scroll est bloqué
      }
    },
  },
});

// Déplacement initial du slider
tlMain.set(".slider-track", {
  x: "-47%",
});

// // Déplacement du slider de 1 écran vers la droite
// tlMain.to(".slider-track", {
//   x: "-66.6666%",
//   duration: 10,
//   ease: "power1.inOut",
//   onComplete: () => {
//     if (lock1) {
//       // Si le verrou 5 est actif
//       html.style.overflow = "hidden"; // Le scroll est bloqué
//     }
//   },
// });

// tlMain.to({}, { duration: 1 });

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-95%",
  duration: 10,
  ease: "power1.inOut",
});

// Retour du slider totalement à gauche
tlMain.to(".slider-track", {
  x: "0%",
  duration: 5,
  ease: "power1.inOut",
});

tlMain.to({}, { duration: 1 });

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-16.6666%",
  duration: 3,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock2) {
      // Si le verrou 2 est actif
      html.style.overflow = "hidden"; // Le scroll est bloqué
    }
  },
});

tlMain.to({}, { duration: 1 });

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-25%",
  duration: 10,
  ease: "power1.inOut",
});

// Fin des déplacements

// Au clic sur les boutons
button5.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock5 = false; // Le verrou 5 est désactivé
});

button1.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock1 = false; // Le verrou 1 est désactivé
});

button2.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock2 = false; // Le verrou 2 est désactivé
});
