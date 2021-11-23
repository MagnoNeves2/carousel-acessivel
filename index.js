const list = document.querySelector("ul");

document.querySelector("ul").addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    event.target.scrollBy(200, 0);
  } else {
    event.target.scrollBy(-200, 0);
  }
});

document.querySelector("ul").addEventListener('mouseenter', () => {
  const list = document.querySelector("ul").children;

  for (let i = 0; i < list.length; i++) {
		console.log();
		list[i].ariaLabel = `card ${i + 1} de ${list.length} cards`;
  }
})

// const title = document.querySelector("button").textContent.trim();
  // console.log(title);

  // for (let i = 0; i < list.length; i++) {
  //   const card = list[i];
  //   const cardTitle = card.textContent.trim();
  //   console.log(cardTitle === title);

  //   if (cardTitle === title) {
  //     console.log(`Posição do card: ${i + 1}`);
  //     // card.ariaLabel = `card ${i + 1} de ${productsList.length}`
  //   }
  // }

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
