document.querySelector("ul").addEventListener("wheel", (event) => {
	if(event.deltaY < 0) {
		event.target.scrollBy(200, 0);
	} else {
		event.target.scrollBy(-200, 0);
	}
});

linkar = () => {
  console.log("Funcionando!");
};
