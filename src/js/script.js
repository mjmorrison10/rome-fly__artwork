const display = document.querySelector(".display-work");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const modalUnion = [modal, modalContainer];

// const artObj = {
//   angeliqueKitchen: "./img/angelique-kitchen.jpg",
//   blackGritsComedy: "./img/black-grits-comedy.png",
//   blackGritsComedy2: "./img/black-grits-comedy2.png",
//   blockJuice: "./img/block-juice.png",
//   dj: "dj.jpg",
//   dynamicCuts: "dynamic-cuts.png",
//   family: "family.png",
//   jessicaRoberts: "jessica-roberts.png",
//   kobaAssociates: "koba-associates.jpg",
//   family: "family.png",
//   lifeUpSideDown: "life-up-side-down.jpg",
//   littleBoy: "little-boy.png",
//   manAndWoman: "man-and-woman.png",
//   mitchThaBarber: "mitch-tha-barber.png",
//   mrFlip: "mr-flip.png",
//   poodieMan: "poodie-man.png",
//   royalRedCatering: "royal-red-catering.jpg",
//   schoolOfPhlebotomy: "school-of-phlebotomy.png",
//   selfMade: "self-made.jpg",
//   soloMan: "solo-man.jpg",
//   sosMassage: "sos-massage.jpg",
//   spartan1: "spartan-1.png",
//   spartan2: "spartan-2.png",
//   spartan3: "spartan-3.png",
//   spartan4: "spartan-4.png",
//   suchAGenius: "such-a-genius.png",
//   twoWomen: "two-women.png",
// };

const artArr = [
  "./img/angelique-kitchen.jpg",
  "./img/black-grits-comedy.png",
  "./img/black-grits-comedy2.png",
  "./img/block-juice.png",
  "./img/dj.jpg",
  "./img/dynamic-cuts.png",
  "./img/family.png",
  "./img/jessica-roberts.png",
  "./img/koba-associates.jpg",
  "./img/family.png",
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
  "./img/spartan-1.png",
  "./img/spartan-2.png",
  "./img/spartan-3.png",
  "./img/spartan-4.png",
  "./img/such-a-genius.png",
  "./img/two-women.png",
];

function displayWork() {
  artArr.forEach((item, i) => {
    const html = `
    <div>
        <div
            class=" artImg z-10 relative before:content-[''] before:h-full before:w-full before:hover:bg-red-800 before:opacity-20 before:absolute before:top-0 cursor-pointer"
            data-id="${i}" >
        <img
            class="object-contain max-h-full max-w-full rounded"
            src="${item}"
            alt="Angelique Kitchen Logo"
        />
        </div>
     </div>
    `;

    if (i > 7) return

    display.insertAdjacentHTML("beforeend", html);
  });
}

displayWork();

// Display Modal
display.addEventListener("click", function (e) {
  modalContainer.classList.add("hidden");

  const clickTarget = e.target.querySelector(".artImg");
  if (clickTarget) return;
  //   document.body.classList.add(".stop-scrolling");

  modalContainer.style.top = `${window.scrollY}px`;

  const dataID = e.target.dataset.id;

  modalContainer.classList.toggle("hidden");

  const x = e.offsetX;
  const y = e.offsetY;

  const modalImg = modalContainer.querySelector(".modalImg");
  modalImg.src = `${artArr[dataID]}`;
});

modalUnion.forEach((el) => {
  el.addEventListener("click", function () {
    modalContainer.classList.add("hidden");
  });
});
