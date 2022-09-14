function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h2 class="function-titulo">Tabuada de ${n}</h2>`
    let c = 1
    while (c <= 10) {
        saida.innerHTML += `<h2>${n} x ${c} = <strong> ${n * c}</strong></h2><br>`
        c++
    }
}