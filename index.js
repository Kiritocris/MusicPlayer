const anterior = document.getElementById('sigid')
const siguiente = document.getElementById('antid')
const play = document.getElementById('playid')
const estado = document.getElementById('reproductorestado')
const cover = document.getElementById('imageid')
const musica = document.getElementById('musicid')
const images = ["images/CoverBeatles.jpg","images/CoverMuse.jpg","images/CoverQueen.jpg","images/CoverClair.jpg"]
const audios = ["music/Beatles.3gp","music/Muse.3gp","music/Queen.mp3","music/Clair.3gp"]
const estados = ["M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]
let estadoactual = true
let min = 0
let actual = 0
let max = images.length-1

cover.src = images[actual]

siguiente.addEventListener('click',function sigcancion(){
    if (actual<max){
        actual++
        cover.src = images[actual]
        musica.src = audios[actual]
        musica.play()
        estadoactual = false
        estado.setAttribute('d',estados[1])
    } 
})

anterior.addEventListener('click',function antcancion(){
    if (actual>min){
        actual--
        cover.src = images[actual]
        musica.src = audios[actual]
        musica.play()
        estadoactual = false
        estado.setAttribute('d',estados[1])
    } 
})

play.addEventListener('click',function playcancion(){
     if (estadoactual){
        estadoactual = false
        estado.setAttribute('d',estados[1])
        musica.play()
     }else{
        estadoactual = true
        estado.setAttribute('d',estados[0])
        musica.pause()
     }
})