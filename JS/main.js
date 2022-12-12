let cadena = "Aczino se convirtió en el tricampeón de la Red Bull Batalla Internacional."

let indices = [];
for(let i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() === "a  ") indices.push(i);
}

document.getElementById("resultado").innerHTML = indices.length;


//Aquí se escribiran los ejercicios con Strings

let nombre = "abraham"; //"Abraham"; nombre = nombre.toUpperCase();
let letra="a";

let contFinal=0;

for (let index = 0; index < nombre.length; index++) { console.log(nombre.charAt(index));

let contTemp=1;

for (let cont = index+1; cont < nombre.length; cont++) { if(nombre.charAt(index) == nombre.charAt(cont)) contTemp++;

} // for cont

if (contTemp>contFinal) { contFinal=contTemp; letra = nombre.charAt(index);

//contTemp>contFinal

}// for index

console.log(letra, contFinal);