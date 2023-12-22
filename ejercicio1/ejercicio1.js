/*Ejercicio  1

Crear una función constructora para crear un Estudiante con las siguientes propiedades:

nombre, 
correo
promedio.
Una Funcion validarPromedio Que devuelva "Aprobado" si el promedio es mayor a 70 y "Reprobado" si es menor.
Una Función obtenerUsuario que devuelva únicamente el nombre de usuario del email
 Crear un objeto a partir de la función anterior y comprobar funciones  */

 function Student(nombre, correo, promedio){
    this.nombre=nombre;
    this.correo=correo;
    this.promedio=promedio;
    this.validarPromedio=function(){
        if(promedio >70){
            return 'APROBODO';
    }else{
        return 'REPROBADO';
    }
 }
 this.obteUsuario = function() {
    let arroba = this.correo.indexOf('@');
    return arroba[0];
    
  };

 }

   
 

 let  studentOne = new Student("maria@gmail.com","jose", 60);
 alert("Jose Gutierrez "  +  studentOne.validarPromedio());

 let student = new Student ("Jose", "joseguite@gmail.com"  );
alert("el usuario es "+ student.obteUsuario())
