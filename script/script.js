let formasDePag = document.querySelector('.formasDePag')

formasDePag.addEventListener('click', function(e){
    let x = e.target.classList

    let frente = document.querySelector('.transacaoEscolha')

    frente.style.display = 'block'

    if (x[0] == 'pix') {
        var i = 1
        destaque(x)
        destaqueRemover(x)
        frente.style.display = 'none'
    }
    else if (x[0] == 'qrcode') {
        var i = 2
        destaque(x)
        destaqueRemover(x)
        frente.style.display = 'none'

    }
    else if (x[0] == 'boleto') {
        var i = 3
        destaque(x)
        destaqueRemover(x)
        frente.style.display = 'none'

    }
    else if (x[0] == 'cobrar') {
        var i = 4
        destaque(x)
        destaqueRemover(x)
        frente.style.display = 'none'
    }

    else if (x[0] == 'formasDePag'){
        document.querySelector('.transacaoEscolha').classList.add('show')
    }

    removendoClasses()
    adicionandoClasses(i)
})

function destaque(parametro){
    document.querySelector(`img.${parametro[0]}`).setAttribute('src', `images/${parametro[0]}-verde.png`)
    document.querySelector(`.${parametro[0]}`).classList.add('destaque')
}

function destaqueRemoverComplemento(x, y, z){
    document.querySelector(`.${x}`).classList.remove('destaque')
    document.querySelector(`.${y}`).classList.remove('destaque')
    document.querySelector(`.${z}`).classList.remove('destaque')
    
    document.querySelector(`img.${x}`).setAttribute('src', `images/${x}.png`)
    document.querySelector(`img.${y}`).setAttribute('src', `images/${y}.png`)
    document.querySelector(`img.${z}`).setAttribute('src', `images/${z}.png`)
}

function destaqueRemover(parametro){
    if (parametro[0] == 'pix') {
        let primeira = 'qrcode'
        let segunda = 'boleto'
        let terceira = 'cobrar'
        destaqueRemoverComplemento(primeira, segunda, terceira)
    }
    if (parametro[0] == 'qrcode') {
        let primeira = 'pix'
        let segunda = 'boleto'
        let terceira = 'cobrar'
        destaqueRemoverComplemento(primeira, segunda, terceira)
    }
    if (parametro[0] == 'boleto') {
        let primeira = 'qrcode'
        let segunda = 'pix'
        let terceira = 'cobrar'
        destaqueRemoverComplemento(primeira, segunda, terceira)
    }
    if (parametro[0] == 'cobrar') {
        let primeira = 'qrcode'
        let segunda = 'pix'
        let terceira = 'boleto'
        destaqueRemoverComplemento(primeira, segunda, terceira)
    }
}

function adicionandoClasses(i){
    const elementoClick = document.querySelectorAll('.containerTransacao .divMostrar')
    
    document.querySelector('.transacaoEscolha').classList.remove('show')

    console.log(elementoClick)
     
    // PIX
    if (i == 1) {
        elementoClick[0].classList.add('show')  
        elementoClick[1].classList.add('show2')  
        elementoClick[2].classList.add('show2')
    }
    // QRCODE
    else if (i == 2){
        elementoClick[3].classList.add('show')
    }
    // BOLETO
    else if (i == 3) {
        elementoClick[4].classList.add('show')
    }
    // COBRAR
    else if (i == 4) {
        elementoClick[5].classList.add('show')
        elementoClick[6].classList.add('show2')
    }
}

function removendoClasses(){
    const divs = document.querySelectorAll('.divMostrar')
    for (let i = 0; i < divs.length; i++){
        divs[i].classList.remove('show')
    }
}

document.querySelector('.olho').addEventListener('click', function(){
    document.querySelector('.lineOlho').classList.toggle('mostrarElemento')
    document.querySelector('.valor').classList.toggle('mostrarElemento')
    document.querySelector('.lineSaldo').classList.toggle('ocultarElemento')
   
})

const copiar = function (codigo) {
    navigator.clipboard.writeText(codigo)
    document.querySelector('.chaveCopiada').style.cssText = 'display: flex;'
    setTimeout(() => {
        document.querySelector('.chaveCopiada').style.cssText = 'display: none;'
    }, 2000);
}
