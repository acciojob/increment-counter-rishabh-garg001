//your JS code here. If required.
let counter = document.querySelector(".counter")
let btn = document.querySelector(".incrementBtn")

btn.addEventListener("click", function(){
	let count = Number(counter.innerText)
	count++ 
	counter.innerText = count
	alert(count)
})