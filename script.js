function crearTablero(){

    const dimensionSelect = document.getElementById("dimensiones");
    const btnGenerar = document.getElementById("btnGenerar");
    const tablero = document.getElementById("tablero");

    
    
    btnGenerar.addEventListener("click", ()=>{
        tablero.innerHTML = '';
        const dimension = parseInt(dimensionSelect.value);
            // configurar columnas con las dimensiones  
        tablero.style.gridTemplateColumns = `repeat(${dimension}, 100px)`;
            // generar cuadrados
        for(fila = 0; fila < dimension; fila++){
            for(columna = 0; columna < dimension; columna++){
                const cuadrado = document.createElement("div");
                
                //alternar entre blanco y negro                
                if((fila + columna) %2 === 0){
                    cuadrado.classList.add('blanco');
                }else {
                    cuadrado.classList.add('negro');
                }
                tablero.appendChild(cuadrado);
            }
        }
    });
}
crearTablero();
                
                
                
                 
        
       
        