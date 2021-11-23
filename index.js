const list = document.querySelector("ul");

document.querySelector("ul").addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    event.target.scrollBy(200, 0);
  } else {
    event.target.scrollBy(-200, 0);
  }
});

document.querySelector("ul").addEventListener("mouseenter", () => {
  const list = document.querySelector("ul").children;

  for (let i = 0; i < list.length; i++) {
    console.log();
    list[i].ariaLabel = `card ${i + 1} de ${list.length} cards`;
  }
});

// console.log(document.querySelector(".products-section").clientWidth);
// console.log(document.querySelector(".products-list"));
// console.log(document.querySelector(".card-box").clientWidth * 5);

const bulletAmount =
  Math.floor(
    (document.querySelector(".card-box").clientWidth * 5) /
      document.querySelector(".products-section").clientWidth
  ) + 1;

link = (event) => {
  const title = event.target.innerText;
  document.querySelector(".doubt").textContent = `Dúvidas em ${title}`;

  window.location.href = "#doubt-title";
  cardSelected(event);
};

cardSelected = (event) => {
  // TODO: Mudar a cor da div de seleção.
  event.target.ariaSelected = "true";
};

let selectedBullet = 0;
let scrollTotal = 0;

scrollCarousel = (bullet) => {
  if (bullet != selectedBullet) {
    let scrollTarget = 0;

    // if (bullet > selectedBullet) {
      const diffBullet = bullet - selectedBullet;
      scrollTarget =
        document.querySelector(".products-section").clientWidth * diffBullet;
    // }

    // if (bullet < selectedBullet) {
    //   const diffBullet = bullet - selectedBullet;
    //   scrollTarget =
    //     document.querySelector(".products-section").clientWidth * diffBullet;
    // }

    document.querySelector(".products-list").scrollBy(scrollTarget, 0);

    selectedBullet = bullet;
    scrollTotal = scrollTarget;
  }
};

createBullets = () => {
  for (let i = 0; i < bulletAmount; i++) {
    const button = document.createElement("button");
    button.innerHTML = "bolinha " + (i + 1);
    button.onclick = () => scrollCarousel(i);

    document.querySelector("#products-section").append(button);
  }
};
