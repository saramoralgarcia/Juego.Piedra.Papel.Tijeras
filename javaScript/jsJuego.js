function opcion(miOpcion) 
{
    var resultadoTexto = ["Empatas", "Ganas", "Pierdes"];
    var nombre = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];

    //var resultadoTexto = ["Empatas", "Ganas", "Pierdes"];
   //Una matriz que contiene los nombres de las opciones y las opciones de la cpu.
   // donde las columnas sean el humano y las filas la cpu.
   //codificado con 0,1,2 como empate, gana o pierde.

    var jugada = [
        [0,2,2,2,1],
        [2,0,1,1,2],
        [1,2,0,2,1],
        [1,2,1,0,2],
        [2,1,2,1,0]
    ];

    //Descripcion del las jugadas.
    descripcionJugadas = [
        ["Iguales","Papel tapa piedra","piedra rompe tijeras","piedra aplasta lagarto","Spock vaporiza piedra"],
        ["Papel tapa piedra","iguales","tijeras cortan papel","lagarto devora papel","papel desautoriza a spock"],
        ["piedra rompe tijeras","tijeras cortan papel","iguales","tijeras decapitan lagarto","spock rompe tijeras"],
        ["piedra aplasta lagarto","lagarto devora papel","tijeras decapitan lagarto","iguales","lagarto envenena a spock"],
        ["spock vaporiza piedra","papel desautoriza a spock","spock rompe tijeras","lagarto envenena a spock","iguales"]

    ];
    var cpu = Math.floor((Math.random() * 5));

    resultado = jugada[cpu][miOpcion];
    console.log("Elijes: " + nombre[miOpcion]);
    console.log("la maquina elige: " + nombre[cpu]);
    console.log(descripcionJugadas[cpu][miOpcion]);
    console.log(resultadoTexto[resultado]);

    var mensaje1;
    var mensaje2;
    var mensaje3;
    var mensaje4;
    mensaje1 = new SpeechSynthesisUtterance("Elijes: " + nombre[miOpcion]);
    mensaje2 = new SpeechSynthesisUtterance("la maquina elige: " + nombre[cpu]);
    mensaje3 = new SpeechSynthesisUtterance(descripcionJugadas[cpu][miOpcion]);
    mensaje4 = new SpeechSynthesisUtterance(resultadoTexto[resultado]);
   
    window.speechSynthesis.speak(mensaje1);
    window.speechSynthesis.speak(mensaje2);
    window.speechSynthesis.speak(mensaje3);
    window.speechSynthesis.speak(mensaje4);
    
}