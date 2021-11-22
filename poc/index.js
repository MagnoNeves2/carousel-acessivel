document.querySelector("ul").addEventListener("wheel", (event) => {
	if(event.deltaY < 0) {
		event.target.scrollBy(300, 0);
	} else {
		event.target.scrollBy(-300, 0);
	}
});

document.querySelector(".card").addEventListener("wheel", (event) => {
	event.target.style.pointerEvents = "none";
	event.target.style.backgroundColor = "red";
	event.preventDefault();
	console.log('Funcionando!');
});

linkar = () => {
  console.log("Funcionando!");
};
