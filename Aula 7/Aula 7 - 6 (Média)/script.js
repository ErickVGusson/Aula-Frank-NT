function media() {

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)


    let calc = (n1 + n2 + n3 + n4) / 4

    document.getElementById('resultado').innerHTML = calc

}