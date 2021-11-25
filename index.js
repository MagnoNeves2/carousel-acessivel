const list = document.querySelector("ul");

document.querySelector("ul").addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    event.target.scrollBy(200, 0);
  } else {
    event.target.scrollBy(-200, 0);
  }
});
document.querySelector("ul").addEventListener("touchstart", (event) => {
  // if (event.deltaY < 0) {
  //   event.target.scrollBy(200, 0);
  //   console.log('Para frente!');
  //   console.log(event.target);
  // } else {
  //   event.target.scrollBy(-200, 0);
  //   console.log("Para trás!");
  //   console.log(event);
  // }
  // console.log(event);
  // console.log(event.view);
  console.log(event.target.parentElement.clientWidth);
  console.log(
    event.changedTouches[0].clientX > event.target.parentElement.clientWidth
  );
  let teste = 0;
  // TODO: if com função scroll das bolinhas em q a condição true vai subindo as posições(dentro do array) das bolinhas e false vai descendo
  if (
    event.changedTouches[0].clientX < event.target.parentElement.clientWidth
  ) {
    // const list = document.querySelectorAll('.ball');
    // teste += 1;
    // const button = list[teste];
    // console.log(button);
    // console.log(teste);
    // teste += 1;
    // for (let i = 1; i < list.length; i++) {
    //   const button = list[i];
    //   console.log(button.id);
    //   break;
    // }
  }

  // do {
  //   const list = document.querySelectorAll(".ball");
  //   teste += 1;
  //   const button = list[teste];
  //   console.log(button);
  //   console.log(teste);
  // } while (
  //   teste < 2
  // );
  // if (document.querySelector(".card-box").clientWidth > event.changedTouches[0].clientX) {
  //   console.log('Direita!');

  // } else {
  //   console.log('Esquerda!');
  // }
});

document.body.addEventListener("mousemove", () => {
  const list = document.querySelector("ul").children;

  for (let i = 0; i < list.length; i++) {
    list[i].ariaLabel = `card ${i + 1} de ${list.length} cards`;
  }

  // ? Lógica para habilitar as bolinhas com condicional da variação de tamanho das telas
});

const bulletAmount =
  navigator.userAgent.match(/webOS/i) && document.body.clientWidth >= 1440
    ? Math.round(
        (document.querySelector(".card-box").clientWidth * 6) /
          document.querySelector(".products-section").clientWidth
      ) + 2
    : Math.round(
        (document.querySelector(".card-box").clientWidth * 6) /
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

activedBall = (id) => {
  // ?: daria para pegar a referencia do botão (event) através do click?
  // document.querySelector(".scrollball").addEventListener("click", (event) => {
  // const idButton = event.target.id;
  const button = document.getElementById(`${id}`);

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
  // });
};

let selectedBullet = 0;
let scrollTotal = 0;

scrollCarousel = (idBullet) => {
  activedBall(idBullet);
  const bullet = idBullet.substring(5);
  if (bullet != selectedBullet) {
    let scrollTarget = 0;
    const diffBullet = bullet - selectedBullet;

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
    button.setAttribute("id", `ball_${i}`);
    button.classList.add(["ball"]);
    button.onclick = () => scrollCarousel(button.id);

    document.querySelector(".scrollball").append(button);
  }

  document
    .querySelector(".scrollball")
    .firstElementChild.classList.add(["ball_active"]);
};

scrollAdvance = () => {
  const position = document.querySelector(".ball_active").id.substring(5);
  const nextPosition = `ball_${parseInt(position, 10) + 1}`;
  console.log(position);
  console.log(nextPosition);
  scrollCarousel(nextPosition);

  if (
    document
      .querySelector(".scrollball")
      .lastElementChild.classList.contains(["ball_active"])
  ) {
    document.querySelector(".advance-arrow").setAttribute("hidden", "true");
    document.querySelector(".back-arrow").removeAttribute("hidden");
  }
};

scrollBack = () => {
  const position = document.querySelector(".ball_active").id.substring(5);
  const nextPosition = `ball_${parseInt(position, 10) - 1}`;
  console.log(position);
  console.log(nextPosition);
  scrollCarousel(nextPosition);

  if (
    document
      .querySelector(".scrollball")
      .firstElementChild.classList.contains(["ball_active"])
  ) {
    document.querySelector(".back-arrow").setAttribute("hidden", "true");
    document.querySelector(".advance-arrow").removeAttribute("hidden");
  }
};

for (let i = 0; i < 1; i++) {
  createBullets();
  const list = document.querySelector("ul").children;

  for (let i = 0; i < list.length; i++) {
    list[i].setAttribute("aria-label", `card ${i + 1} de ${list.length} cards`);
  }

  if (
    document.querySelectorAll(".ball").length === 1 ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  ) {
    document.querySelector(".advance-arrow").setAttribute("hidden", "true");
    document.querySelector(".back-arrow").setAttribute("hidden", "true");
  } else if (document.querySelectorAll(".ball").length > 1) {
    document.querySelector(".back-arrow").setAttribute("hidden", "true");
  }
}
