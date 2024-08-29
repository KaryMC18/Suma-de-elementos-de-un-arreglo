function sumarArreglo() {
    
    const numeros = [40, 18, 15, 90, 65];
    
    const suma = numeros.reduce((acum, valorActual) => acum + valorActual, 0);

    console.log("La suma de los elementos del arreglo es:", suma);
  }
  
 
  sumarArreglo();
  