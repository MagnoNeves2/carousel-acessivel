const list = document.querySelector("ul");

document.querySelector("ul").addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    event.target.scrollBy(200, 0);
  } else {
    event.target.scrollBy(-200, 0);
  }
});

document.body.addEventListener("mousemove", () => {
  const list = document.querySelector("ul").children;

  for (let i = 0; i < list.length; i++) {
    console.log();
    list[i].ariaLabel = `card ${i + 1} de ${list.length} cards`;
  }

  // ? Lógica para habilitar as bolinhas com condicional da variação de tamanho das telas
});

const bulletAmount =
  Math.floor(
    (document.querySelector(".card-box").clientWidth * 6) /
      document.querySelector(".products-section").clientWidth
  ) + 0.5;

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

activedBall = () => {
  // ?: daria para pegar a referencia do botão (event) através do click?
  document.querySelector(".scrollball").addEventListener("click", (event) => {
    const idButton = event.target.id;
    const button = document.getElementById(`${idButton}`);

    if (document.querySelectorAll(".ball_active").length > 0) {
      document.querySelectorAll(".ball_active").forEach((btn) => {
        btn.classList.remove(["ball_active"]);
        btn.classList.add(["ball"]);
      });

      button.classList.add(["ball_active"]);
    } else {
      button.classList.remove(["ball"]);
      button.classList.add(["ball_active"]);
    }
  });
};

let selectedBullet = 0;
let scrollTotal = 0;

scrollCarousel = (bullet) => {
  if (bullet != selectedBullet) {
    let scrollTarget = 0;
    const diffBullet = bullet - selectedBullet;

    activedBall();

    scrollTarget =
      document.querySelector(".products-section").clientWidth * diffBullet;

    document.querySelector(".products-list").scrollBy(scrollTarget, 0);

    selectedBullet = bullet;
    scrollTotal = scrollTarget;
  }
};

createBullets = () => {
  for (let i = 0; i < bulletAmount; i++) {
    const button = document.createElement("button");
    // button.innerHTML = "bolinha " + (i + 1);
    button.setAttribute("id", `ball_${i + 1}`);
    button.classList.add(["ball"]);
    button.onclick = () => scrollCarousel(i);

    document.querySelector(".scrollball").append(button);
  }
};

for (let i = 0; i < 1; i++) {
  createBullets();
  const list = document.querySelector("ul").children;

  for (let i = 0; i < list.length; i++) {
    console.log();
    list[i].setAttribute('aria-label', `card ${i + 1} de ${list.length} cards`)
  }
}