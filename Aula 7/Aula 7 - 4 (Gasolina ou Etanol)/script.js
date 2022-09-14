function qual() {
    let gasolina =  5.17;
    let etanol = 3.71; 

    let soma = etanol / gasolina

    if (soma <= 0.7) {
        document.getElementById('resultado').innerHTML = `<p>Etanol</p>`
    }
    else {
        document.getElementById('resultado').innerHTML = `<p>Gasolina</p>`
    }
}