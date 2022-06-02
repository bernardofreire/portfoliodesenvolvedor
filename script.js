// Função para abri e fechar o sidebar ao clicar no hamburguer

let hamburguer = document.querySelector(".hamburguer")


hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu")
})


// funçao para fechar sidebar ao clicar em um link

let closeLinks = document.querySelectorAll('.sidebar .menu ul a li')

for(let closeLink of closeLinks){
    closeLink.addEventListener('click', ()=>{
        document.querySelector(".container").classList.toggle("show-menu")
    })
}
