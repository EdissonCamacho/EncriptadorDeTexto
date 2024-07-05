
var palabraADesencriptar="";
async function copiar(){
    try {
        await navigator.clipboard.writeText(palabraADesencriptar)
        document.getElementById("copiarbtn").innerHTML="Copiado!"
    } catch (error) {
        console.log("error al copiar")
    }
}



function encriptar(){
   recorrerLetras(1);

}

function desencriptar(){
    recorrerLetras(2);



}

function recorrerLetras(opcion){
    var informacion= document.getElementById("texto").value;
    console.log(informacion);

    let palabraEncriptada="";
    palabraADesencriptar="";
    
    for (let index = 0; index < informacion.length; index++) {
        if(opcion==1){
            palabraEncriptada+=devolver(informacion[index]);
        }else if(opcion==2){
           palabraADesencriptar+= buscarPalabras(informacion[index],index,informacion)
           let nuevaPosicion=devolverNumPosiciones(informacion[index])-1;
           if(nuevaPosicion>0){
            index+=nuevaPosicion;

           }
           

           


        }

        
        
    }
    if(opcion==1){
        document.getElementById("valor").innerHTML=palabraEncriptada;

    }else if(opcion==2){
        document.getElementById("valor").innerHTML=palabraADesencriptar;

    }
    
}

function buscarPalabras(letra,posicion,informacion){
    
    
    let ciclohasta=(posicion+devolverNumPosiciones(letra))-1;
    console.log(ciclohasta);

    if(devolverNumPosiciones(letra)>0){
        let result=""
    for (let index = posicion; index <= ciclohasta; index++) {
        result+=informacion[index];

        
    }
    console.log(result)
    return devolverLetraDesencriptada(result);


    }else{
        return letra;
    }
    



}
function devolverLetraDesencriptada(letra){
    let letras = new Object ({
        "ai":"a",
        "enter":"e",
        "imes":"i",
        "ober":"o",
        "ufat":"u",
    })

    if(letras.hasOwnProperty(letra)){
        return letras[letra];
     }else{
        return letra;
     }

}


function devolverNumPosiciones(letra){
    let letras = new Object ({
        "a":2,
        "e":5,
        "i":4,
        "o":4,
        "u":4,
    })
     if(letras.hasOwnProperty(letra)){
        return letras[letra];
     }else{
        return 0;
     }
    

}


function devolver(letra){
    let letradevolver="";

    switch(letra){
        case "a":
           letradevolver="ai";
           break;
        case "e":
            letradevolver="enter";
            break;
        case "o":
            letradevolver="ober";
            break;
        case "u":
            letradevolver="ufat";
            break;
        case "i":
            letradevolver="imes"
            break
        default:
            letradevolver=letra;
            break;
            
    }

    return letradevolver;
  



}