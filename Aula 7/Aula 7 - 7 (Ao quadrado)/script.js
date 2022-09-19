function calcular() {

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)
    let n5 = Number(document.getElementById("n5").value)

    let c1 = Math.pow(n1, 2)
    let c2 = Math.pow(n2, 2)
    let c3 = Math.pow(n3, 2)
    let c4 = Math.pow(n4, 2)
    let c5 = Math.pow(n5, 2)

    document.getElementById('resultado').innerHTML = `<p> 1º: <strong>${c1}</strong><br> 2º: <strong>${c2}</strong><br> 3º: <strong>${c3}</strong><br> 4º: <strong>${c4}</strong><br> 5º: <strong>${c5}</strong></p>`

}