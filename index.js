document.querySelector("ul").addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    event.target.scrollBy(200, 0);
  } else {
    event.target.scrollBy(-200, 0);
  }
});

link = (event) => {
  const title = event.target.innerText;
  document.querySelector(".doubt").textContent = `Dúvidas em ${title}`;

  window.location.href = "#doubt-title";
  cardSelected(title);
};

cardSelected = (title) => {
  const productsList = document.querySelector(".products-list").children;

  for (let i = 0; i < productsList.length; i++) {
    const card = productsList[i];
    const cardTitle = card.textContent.trim();

    if (cardTitle === title) {
      console.log(`Posição do card: ${i}`);
    }
  }
};
