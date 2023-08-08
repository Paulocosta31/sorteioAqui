
function Gerar() {


    const max = Math.ceil(document.querySelector(".max-input").value)
    const min = Math.floor(document.querySelector(".min-input").value)

    if (max >= min) {
        alert("Valor Minimo sempre tem que ser MENOR que o valor Maximo")
    } else {

        const result = Math.floor(Math.random() * (max - min) + min);

        document.querySelector(".resultado").value = result

    }




}






