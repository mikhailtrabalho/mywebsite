window.addEventListener("scroll", function(){
    /*testar o seletor com clase em vez de ID*/
    let header = document.querySelector('.header_efeito')
    header.classList.toggle('rolagem',window.scrollY > 200)
})