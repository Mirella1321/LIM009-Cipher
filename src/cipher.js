window.cipher = {
  encode: (palabra,offsetNumber) => {
    let codificar = "";
for (let i=0; i<palabra.length; i++) {
let ascii = palabra.charCodeAt(i);
  // if(ascii>=65 && ascii<=90){
codificar+=String.fromCharCode((ascii-65+offsetNumber)%26+65);
// }
}
return codificar;
},
  decode: (palabra,offsetNumber2) => {
    let decodificar = "";
for (let j=0; j<palabra.length; j++) {
let valorascii = palabra.charCodeAt(j);
  // if(valorascii>=65 && valorascii<=90){
    decodificar+=String.fromCharCode((valorascii-offsetNumber2+65)%26+65);
    // }
  }
  return decodificar;
  }
 };
 