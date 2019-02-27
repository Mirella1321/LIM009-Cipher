let cifrar = document.getElementById("cifrar");
let desplazamiento = document.getElementById("desplazamiento").value;
let descifrar = document.getElementById("descifrar");
let palabra = document.getElementById("palabra").value;
let resultado = document.getElementById("resultado");
let limpiar = document.getElementById("limpiar");


cifrar.addEventListener("click", () => {
  let desplazamiento = document.getElementById("desplazamiento").value;
  let offsetNumber = parseInt(desplazamiento,10);
  let palabra = document.getElementById("palabra").value;
document.getElementById("resultado").value=cipher.encode(palabra,offsetNumber);
})
                        
 descifrar.addEventListener("click", () => {
  let desplazamiento = document.getElementById("desplazamiento").value;
  let offsetNumber2 = parseInt(desplazamiento,10);
  let palabra = document.getElementById("palabra").value;
document.getElementById("resultado").value=cipher.decode(palabra,offsetNumber2);
})
