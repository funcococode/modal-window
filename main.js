const modalWindow = document.querySelector("#modalWindow")
const openBtn = document.querySelector("#modalOpen")
const closeBtn = document.querySelector("#modalClose")

openBtn.addEventListener('click',()=>{
    modalWindow.classList.add('open')
})

closeBtn.addEventListener("click",()=>{
    modalWindow.classList.remove('open')
})