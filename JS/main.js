let cadena = "Aczino se convirtió en el tricampeón de la Red Bull Batalla Internacional."

let indices = [];
for(let i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() === "a") indices.push(i);
}

document.getElementById("resultado").innerHTML = indices.length;