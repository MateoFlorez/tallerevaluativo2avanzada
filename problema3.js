function generarComida(){
    let tipoComida = ['Vegetal','Animal','Insecto']
    let nombre = ['Sopa', 'Carne', 'Sancocho']
    let energia = [100,200,300,400,500]

    let alimentos = []
    for (let i=0; i<50; i++){
        let alimento = {}

        // Generar alimentos aleatorios
        alimento.nombre = nombre[Math.floor(Math.random()*nombre.length)]
        alimento.tipo = tipoComida[Math.floor(Math.random()*tipoComida.length)]
        alimento.energia = energia[Math.floor(Math.random()*energia.length)]

        alimentos.push(alimento)
    }

    let filtro = alimentos.filter(alimento => alimento.energia > 200)

    console.log(filtro)
    console.log(filtro.length)
}

generarComida()