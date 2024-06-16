
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

    document.getElementById("salida").innerText += amount;

}