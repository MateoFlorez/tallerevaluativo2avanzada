function asignarPadawan(name,planet,age,est,callback){
    setTimeout(function(){
        let padawans = 
            {
                nombre: name,
                planeta: planet,
                edad: age,
                estatura: est
            }
        console.log(`Nombre: ${padawans.nombre} \nEdad: ${padawans.edad}`)
        callback(padawans)
    },10000)
}

// Llamando a la funcion principal
asignarPadawan('Mateo','Yavin4',13,'1.72cm',function(padawan){
    if (padawan.edad < 15){
        console.log(`Tarea asignada: Manejo de la fuerza.`)
    }
    else{
        console.log(`Tarea asignada: Manejo del sable de luz.`)
    }
})