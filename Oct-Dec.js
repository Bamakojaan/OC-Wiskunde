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
		document.getElementById("ODecimaaloplossing").textContent =  oplossing;
	} else {
		document.getElementById("ODecimaaloplossing").textContent = "Error";
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
			oplossing = oplossing + Math.pow(10, n) * (knipgetal % 8);
			var a = knipgetal % 8;
			knipgetal = (knipgetal - a)/8;
			n++
			Calculate();
		};
	};
};

function BtoD () {
	var getal = document.getElementById("Binair").value
	var getallengte = getal.length;
	var hulpgetal = getal;
	for ( i = 0; i < getal.length; i++) {
		hulpgetal = hulpgetal.replace("1", "");
		hulpgetal = hulpgetal.replace("0", "");
		console.log(hulpgetal);
	};
	if ( hulpgetal == "") {
		var oplossing = 0
		for ( n = 0; n < getal.length; n++) {
			oplossing = oplossing + getal.charAt( getallengte - n - 1)*Math.pow(2,n);
		};
		document.getElementById("BDecimaaloplossing").textContent = oplossing;
	} else {
		document.getElementById("BDecimaaloplossing").textContent = "Error";
	};
};

function DtoB () {
	var getal = document.getElementById("Decimaal").value;
	var getallengte = getal.length;
	var knipgetal = getal;
	var oplossing = 0;
	var n = 0;
	Calculate();
	function Calculate () {
		if ( knipgetal == 0) {
			document.getElementById("Binairoplossing").textContent = oplossing;
		} else {
			oplossing = oplossing + Math.pow(10, n) * (knipgetal % 2);
			var a = knipgetal % 2;
			knipgetal = (knipgetal - a)/2;
			n++
			Calculate();
		};
	};
};


