function somar() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let cal = n1 + n2

    document.getElementById('result').innerHTML = `<p>Seu número deu <strong>${cal}</strong>. `
}

function subtrair() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let cal = n1 - n2

    document.getElementById('result').innerHTML = `<p>Seu número deu <strong>${cal}</strong>. `
}

function dividir() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let cal = n1 / n2

    document.getElementById('result').innerHTML = `<p>Seu número deu <strong>${cal}</strong>. `
}

function multiplicar() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let cal = n1 * n2

    document.getElementById('result').innerHTML = `<p>Seu número deu <strong>${cal}</strong>. `
}