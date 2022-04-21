//Realice un programa que devuelva el área del
// triangulo usando los siguientes pares de base-altura:
// • (1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
// • Implemente un método llamado calcularAreaTriangulo
// que reciba dos números por parámetro (uno llamado
// base y otro altura)

let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let inputBase = <HTMLInputElement>document.getElementById("base");
let inputAltura = <HTMLInputElement>document.getElementById("altura");
let rotulo = <HTMLElement>document.getElementById("rotulo");

function calcularArea(base: number, altura: number) {
  let area: number = (base * altura) / 2;
  return area;
}

btnEnviar.addEventListener("click", () => {
  let numeroBase = Number(inputBase.value);
  let numeroAltura = Number(inputAltura.value);

  let resultado = calcularArea(numeroBase, numeroAltura);
  rotulo.innerHTML = `El area del triangulo es ${resultado}`;
  console.log(resultado);
});
