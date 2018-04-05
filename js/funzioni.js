/* Funzioni geometria*/
/*chiudi*/
function chiudi(){
navigator.app.exitApp();
}

/* quadrato*/
function perimetroq(){
var lato = document.forms.quadrato.lato.valueAsNumber;
var perimetro = lato*4;
document.getElementById("perimetro").innerHTML="Perimetro " + perimetro + " cm";
}

function areaq(){
var lato = document.forms.quadrato.lato.valueAsNumber;
var area = lato*lato;
document.getElementById("area").innerHTML="Area " + area + " cm<sup>2</sup>";
}

/* rettangolo*/
function perimetror(){
var base = document.forms.rettangolo.base.valueAsNumber;
var altezza = document.forms.rettangolo.altezza.valueAsNumber;
var perimetro = (base + altezza)*2;
document.getElementById("perimetro").innerHTML="Perimetro " + perimetro + " cm";
}

function arear(){
var base = document.forms.rettangolo.base.valueAsNumber;
var altezza = document.forms.rettangolo.altezza.valueAsNumber;
var area = base * altezza;
document.getElementById("area").innerHTML="Area " + area + " cm<sup>2</sup>";
}

 /* triangolo rettangolo*/
function perimetrot(){
var base = document.forms.triangolo.base.valueAsNumber;
var altezza = document.forms.triangolo.altezza.valueAsNumber;
var q1 = Math.pow(base,2);
var q2 = Math.pow(altezza,2);
var ipotenusa = Math.sqrt(q1 + q2);
var perimetro = base+altezza+ipotenusa;
document.getElementById("peri").innerHTML="Perimetro " + perimetro + " cm";
}

function areat(){
var base = document.forms.triangolo.base.valueAsNumber;
var altezza = document.forms.triangolo.altezza.valueAsNumber;
var area = base * altezza / 2;
document.getElementById("area").innerHTML="Area " + area + " cm<sup>2</sup>";
}

/* trapezio isoscele */
function perimetroTra(){
var baseMaggiore = document.forms.trapezio.baseMaggiore.valueAsNumber;
var baseMinore = document.forms.trapezio.baseMinore.valueAsNumber;
var obliquo = document.forms.trapezio.obliquo.valueAsNumber;
var perimetro = baseMaggiore + baseMinore + obliquo * 2;
document.getElementById("perimetro").innerHTML="Perimetro " + perimetro + " cm";
}

function areaTra(){
var baseMaggiore = document.forms.trapezio.baseMaggiore.valueAsNumber;
var baseMinore = document.forms.trapezio.baseMinore.valueAsNumber;
var altezza = document.forms.trapezio.altezza.valueAsNumber;
var area = (baseMaggiore + baseMinore)*altezza/2;
document.getElementById("area").innerHTML="Area " + area + " cm<sup>2</sup>";
}
