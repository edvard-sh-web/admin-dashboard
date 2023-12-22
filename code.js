let pArray =  [...document.querySelectorAll(".ann-item>p")]
let texts = pArray.map((el) => {
	return el.textContent
});

function truncate() {
  pArray.forEach(el => {
		el.textContent = el.textContent.substring(0, Math.floor(Math.random() * (80 - 40 + 1)) + 40) + "...";
	});
}

console.log(texts);
truncate()