console.log("hallo");

// logic respondsive

const btnRes = document.querySelector(".nav-btn-responsive");
const menu = document.querySelector(".nav-menu");

btnRes.addEventListener("click", () => {
  menu.classList.toggle("active");
  btnRes.classList.toggle("cross");
});

AOS.init({
	disable: function () {
		var maxWidth = 800;
		return window.innerWidth < maxWidth;
	},
	duration: 1200,
	easing: "ease-in-out", // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: true, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom",
});

// slick
$(document).ready(function () {
  $(".running").slick({
    variableWidth: true,
    autoplay: true,
    centerMode: true,
    arrows: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 14000,
  });
  $(".slider-products").slick({
    centerMode: false,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// logic copy clipboard

const copyButtonLabel = "Components";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button.innerText = "Code Copied!";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}
