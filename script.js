
function Gerar(){
   
const max = Math.ceil(document.querySelector(".max-input").value )
const min = Math.floor(document.querySelector(".min-input").value )

const result = Math.floor(Math.random() * (max - min) + min);

console.log(result)
alert(result)
}
