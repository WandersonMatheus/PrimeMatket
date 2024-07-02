function menuShow(){
    let menuMoble = document.querySelector('.categorias-menu')
    if(menuMoble.classList.contains('open')){
        menuMoble.classList.remove('open')
    }else{
        menuMoble.classList.add('open')
    }
}