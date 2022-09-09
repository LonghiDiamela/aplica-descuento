import "./styles.css";

let btnEnv=document.getElementById("btnEnviar");
let dato1=document.getElementById("dato");
let dato2=document.getElementById("dato2");
let rotulo1=document.getElementById("rotulo1");
let rotulo2=document.getElementById("rotulo2");
rotulo1.innerHTML="ingresar monto: ";
rotulo2.innerHTML="ingresar cantidad: ";
btnEnv.addEventListener("click", ()=>{
  let monto:Number=dato1.value;
  let cantidad:Number=dato2.value;
  let montoConDescuento:Number=0;
  let descuento:Number=0;
  let precioTotal:Number=0;
  let montoAhorrado:Number=0;
  precioTotal=monto*cantidad;

  if (precioTotal>=1000) {
    descuento=(precioTotal*10)/100;
    montoConDescuento=precioTotal-descuento;
    montoAhorrado=precioTotal-montoConDescuento;
    console.log("el total de su compra es de:$ " + precioTotal);
    console.log("el gasto mayor a $1000 tiene un 10% de descuento.");
    console.log("con descuento el monto a pagar es.$ " + montoConDescuento);
    console.log("su ahorro es:$ " + montoAhorrado);
  } else {
    console.log("sin descuento. El monto a pagar es:$ " +precioTotal);
  }
});
