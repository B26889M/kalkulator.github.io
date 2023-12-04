let operator = prompt("pilih simbol yang akan digunakan (+,-,*,/)")
let num1 = parseFloat(prompt("Angka 1"))
let num2 = parseFloat(prompt("Angka 2"))


if(operator === "+" ){
    document.write(`Hasil: ${num1 + num2}`)
}else if (operator === "-"){
    document.write(`Hasil: ${num1 - num2}`)
}else if (operator === "*"){
    document.write(`Hasil: ${num1 * num2}`)
}else if (operator === "/"){
    document.write(`Hasil: ${num1 / num2}`)
}
