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
