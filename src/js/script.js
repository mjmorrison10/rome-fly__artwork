"use strict";

const display = document.querySelector(".display-work");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const modalUnion = [modal, modalContainer];
const curPage = document.querySelector(".currentPage");
const pagination = document.querySelector(".pagination");
const modalImg = modalContainer.querySelector(".modalImg");

// "./img/spartan-1.png",
// "./img/spartan-2.png",
// "./img/spartan-3.png",
// "./img/black-grits-comedy2.png",
// "./img/dj.jpg",

const artArr = [
  "./img/angelique-kitchen.jpg",
  "./img/black-grits-comedy.png",
  "./img/block-juice.png",
  "./img/dynamic-cuts.png",
  "./img/family.png",
  "./img/jessica-roberts.png",
  "./img/koba-associates.jpg",
  "./img/life-up-side-down.jpg",
  "./img/little-boy.png",
  "./img/man-and-woman.png",
  "./img/mitch-tha-barber.png",
  "./img/mr-flip.png",
  "./img/poodie-man.png",
  "./img/royal-red-catering.jpg",
  "./img/school-of-phlebotomy.png",
  "./img/self-made.jpg",
  "./img/solo-man.jpg",
  "./img/sos-massage.jpg",
  "./img/spartan-4.png",
  "./img/such-a-genius.png",
  "./img/two-women.png",
  "./img/draw-baby-1.jpg",
  "./img/draw-woman-1.jpg",
  "./img/koba-associates2.jpg",
  "./img/man-bbq.jpg",
  "./img/couple.jpg",
  "./img/photosensitive-photography.jpg",
  "./img/chefboy-hollywood.jpg",
  "./img/blkwoman-1.jpg",
  "./img/blkwoman-2.jpg",
  "./img/blkwoman-3.jpg",
  "./img/blkwoman-4.jpg",

  "./img/meditate-girl.jpg",
  "./img/the-breakfast.jpg",
  "./img/man-in-a-jacket.png",
  "./img/chef-woman.png",
  "./img/lip-logo.jpg",
  "./img/lenon-stylez.png",
  "./img/da-purple-pint.jpg",
  "./img/majestic-lion.jpg",
  "./img/lion-logo.jpg",
  "./img/lion-logo1.jpg",
];

const artArrLow = [
  "./img/resize/angelique-kitchen.jpg",
  "./img/resize/black-grits-comedy.jpg",
  "./img/resize/block-juice.jpg",
  "./img/resize/dynamic-cuts.jpg",
  "./img/resize/family.jpg",
  "./img/resize/jessica-roberts.jpg",
  "./img/resize/koba-associates.jpg",
  "./img/resize/life-up-side-down.jpg",
  "./img/resize/little-boy.jpg",
  "./img/resize/man-and-woman.jpg",
  "./img/resize/mitch-tha-barber.jpg",
  "./img/resize/mr-flip.jpg",
  "./img/resize/poodie-man.jpg",
  "./img/resize/royal-red-catering.jpg",
  "./img/resize/school-of-phlebotomy.jpg",
  "./img/resize/self-made.jpg",
  "./img/resize/solo-man.jpg",
  "./img/resize/sos-massage.jpg",
  "./img/resize/spartan-4.jpg",
  "./img/resize/such-a-genius.jpg",
  "./img/resize/two-women.jpg",
  "./img/resize/draw-baby-1.jpg",
  "./img/resize/draw-woman-1.jpg",
  "./img/resize/koba-associates2.jpg",
  "./img/resize/man-bbq.jpg",
  "./img/resize/couple.jpg",
  "./img/resize/photosensitive-photography.jpg",
  "./img/resize/chefboy-hollywood.jpg",
  "./img/resize/blkwoman-1.jpg",
  "./img/resize/blkwoman-2.jpg",
  "./img/resize/blkwoman-3.jpg",
  "./img/resize/blkwoman-4.jpg",
  "./img/resize/meditate-girl.jpg",
  "./img/resize/the-breakfast.jpg",
  "./img/resize/man-in-a-jacket.png",
  "./img/resize/chef-woman.png",
  "./img/resize/lip-logo.jpg",
  "./img/resize/lenon-stylez.png",
  "./img/resize/da-purple-pint.jpg",
  "./img/resize/majestic-lion.jpg",
  "./img/resize/lion-logo.jpg",
  "./img/resize/lion-logo1.jpg",
];

const bodyWidth = document.body.clientWidth;
let pageCur = 1;
let imgsPerPage;

function setImgsPerPage() {
  if (bodyWidth <= 610) {
    console.log("sm", bodyWidth);
    imgsPerPage = 18;
  }
  if (bodyWidth >= 610 && bodyWidth <= 1009) {
    console.log("md", bodyWidth);
    imgsPerPage = 16;
  } else if (bodyWidth >= 1009) {
    console.log("lg", bodyWidth);
    imgsPerPage = 8;
  }
}

setImgsPerPage();

function prevPage() {
  if (pageCur > 1) {
    pageCur--;
    displayWork(pageCur);
  }
}

function nextPage() {
  if (pageCur < numPages()) {
    pageCur++;
    displayWork(pageCur);
  }
}

pagination.addEventListener("click", function (e) {
  const btnLeft = e.target.closest(".buttonLeft");
  const btnRight = e.target.closest(".buttonRight");

  if (!btnLeft && !btnRight) return;

  if (btnLeft) {
    prevPage();
    curPage.innerText = `Page ${pageCur}`;
  } else if (btnRight) {
    nextPage();
    curPage.innerText = `Page ${pageCur}`;
  }
});

function numPages() {
  return Math.ceil(artArr.length / imgsPerPage);
}

function displayWork(page = 1) {
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  generateHTML(pageCur);
}

function generateHTML(page) {
  display.innerHTML = "";
  console.log("page", page);

  function firstPage() {
    return page == 1 ? page - 1 : (page - 1) * imgsPerPage;
  }

  function secondPage() {
    return imgsPerPage * page;
  }

  const artMarkup = artArrLow
    .map((item, i) => {
      const alt = item
        .replaceAll("/", " ")
        .replaceAll(".", "")
        .slice(4, -3)
        .trim()
        .replaceAll("-", " ");
      return `
        <div>
            <div
                class=" md:h-40 md:w-40 lg:h-60 lg:w-60 h-24 w-24 artImg duration-1000 transition-all border-2 border-red-100/10 hover:border-red-100/75 rounded hover:animate-pulse z-10 relative before:content-[''] before:h-full before:w-full before:hover:bg-red-800 before:opacity-20 before:absolute before:top-0 cursor-pointer"
                data-id="${i}" >
            <img
                class=" object-contain h-full w-full rounded"
                src="${item}"
                alt="${alt}"
            />
            </div>
         </div>
        `;
    })
    .slice(firstPage(), secondPage())
    .join("");

  console.log(firstPage(), secondPage());

  display.insertAdjacentHTML("beforeend", artMarkup);
}

displayWork();

// Display Modal
display.addEventListener("click", function (e) {
  modalImg.style.opacity = 0;
  modalContainer.classList.add("hidden");

  const clickTarget = e.target.querySelector(".artImg");
  if (clickTarget) return;
  //   document.body.classList.add(".stop-scrolling");

  modalContainer.style.top = `${window.scrollY}px`;

  const dataID = e.target.dataset.id;

  modalContainer.classList.toggle("hidden");

  const x = e.offsetX;
  const y = e.offsetY;

  modalImg.src = `${artArr[dataID]}`;
  modalImg.style.opacity = 100;
});

modalUnion.forEach((el) => {
  el.addEventListener("click", function () {
    setTimeout(() => {
      modalContainer.classList.add("hidden");
    }, 600);
    modalImg.style.opacity = 0;
  });
});

const options = {
  rootMartin: "200px",
  threshold: 0.25,
};

const allSections = document.querySelectorAll(".IOsection");

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.style.opacity = 0;
      console.log('hide');
      return;
    }
    entry.target.style.opacity = 100;
    console.log(entry.target);
  });
}, options);

allSections.forEach((section) => {
  section.classList.add('duration-1000')
  section.classList.add('transition-all')
  section.style.opacity = 0;
  observer.observe(section);
});
