
let tagA= document.querySelectorAll("a[name='stations']");
console.log(tagA);
let station = [];
for (let i = 0; i < tagA.length; i++) {
	 station[i] = tagA[i].innerText ;
}
console.log(station);

 let time = setInterval (function() {
	let rand = Math.floor(Math.random() * station.length);
 	if (confirm("Включить " + station[rand] + "?")) {
 	//document.location.href = 'index.html'
 	window.open("index.html");
 }	else {}}, 10000);