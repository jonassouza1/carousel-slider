const setaEsquerda = document.getElementById('esquerda')
const imagens = document.querySelectorAll('.imagem')
const mostrar = document.querySelector('.mostrar')
const setaDireita = document.getElementById('direita')
let ind = 0

setaDireita.addEventListener('click', () => {
    passarImagemPraDireita()
    removerImagemAdicionarProxima()

})
setaEsquerda.addEventListener('click', () => {
    passarImagemPraEsquerda()
    removerImagemAdicionarSeguinte()
})


function passarImagemPraDireita() {
    if (ind === imagens.length - 1) {
        setaDireita.classList.add('btm')
    } else {
        setaEsquerda.classList.remove('btm')
        ind++
    }
}
function removerImagemAdicionarProxima() {
    imagens.forEach((img) => {
        img.classList.remove('mostrar')
    })
    imagens[ind].classList.add('mostrar')
}
function passarImagemPraEsquerda() {
    if (ind === 0) {
        ind=0
        setaEsquerda.classList.add('btm')
    } else {
        setaDireita.classList.remove('btm')
        ind--
    }
}
function removerImagemAdicionarSeguinte() {
    imagens.forEach((img) => {
        img.classList.remove('mostrar')
    })
    imagens[ind].classList.add('mostrar')
}