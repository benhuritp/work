// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector(".search__link");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

if (btn) {
  btn.addEventListener("click", function () {
    modal.style.display = "flex";
    window.document.body.classList.toggle("no-scroll");
  });
}

// When the user clicks on img (x), close the modal

if (span) {
  span.addEventListener("click", function () {
    modal.style.display = "none";
    window.document.body.classList.toggle("no-scroll");
  });
}

// When the user clicks anywhere outside of the modal, close it

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    window.document.body.classList.toggle("no-scroll");
  }
});

// modal-toggle

const loginSearcher = document.querySelector(".login-searcher");
const loginEmployer = document.querySelector(".login-employer");
const searchBtn = document.querySelector("#searchBtn");
const modalActions = document.querySelector(".modal-actions");
const radioSearcher = document.querySelector("#radio-searcher");
const radioEmployer = document.querySelector("#radio-employer");

if (searchBtn) {
  (function () {
    if (radioSearcher.checked) {
      loginEmployer.style.display = "none";
      loginSearcher.style.display = "block";
    }
    if (radioEmployer.checked) {
      loginEmployer.style.display = "block";
      loginSearcher.style.display = "none";
    }
  })();
}
// (function () {
//   if (radioSearcher.checked) {
//     loginEmployer.style.display = "none";
//     loginSearcher.style.display = "block";
//   }
//   if (radioEmployer.checked) {
//     loginEmployer.style.display = "block";
//     loginSearcher.style.display = "none";
//   }
// })();
if (modalActions) {
  modalActions.addEventListener("click", (e) => {
    e.stopPropagation();
    if (radioSearcher.checked) {
      loginEmployer.style.display = "none";
      loginSearcher.style.display = "block";
    }
    if (radioEmployer.checked) {
      loginEmployer.style.display = "block";
      loginSearcher.style.display = "none";
    }
  });
}

// (function () {
//   "use strict";
//
//   const section = document.querySelectorAll(".section");
//   const sections = {};
//   let i = 0;
//
//   Array.prototype.forEach.call(section, function (e) {
//     sections[e.id] = e.offsetTop;
//   });
//
//   window.onscroll = function () {
//     const scrollPosition =
//       document.documentElement.scrollTop || document.body.scrollTop;
//
//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         document.querySelector(".active").setAttribute("class", " ");
//         document
//           .querySelector("a[href*=" + i + "]")
//           .setAttribute("class", "active");
//       }
//     }
//   };
//
//   window.addEventListener("scroll", function () {
//     const scrollPosition =
//       document.documentElement.scrollTop || document.body.scrollTop;
//
//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         console.log(i === "info");
//         if (i === "info") {
//           document
//             .querySelector(".active")
//             .setAttribute("class", "v-progress-item inprogress");
//           document
//             .querySelector("a[href*=" + i + "]")
//             .setAttribute("class", "active");
//         } else {
//           document.querySelector(".active").setAttribute("class", "");
//           document
//             .querySelector("a[href*=" + i + "]")
//             .setAttribute("class", "active");
//         }
//         // document.querySelector(".active").setAttribute("class", "");
//       }
//     }
//   });
// })();

(function () {
  "use strict";

  const section = document.querySelectorAll(".section");
  const sections = {};
  const i = 0;

  Array.prototype.forEach.call(section, function (e) {
    console.log(e.offsetTop);
    sections[e.id] = e.offsetTop - 50;
  });

  window.onscroll = function () {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector(".active").setAttribute("class", "");
        document
          .querySelector("a[href*=" + i + "]")
          .setAttribute("class", "active");
      }
    }
  };
})();
