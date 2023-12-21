'use strict'
function Student (nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = Number(prompt("Cual es tu promedio"));
    
    this.validarPromedio = function(){
        if(this.promedio>70){
            return "Aprobado";
        }else{s
            return "Desaprobado";
        }
            }
            this.Usuario = function(){
                if(this.correo=correo){
                    return correo.slice(0, correo.indexOf("@"))
                    
                }
            }  
 }
     
  let estudiante1 =new Student("Luis", "altinoco@sudamericano.edu.ec")
  alert(`${estudiante1.validarPromedio()}`);
  alert(`${estudiante1.Usuario()}`);