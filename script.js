
function contarVariables(){
    const inputString = document.getElementById("input").value;
    const vocales = "aeiouAEIOU";
    let cantidad = 0;

    if (inputString){
        for (let i = 0; i < inputString.length; i++){
            if (vocales.includes(inputString[i])){
                cantidad++;
            }
        }
    }

    document.getElementById("salida").innerText += cantidad;

}