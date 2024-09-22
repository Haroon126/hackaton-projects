const button = document.querySelector('button') as HTMLButtonElement
const person_Info = document.querySelector('.personal-info-content') as HTMLDivElement


button.addEventListener('click', (): void => {
    setTimeout(()=>{
        person_Info.classList.toggle('show')
        
    },2000)
    
})