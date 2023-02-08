// const panels = document.querySelectorAll('.panel')

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.toggle('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }

//```````````````````````````````````````````` opcia 2

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.toggle('active')
    })
})
