
function contarVariables(){
    const inputString = document.getElementById("input").value;
    const vocals = "aeiouAEIOU";
    let amount = 0;

    if (inputString){
        for (let i = 0; i < inputString.length; i++){
            if (vocals.includes(inputString[i])){
                amount++;
            }
        }
    }

    document.getElementById("salida").innerText = "Cantidad de vocales: " +  amount;
}

function resetInput(){
    document.getElementById("input").value = "";
}

function goToGithub(){
    window.open("https://github.com/David-Avila/Contador-de-Vocales", "_self")
}