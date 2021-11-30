function OtoD () {
	var getal = document.getElementById('Octaal').value;
	var getallengte = getal.length;
	var hulpgetal = getal.replace("8", "");
	hulpgetal = hulpgetal.replace("9", "");
	if ( hulpgetal == getal) {
		var oplossing = 0;
		for ( n = 0; n < getal.length; n++) {
			oplossing = oplossing + getal.charAt( getallengte - n - 1)*Math.pow(8, n);
		};
		document.getElementById("Decimaaloplossing").textContent =  oplossing;
	} else {
		document.getElementById("Decimaaloplossing").textContent = "Error";
	};
};

function DtoO () {
	var getal = document.getElementById("Decimaal").value;
	var getallengte = getal.length;
	var knipgetal = getal;
	var oplossing = 0;
	var n = 0;
	Calculate();
	function Calculate () {
		if ( knipgetal == 0) {
			document.getElementById("Octaaloplossing").textContent = oplossing;
		} else {
			console.log(knipgetal);
			oplossing = oplossing + Math.pow(10, n) * (knipgetal % 8);
			var a = knipgetal % 8;
			console.log(knipgetal % 8);
			knipgetal = (knipgetal - a)/8;
			n++
			Calculate();
		};
	};
};


