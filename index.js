const personForm = document.querySelector('form#personForm')

function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    console.log(f.personName)
}

personForm.addEventListener('submit', handleSubmit)